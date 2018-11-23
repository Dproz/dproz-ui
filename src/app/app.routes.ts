import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DprozMainComponent } from './dproz/dproz-main/dproz-main.component';
import { HomeComponent } from './dproz-home/home/home.component';
import { LoginComponent } from './dproz-authentication/login/login.component';
import { VerificationComponent } from './dproz-authentication/verification/verification.component';
import { SignupComponent } from './dproz-authentication/signup/signup.component';
import { ProfileComponent } from './dproz-profile/profile/profile.component';
import { PasswordResetComponent } from './dproz-authentication/password-reset/password-reset.component';
import { LoggedInGuard } from './shared/gaurds/logged-in.guard';
import { DprozContactUsComponent } from './dproz-contact-us/dproz-contact-us.component';
import { DprozAboutUsComponent } from './dproz-about-us/dproz-about-us.component';
import { ServicesComponent } from './services/services.component';
import { DprozExperienceComponent } from './services/dproz-experience/dproz-experience.component';
import { BasicInfoComponent } from './services/basic-info/basic-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dproz',
    pathMatch: 'full'
  },
  {
    path: 'dproz',
    component: DprozMainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'authenticate/:code', component: VerificationComponent },
      { path: 'authenticate', component: VerificationComponent },
      { path: 'contact-us', component: DprozContactUsComponent },
      { path: 'about-us', component: DprozAboutUsComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
      { path: 'password/:code', component: PasswordResetComponent },
      { path: 'password', component: PasswordResetComponent },
      { path: 'basic-info', component: BasicInfoComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: true
      }
    )
  ],
  exports: [ RouterModule ],
  providers: [LoggedInGuard]
})

export class AppRoute {}



