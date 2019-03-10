import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VerificationComponent } from './verification/verification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {
  MatFormFieldModule, MatInputModule, MatIconModule, MatRadioModule, MatOptionModule,
  MatSelectModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule
  ],
  declarations: [SignupComponent, LoginComponent, VerificationComponent, PasswordResetComponent],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: '6Lejo2kUAAAAAKpLBaJ4NtKM6tuv8wgIB9Wr0big' } as RecaptchaSettings,
    }
  ]
})
export class DprozAuthenticationModule { }
