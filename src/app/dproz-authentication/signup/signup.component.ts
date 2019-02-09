import { debounce } from 'rxjs/operators';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StateService } from '../../shared/services/state.service';

import * as isEmail from 'isemail';
import { PlacesService } from '../../shared/services/places.service';
import { timer } from 'rxjs';
import { passwordMatchValidator } from '../../shared/validators/professional-profile';
import { PASS_PATTERN } from '../../shared/constants/constants';
import { PHONE_PATTERN } from '../../shared/constants/constants';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material';
import { MatCheckbox } from '@angular/material';




@Component({
  selector: 'dproz-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: AuthenticationService,
    private state: StateService,
    private placesService: PlacesService) { }

  signupForm: FormGroup;
  user = '';
  countries = [];
  states = [];
  regions = [];
  cities = [];
  counties = [];
  streets = [];
  selectedRegion = '';
  selectedCity = '';
  selectedCounty = '';
  selectedCountry = '';
  selectedStreet = '';
  submissionError = undefined;


  ngOnInit() {
    this.signupForm = this.fb.group({
      userType: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: '',
      emailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.pattern(PASS_PATTERN)]],
      repeatPassword: ['', Validators.required],
      lastChangedPasswordOn: null,
      verificationDate: null,
      verified: true,
      recaptcha: [null, Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    });

    const password = this.signupForm.get('password') as FormControl;
    const repeatPassword = this.signupForm.get('repeatPassword') as FormControl;

    password.valueChanges.pipe( debounce( () => timer(1000)))
                         .subscribe( pass => {
                          repeatPassword.setValidators(passwordMatchValidator(pass));
                         });
    this.placesService.getCountries().subscribe(countries => {
      this.countries = countries;
      console.log(this.countries);
    });
  }

  onSubmit() {
    if (this.signupForm.get('password').value !== this.signupForm.get('repeatPassword').value) {
      this.signupForm.get('repeatPassword').setErrors({ passMismatch: 'password' });
    }
    if (!isEmail.validate(this.signupForm.get('emailAddress').value)) {
      this.signupForm.get('emailAddress').setErrors({ invalidEmail: 'error' });
    }
    if (this.signupForm.valid) {
      const form = this.signupForm.value;
      this.service.signup(form).subscribe(({ userReferenceId }) => {
        window.sessionStorage.setItem('encoded', window.btoa(this.signupForm.get('emailAddress').value));
        this.state.setReferenceId(userReferenceId);
        this.state.setIdentity({ emailAddress: form.emailAddress });
        this.router.navigate(['../dproz/authenticate']);
      }, error => {
          window.sessionStorage.setItem('encoded', window.btoa(this.signupForm.get('emailAddress').value));
          this.submissionError = 'Error occured during signUp. Please try again later';
        this.signupForm.reset();
      });

    }
  }

  /**
   * For non PRO user send address and phone as null.
   */
  removeFormElements() {
    if (!this.isProUser()) {
      this.signupForm.removeControl('address');
      this.signupForm.removeControl('phone');
    }
  }

  addProFormElements() {
    if (this.isProUser) {
      this.signupForm.addControl('address', this.fb.group(
        {
          longitude: [0, [this.requiredValidator.bind(this)]],
          latitude: [0, this.requiredValidator.bind(this)],
          street: ['', this.requiredValidator.bind(this)],
          city: ['', this.requiredValidator.bind(this)],
          county: ['', this.requiredValidator.bind(this)],
          region: ['', this.requiredValidator.bind(this)],
          country: ['', this.requiredValidator.bind(this)],
          postcode: ['', this.requiredValidator.bind(this)],
          timezone: ['', this.requiredValidator.bind(this)]
        }
      ));
      this.signupForm.addControl('phone', this.fb.group({
        phoneNumber: ['', [this.requiredValidator.bind(this), this.phonePatternValidator.bind(this)]],
        primary: true,
        contactMethod: 'CALL'
      }));
    }
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  countryChanged(countrySelectionChange: MatSelectChange) {
    this.placesService.getRegions(countrySelectionChange.value).subscribe(regions => {
     this.regions = regions;
    });
    this.selectedCountry = countrySelectionChange.value;
  }

  regionChanged(regionSelectionChange: MatSelectChange) {
    this.placesService.getCities(regionSelectionChange.value, this.selectedCountry).subscribe(cities => {
      this.cities = cities;
    });
    this.selectedRegion = regionSelectionChange.value;
  }

  cityChanged(citySelectionChange: MatSelectChange) {
    this.placesService.getCounties(this.selectedRegion, citySelectionChange.value, this.selectedCountry).subscribe(counties => {
      this.counties = counties;
    });
    this.selectedCity = citySelectionChange.value;
  }

  countyChanged(countySelectionChange: MatSelectChange) {
    this.placesService.getStreets(this.selectedRegion, this.selectedCity, countySelectionChange.value,
      this.selectedCountry).subscribe(streets => {
        this.streets = streets;
    });
    this.selectedCounty = countySelectionChange.value;
  }

  streetChanged(streetSelectionChange: MatSelectChange) {
    const currentStreet: any = streetSelectionChange.value;
    this.selectedStreet = streetSelectionChange.value;
    console.log(currentStreet);
    this.signupForm.patchValue({
      address: {
        longitude: currentStreet._longitude,
        latitude: currentStreet._latitude,
        street: currentStreet._street,
        city: currentStreet._city,
        county: currentStreet._county,
        postcode: currentStreet._postcode,
        region: currentStreet._region,
        country: currentStreet._country,
        timezone: currentStreet._timezone
      }
    });
  }

  // IF not populated correctly - you could get aggregated FormGroup errors object
getErrors (formGroup: FormGroup, errors: any = {}) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      errors[field] = control.errors;
    } else if (control instanceof FormGroup) {
      errors[field] = this.getErrors(control);
    }
  });
  return errors;
}



  isProUser() {
    return !this.signupForm || this.signupForm.get('userType').value === 'PRO';
  }

  userTypeChange(userTypeChanged: MatRadioChange) {
    this.signupForm.userType = userTypeChanged.value;
    this.addProFormElements();
    this.removeFormElements();
    this.submissionError = undefined;
  }

  userTypeError() {
   return this.signupForm.get('userType').errors;
  }

  misMatchPassword() {
    return this.signupForm.get('password').value !== this.signupForm.get('repeatPassword').value;
  }

  hasError(input: any, type?: string) {
    return (type ? this.signupForm.get(input).getError(type) : this.signupForm.get(input).errors)
      && this.signupForm.get(input).touched;
  }

  requiredValidator(c: any) {
    return ( this.isProUser() && !c.value) ? { required: true } : null;
  }

  phonePatternValidator(c: any) {
    return (this.isProUser() ? PHONE_PATTERN.test(c.value) ? null :
      { 'pattern': { 'requiredPattern': PHONE_PATTERN.toString(), 'actualValue': c.value } } : null);
  }
}
