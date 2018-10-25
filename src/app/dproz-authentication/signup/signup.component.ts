import { debounce } from 'rxjs/operators';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StateService } from '../../shared/services/state.service';

import * as isEmail from 'isemail';
import { PlacesService } from '../../shared/services/places.service';
import { timer } from 'rxjs';
import { passwordMatchValidator } from '../../shared/validators/professional-profile';
import { PASS_PATTERN } from '../../shared/constants/constants';




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
  states = [];
  cities = [];
  counties = [];
  streets = [];
  selectedState = '';
  selectedCity = '';
  selectedCounty = '';
  

  ngOnInit() {
    this.signupForm = this.fb.group({
      userType: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      middleName: '',
      emailAddress: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', [Validators.pattern(PASS_PATTERN)]],
      repeatPassword: ['', Validators.required],
      // profilePictureUrl: null,
      lastChangedPasswordOn: null,
      verificationDate: null,
      verified: true,
      recaptcha: [null, Validators.required],
      phone: this.fb.group({
        phoneNumber: '',
        primary: true,
        contactMethod: 'CALL'
      }),
      address: this.fb.group({
        longitude: [0, [this.requiredValidator.bind(this)]],
        latitude: [0, this.requiredValidator.bind(this)],
        street: ['', this.requiredValidator.bind(this)],
        city: ['', this.requiredValidator.bind(this)],
        county: ['', this.requiredValidator.bind(this)],
        region: ['', this.requiredValidator.bind(this)],
        country: ['', this.requiredValidator.bind(this)],
        postcode: ['', this.requiredValidator.bind(this)],
        timezone: ['', this.requiredValidator.bind(this)]
      })
    });

    let password = this.signupForm.get('password') as FormControl;
    let repeatPassword = this.signupForm.get('repeatPassword') as FormControl;

    password.valueChanges.pipe( debounce( ()=> timer(1000)))
                         .subscribe( pass =>{

                          console.log(pass);
                          repeatPassword.setValidators(passwordMatchValidator(pass));
              
                         });

                  

    this.placesService.getRegions().subscribe(regions => {
      this.states = regions;
      console.log(this.states);

    });

    this.userChange();
  }

  onSubmit() {
    if (this.signupForm.get('password').value !== this.signupForm.get('repeatPassword').value) {
      this.signupForm.get('repeatPassword').setErrors({ passMismatch: "password" })
    }
    if (!isEmail.validate(this.signupForm.get('emailAddress').value))
      this.signupForm.get('emailAddress').setErrors({ invalidEmail: 'error' });

    if (this.signupForm.valid) {
      let form = this.signupForm.getRawValue();
      // if (form.userType === 'USER') {
      //   delete form.address;
      // }
      this.service.signup(form).subscribe(({ userReferenceId }) => {
        window.sessionStorage.setItem('encoded', window.btoa(this.signupForm.get('emailAddress').value));
        this.state.setReferenceId(userReferenceId);
        this.state.setIdentity({ emailAddress: form.emailAddress })
        this.router.navigate(['../dproz/authenticate']);
      }, error => {
        window.sessionStorage.setItem('encoded', window.btoa(this.signupForm.get('emailAddress').value));
        // this.router.navigate(['../dproz/authenticate']);
        console.log(error, `Error!!!!`)
      });

    }
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  userChange() {
    this.signupForm.get('userType').valueChanges.subscribe(v => {
      Object.keys((this.signupForm.get('address') as FormGroup).controls).forEach(element => {
        this.signupForm.get('address').get(element).updateValueAndValidity();
      });
    })
  }

  addressChange(e) {
    if (e.target.id === 'state') {
      this.selectedState = e.target.value;
      this.signupForm.get('address').get('region').setValue(null);
      this.signupForm.get('address').get('county').setValue(null);
      this.signupForm.get('address').get('street').setValue(null);
      this.placesService.getCities(this.selectedState).subscribe(cities => {
        this.cities = cities;
      })
    } else if (e.target.id === 'city') {
      this.signupForm.get('address').get('county').setValue(null);
      this.signupForm.get('address').get('street').setValue(null);
      this.selectedCity = e.target.value
      this.placesService.getCounties(this.selectedState, this.selectedCity).subscribe(counties => {
        this.counties = counties;
      })
    } else if (e.target.id === 'county') {
      this.signupForm.get('address').get('street').setValue(null);
      this.selectedCounty = e.target.value;
      this.placesService.getStreets(this.selectedState, this.selectedCity, this.selectedCounty).subscribe(streets => {
        this.streets = streets;
      })
    } else if (e.target.id === 'street') {
      let addressSelected: any = this.streets.find(el => el._street === e.target.value && el._county === this.selectedCounty);

      this.signupForm.patchValue({
        address: {
          longitude: addressSelected._longitude,
          latitude: addressSelected._latitude,
          street: addressSelected._street,
          city: addressSelected._city,
          county: addressSelected._county,
          postcode: addressSelected._postcode,
          region: addressSelected._region,
          country: addressSelected._country,
          timezone: addressSelected._timezone
        }
      });
      console.log(this.signupForm.get('address'));
    }
  }

  userType(e) {

    this.user = e.target.id;
    let { checked } = e.target;
    if (checked)
      this.signupForm.get('userType').setValue(this.user);
    else
      this.signupForm.get('userType').setValue('');
  }

  userTypeError() {
    this.signupForm.get('userType').errors
  }

  hasError(input, type?: string) {
    return (type ? this.signupForm.get(input).getError(type) : this.signupForm.get(input).errors)
      && this.signupForm.get(input).touched;
  }

  requiredValidator(c) {
    return (this.user === 'PRO' && !c.value) ? { required: true } : null;
  }

}
