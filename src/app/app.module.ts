import { DaysOfWeekPipe } from './shared/pipes/days-of-week.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/global-components/header/header.component';
import { AppRoute } from './app.routes';
import { DprozModule } from './dproz/dproz.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './shared/services/authentication.service';
import { StateService } from './shared/services/state.service';
import { PlacesService } from './shared/services/places.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthTokenInterceptor } from './shared/http-interceptors/auth-token-interceptor';
import { DprozContactUsComponent } from './dproz-contact-us/dproz-contact-us.component';
import { DprozAboutUsComponent } from './dproz-about-us/dproz-about-us.component';
import { DocumentService } from './shared/services/document.service';
import { ServicesComponent, EditServiceComponent } from './services/services.component';
import { MatMenuModule, MatCardModule, MatTabsModule, MatStepperModule, MatListModule,
   MatDialogModule, MatInputModule, MatFormFieldModule, MatTreeModule, MatIconModule, MatProgressBarModule,
   MatCheckboxModule, MatButtonModule, MatIconRegistry, MatExpansionModule, MatDatepickerModule,
   MatNativeDateModule, MatOptionModule, MatSelectModule, MatPaginatorModule, MatChipsModule } from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServiceModule } from './service/service.module';
import { BasicInfoComponent } from './services/basic-info/basic-info.component';
import { DprozProfProfileComponent } from './dproz-prof-profile/dproz-prof-profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DprozExperienceComponent } from './services/dproz-experience/dproz-experience.component';
import { DprozCredentialsComponent } from './services/dproz-credentials/dproz-credentials.component';

import { ResponsiveMenuDirective } from './shared/directives/responsive-menu.directive';
import { CredentialTypePipe } from './shared/pipes/credential-type.pipe';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
];
@NgModule({
  declarations: [
    AppComponent, ResponsiveMenuDirective, CredentialTypePipe, DaysOfWeekPipe,
    HeaderComponent,
    DprozContactUsComponent,
    DprozAboutUsComponent,
    ServicesComponent, EditServiceComponent, BasicInfoComponent, DprozProfProfileComponent, DprozExperienceComponent,
    DprozCredentialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    // Routing
    AppRoute, AngularFontAwesomeModule, MatOptionModule, MatSelectModule, MatPaginatorModule, MatChipsModule,
    DprozModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatStepperModule, MatInputModule,
    MatTreeModule, MatIconModule, MatProgressBarModule, MatCardModule, MatTabsModule, BrowserAnimationsModule,
    MatListModule, MatDialogModule, ServiceModule, MatCheckboxModule, MatButtonModule,
    MatMenuModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule
  ],
  entryComponents: [EditServiceComponent, ],
  providers: [
    AuthenticationService,
    StateService,
    PlacesService,
    DocumentService,
    httpInterceptorProviders, MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
