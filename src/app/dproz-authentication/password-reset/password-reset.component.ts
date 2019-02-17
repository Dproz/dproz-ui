import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StateService } from '../../shared/services/state.service';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

const passwordValidation: ValidatorFn = (fg: FormGroup) => {
  return null;
};
@Component({
  selector: 'dproz-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  isLoggedIn: boolean;
  forgotPasswordForm: FormGroup;
  changePasswordForm: FormGroup;
  activeForm = 'changePasswordForm';
  emailId;
  error;
  resetPassword;
  errorMessage;

  constructor(private service: AuthenticationService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private state: StateService) { }

  ngOnInit() {
    this.isLoggedIn =  this.state.getState().loggedIn;
    this.changePasswordForm = this.fb.group({
      oldPassword: ['Dproz@123', this.activeForm === 'forgotPasswordForm' ? [Validators.required] : []],
      newPassword: ['Dproz@1234', Validators.required],
      confirmPassword: ['Dproz@1234', Validators.required],
      userReferenceId: ['', Validators.required]
    }, { validator: passwordValidation });
    // this.forgotPasswordForm = this.fb.group({
    //   emailAddress: ['', Validators.required]
    // })

    this.route.params.subscribe(data => {
      if (data.code && !this.isLoggedIn) {
        const a = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo0jMEOgjAQRP9lz4RsS2laTl698gcLXZQohbRWjMZ_d010LpNM3rwX5DJAB_d8prSQ1vZwWmi-1uO6QAVUwsxxZCFKvMR1jzKOienGATrVNlp5J2WdrWDOWbhdUoctrc-fo2ROPU9fzVFOgEjeGtOixWCc1wO6RhkV_DQgORPkwo_tb_fYNu8PAAAA__8.4n83875p9g0xa--8v80ztPwJZK0jEOQwDHa3UAB462v2FblfZoIuN0NcfOL1531hP6nCXiRtvH2pnpqlH60DCA';
        this.service.verifyEmail(data.code).subscribe(({Authorization, userReferenceId}) => {
          window.localStorage.setItem('auth-token', Authorization);
          this.changePasswordForm.get('userReferenceId').setValue(userReferenceId);
          this.activeForm = 'forgotPasswordForm';

        }, error => {
          this.activeForm = 'inActive';
          this.errorMessage = 'Unable to retrieve account Info.';
        });
      } else if (!data.code && !this.isLoggedIn) {
        this.router.navigate(['../dproz/login']);
      } else {
        this.activeForm = 'changePasswordForm';
        this.changePasswordForm.get('userReferenceId').setValue(this.state.getState().userReferenceId);
      }
    });
  }

  formValidator(c) {
   return this.activeForm === 'changePasswordForm' ? Validators.required : null;
  }

  // passwordValidation(control: FormGroup): ValidatorFn {
  //   return (c) => {
  //     if (this.activeForm==='changePasswordForm' && control.get('oldPassword').value !== control.get('newPassword').value) {
  //       return {unchangedPassword: 'New password cannot be same as the old password.'}
  //     }
  //     if(control.get('newPassword') !== control.get('confirmPassword')){
  //       return {passwordMismatch: 'Password does not match the new password.'}
  //     }
  //     return null;
  //   }
  // }

  email(e) {
    this.error = false;
    this.emailId = e.target.value;
  }

  onSubmit() {

    if (this.changePasswordForm.valid) {
      const formData = this.changePasswordForm.getRawValue();
      // if (this.activeForm==='forgotPasswordForm') {
      //   delete formData.oldPassword;
      // }
      this.service.changePassword(formData).subscribe(() => {
        window.localStorage.removeItem('auth-token');
        window.localStorage.removeItem('user-reference');
        this.router.navigate(['../dproz/login']);
      }, (error: HttpErrorResponse) => {
        console.log(error.status);
        if (error.status === 400) {

        }
        console.log(error, `Error while resetting password`);
      });
    }
  }

}
