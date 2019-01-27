import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { StateService } from '../../shared/services/state.service';
import { Auth } from '../../shared/interfaces/auth';
import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'dproz-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  emailConfirmationForm: FormGroup;
  loginErrorResponse: Response;
  fpErrorResponse: Response;
  activeForm = 'loginForm';
  private TREE_DATA = {};

  constructor(
    private services: ServicesService,
    private fb: FormBuilder,
    private router: Router,
    private service: AuthenticationService,
    private state: StateService
  ) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.forgotPasswordForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]]
    });

    this.emailConfirmationForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]]
    });

  }

  toggleForm() {
    this.activeForm =
      this.activeForm === 'loginForm' ? 'forgotPasswordForm' : 'loginForm';
  }

  goToEmailConfirmation() {
    this.activeForm = 'emailConfirmationForm';
    console.log(this.activeForm);
  }

  goToLoginPage() {
    this.activeForm = 'loginForm';
  }

  onLoginSubmit() {
    this.service.login(this.loginForm.getRawValue()).subscribe(
      ({ Authorization, userReferenceId }: Auth) => {
        window.localStorage.setItem('auth-token', Authorization);
        window.localStorage.setItem('user-reference', userReferenceId);
        this.loginErrorResponse = null;
        this.state.next({
          loggedIn: true,
          authToken: Authorization,
          userReferenceId
        });

        this.service
          .getUser(this.state.getState().userReferenceId)
          .subscribe(data => {
            const loginData = JSON.stringify(data);
            localStorage.setItem('user_details', loginData);
            this.state.setIdentity(data);
            this.router.navigate(['../dproz/home']);
          });

        this.services.getServices().subscribe(x => {
          const y = JSON.parse(JSON.stringify(x));
          for (let i = 0; i < y.length; i++) {
            const k = y[i];
            if (this.TREE_DATA[k.category.categoryName] === undefined) {
              this.TREE_DATA[k.category.categoryName] = {};
            }
            this.TREE_DATA[k.category.categoryName][k.serviceNumber] =
              k.serviceDescription;
          }
          localStorage.setItem('service_tree', JSON.stringify(this.TREE_DATA));
          localStorage.setItem('all_services', JSON.stringify(x));
        });
      },
      error => {
        this.loginErrorResponse = error;
        this.loginForm.reset();
      }
    );
  }

  onForgotPasswordSubmit() {
    this.service
      .forgotPassword(this.forgotPasswordForm.getRawValue())
      .subscribe(
        () => {
          console.log('hey I am done confirmation');
          this.goToEmailConfirmation();
          console.log(this.activeForm);
        },
        error => {
          this.fpErrorResponse = error;
          this.forgotPasswordForm.reset();
        }
      );
  }
}
