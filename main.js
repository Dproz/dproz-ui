(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <dproz-header></dproz-header>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(service, state, router) {
        this.service = service;
        this.state = state;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.localStorage.getItem('auth-token') && window.localStorage.getItem('user-reference')) {
            this.state.next({ loggedIn: true, authToken: window.localStorage.getItem('auth-token'), userReferenceId: window.localStorage.getItem('user-reference') });
            this.service.getUser(this.state.getState().userReferenceId).subscribe(function (data) {
                _this.state.setIdentity(data);
                // this.router.navigate(['../dproz/home']);
            }, function (error) {
                console.log(error);
                _this.state.resetState();
                window.localStorage.removeItem('auth-token');
                window.localStorage.removeItem('user-reference');
                _this.router.navigate(['../dproz/login']);
            });
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: httpInterceptorProviders, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_pipes_days_of_week_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pipes/days-of-week.pipe */ "./src/app/shared/pipes/days-of-week.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_global_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/global-components/header/header.component */ "./src/app/shared/global-components/header/header.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _dproz_dproz_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dproz/dproz.module */ "./src/app/dproz/dproz.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _shared_services_places_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/places.service */ "./src/app/shared/services/places.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared_http_interceptors_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/http-interceptors/auth-token-interceptor */ "./src/app/shared/http-interceptors/auth-token-interceptor.ts");
/* harmony import */ var _dproz_contact_us_dproz_contact_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dproz-contact-us/dproz-contact-us.component */ "./src/app/dproz-contact-us/dproz-contact-us.component.ts");
/* harmony import */ var _dproz_about_us_dproz_about_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dproz-about-us/dproz-about-us.component */ "./src/app/dproz-about-us/dproz-about-us.component.ts");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/document.service */ "./src/app/shared/services/document.service.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/service.module */ "./src/app/service/service.module.ts");
/* harmony import */ var _services_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/basic-info/basic-info.component */ "./src/app/services/basic-info/basic-info.component.ts");
/* harmony import */ var _dproz_prof_profile_dproz_prof_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dproz-prof-profile/dproz-prof-profile.component */ "./src/app/dproz-prof-profile/dproz-prof-profile.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _services_dproz_experience_dproz_experience_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/dproz-experience/dproz-experience.component */ "./src/app/services/dproz-experience/dproz-experience.component.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/esm5/ngx-file-drop.js");
/* harmony import */ var _services_dproz_credentials_dproz_credentials_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/dproz-credentials/dproz-credentials.component */ "./src/app/services/dproz-credentials/dproz-credentials.component.ts");
/* harmony import */ var _shared_directives_responsive_menu_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/directives/responsive-menu.directive */ "./src/app/shared/directives/responsive-menu.directive.ts");
/* harmony import */ var _shared_pipes_credential_type_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/pipes/credential-type.pipe */ "./src/app/shared/pipes/credential-type.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _shared_http_interceptors_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthTokenInterceptor"], multi: true },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _shared_directives_responsive_menu_directive__WEBPACK_IMPORTED_MODULE_29__["ResponsiveMenuDirective"], _shared_pipes_credential_type_pipe__WEBPACK_IMPORTED_MODULE_30__["CredentialTypePipe"], _shared_pipes_days_of_week_pipe__WEBPACK_IMPORTED_MODULE_0__["DaysOfWeekPipe"],
                _shared_global_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _dproz_contact_us_dproz_contact_us_component__WEBPACK_IMPORTED_MODULE_13__["DprozContactUsComponent"],
                _dproz_about_us_dproz_about_us_component__WEBPACK_IMPORTED_MODULE_14__["DprozAboutUsComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_16__["EditServiceComponent"], _services_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_22__["BasicInfoComponent"], _dproz_prof_profile_dproz_prof_profile_component__WEBPACK_IMPORTED_MODULE_23__["DprozProfProfileComponent"], _services_dproz_experience_dproz_experience_component__WEBPACK_IMPORTED_MODULE_25__["DprozExperienceComponent"], _services_dproz_credentials_dproz_credentials_component__WEBPACK_IMPORTED_MODULE_28__["DprozCredentialsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                // Routing  
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["AppRoute"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_24__["AngularFontAwesomeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _dproz_dproz_module__WEBPACK_IMPORTED_MODULE_6__["DprozModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                _service_service_module__WEBPACK_IMPORTED_MODULE_21__["ServiceModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_26__["AngularFileUploaderModule"], ngx_file_drop__WEBPACK_IMPORTED_MODULE_27__["FileDropModule"]
            ],
            entryComponents: [_services_services_component__WEBPACK_IMPORTED_MODULE_16__["EditServiceComponent"],],
            providers: [
                _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
                _shared_services_state_service__WEBPACK_IMPORTED_MODULE_9__["StateService"],
                _shared_services_places_service__WEBPACK_IMPORTED_MODULE_10__["PlacesService"],
                _shared_services_document_service__WEBPACK_IMPORTED_MODULE_15__["DocumentService"],
                httpInterceptorProviders, _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_20__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dproz_dproz_main_dproz_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dproz/dproz-main/dproz-main.component */ "./src/app/dproz/dproz-main/dproz-main.component.ts");
/* harmony import */ var _dproz_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dproz-home/home/home.component */ "./src/app/dproz-home/home/home.component.ts");
/* harmony import */ var _dproz_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dproz-authentication/login/login.component */ "./src/app/dproz-authentication/login/login.component.ts");
/* harmony import */ var _dproz_authentication_verification_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dproz-authentication/verification/verification.component */ "./src/app/dproz-authentication/verification/verification.component.ts");
/* harmony import */ var _dproz_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dproz-authentication/signup/signup.component */ "./src/app/dproz-authentication/signup/signup.component.ts");
/* harmony import */ var _dproz_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dproz-profile/profile/profile.component */ "./src/app/dproz-profile/profile/profile.component.ts");
/* harmony import */ var _dproz_authentication_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dproz-authentication/password-reset/password-reset.component */ "./src/app/dproz-authentication/password-reset/password-reset.component.ts");
/* harmony import */ var _shared_gaurds_logged_in_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/gaurds/logged-in.guard */ "./src/app/shared/gaurds/logged-in.guard.ts");
/* harmony import */ var _dproz_contact_us_dproz_contact_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dproz-contact-us/dproz-contact-us.component */ "./src/app/dproz-contact-us/dproz-contact-us.component.ts");
/* harmony import */ var _dproz_about_us_dproz_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dproz-about-us/dproz-about-us.component */ "./src/app/dproz-about-us/dproz-about-us.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _services_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/basic-info/basic-info.component */ "./src/app/services/basic-info/basic-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        redirectTo: 'dproz',
        pathMatch: 'full'
    },
    {
        path: 'dproz',
        component: _dproz_dproz_main_dproz_main_component__WEBPACK_IMPORTED_MODULE_2__["DprozMainComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _dproz_home_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'login', component: _dproz_authentication_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'authenticate/:code', component: _dproz_authentication_verification_verification_component__WEBPACK_IMPORTED_MODULE_5__["VerificationComponent"] },
            { path: 'authenticate', component: _dproz_authentication_verification_verification_component__WEBPACK_IMPORTED_MODULE_5__["VerificationComponent"] },
            { path: 'contact-us', component: _dproz_contact_us_dproz_contact_us_component__WEBPACK_IMPORTED_MODULE_10__["DprozContactUsComponent"] },
            { path: 'about-us', component: _dproz_about_us_dproz_about_us_component__WEBPACK_IMPORTED_MODULE_11__["DprozAboutUsComponent"] },
            { path: 'signup', component: _dproz_authentication_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
            { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_12__["ServicesComponent"] },
            { path: 'profile', component: _dproz_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_shared_gaurds_logged_in_guard__WEBPACK_IMPORTED_MODULE_9__["LoggedInGuard"]] },
            { path: 'password/:code', component: _dproz_authentication_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"] },
            { path: 'password', component: _dproz_authentication_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_8__["PasswordResetComponent"] },
            { path: 'basic-info', component: _services_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_13__["BasicInfoComponent"] }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoute = /** @class */ (function () {
    function AppRoute() {
    }
    AppRoute = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            providers: [_shared_gaurds_logged_in_guard__WEBPACK_IMPORTED_MODULE_9__["LoggedInGuard"]]
        })
    ], AppRoute);
    return AppRoute;
}());



/***/ }),

/***/ "./src/app/dproz-about-us/dproz-about-us.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dproz-about-us/dproz-about-us.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about_us_style\">\r\n  <div class=\"container\">\r\n    <div class=\"row contact_row_style py-5\">\r\n      <div class=\"col-lg-12 \">\r\n         <h3>About Us</h3>\r\n         <div class=\"border_top border\"></div>\r\n         <p> HomePage  / <span>About Us</span> </p>\r\n      </div>\r\n    </div>\r\n  </div>  \r\n</div>\r\n<div class=\"container py-5\">\r\n    <div class=\"headding text-center pb-3\">\r\n      <h4 class=\"heading_style\">Who We Are.</h4>\r\n      <hr class=\"border_bott border\">\r\n      <p class=\"p_style\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 py-3\">\r\n        <div class=\"img_style text-md-center\">\r\n          <img class=\"img-fluid\" src=\"../../assets/images/1.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12 py-3\">\r\n        <div class=\"contant_style\">\r\n          <span>\r\n            “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. ”\r\n          </span>\r\n          <p class=\"p_style text-justify py-3\">\r\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dproz-about-us/dproz-about-us.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dproz-about-us/dproz-about-us.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about_us_style {\n  background-image: url('top-about-img.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-top: 4px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4; }\n\n.border_bott {\n  border: 1px solid #03a9f4;\n  padding: 2px;\n  width: 50px;\n  background: #03a9f4; }\n\n.border_top {\n  padding: 2px;\n  padding-bottom: 3px;\n  background-color: #fff;\n  width: 6%;\n  border: none !important;\n  margin-bottom: 10px; }\n\n.contact_row_style h3 {\n  font-size: 28px;\n  color: #fff;\n  font-family: Myriad Pro;\n  -webkit-font-family: Myriad Pro;\n  font-weight: 90;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.contact_row_style p {\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-top: 6px; }\n"

/***/ }),

/***/ "./src/app/dproz-about-us/dproz-about-us.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dproz-about-us/dproz-about-us.component.ts ***!
  \************************************************************/
/*! exports provided: DprozAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozAboutUsComponent", function() { return DprozAboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DprozAboutUsComponent = /** @class */ (function () {
    function DprozAboutUsComponent() {
    }
    DprozAboutUsComponent.prototype.ngOnInit = function () {
    };
    DprozAboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-dproz-about-us',
            template: __webpack_require__(/*! ./dproz-about-us.component.html */ "./src/app/dproz-about-us/dproz-about-us.component.html"),
            styles: [__webpack_require__(/*! ./dproz-about-us.component.scss */ "./src/app/dproz-about-us/dproz-about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DprozAboutUsComponent);
    return DprozAboutUsComponent;
}());



/***/ }),

/***/ "./src/app/dproz-authentication/dproz-authentication.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dproz-authentication/dproz-authentication.module.ts ***!
  \*********************************************************************/
/*! exports provided: DprozAuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozAuthenticationModule", function() { return DprozAuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/dproz-authentication/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/dproz-authentication/login/login.component.ts");
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verification/verification.component */ "./src/app/dproz-authentication/verification/verification.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/dproz-authentication/password-reset/password-reset.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DprozAuthenticationModule = /** @class */ (function () {
    function DprozAuthenticationModule() {
    }
    DprozAuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_9__["RecaptchaFormsModule"]
            ],
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _verification_verification_component__WEBPACK_IMPORTED_MODULE_4__["VerificationComponent"], _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"]],
            providers: [
                {
                    provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RECAPTCHA_SETTINGS"],
                    useValue: { siteKey: "6Lejo2kUAAAAAKpLBaJ4NtKM6tuv8wgIB9Wr0big" },
                }
            ]
        })
    ], DprozAuthenticationModule);
    return DprozAuthenticationModule;
}());



/***/ }),

/***/ "./src/app/dproz-authentication/login/login.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dproz-authentication/login/login.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container overlay\">\r\n    <div class=\"row\">\r\n      <div *ngIf=\"activeForm==='loginForm'\" class=\"offset-md-5 offset-sm-3 col-md-14 col-sm-18 form\">\r\n        <div class=\"form-text\">\r\n          <h2 class=\"overlay-text\">Log Into Your Provider or Consumer Account</h2>\r\n        </div>\r\n        <div class=\"form-inputs\">\r\n          <div class=\"form-icon\"> \r\n            <p>LOGIN</p>\r\n          </div>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\" novalidate>\r\n            <p *ngIf=\"loginErrorResponse\" class=\"error\" style=\"text-align: center\">Either emailId or password were incorrect. Please try again.</p>\r\n            <div>\r\n              <label for=\"email\">USERNAME</label>\r\n              <input type=\"text\" name=\"\" id=\"email\" placeholder=\"Email Address\" formControlName=\"username\">\r\n              <span *ngIf=\"loginForm.get('username').errors && loginForm.get('username').touched\" class=\"error\">Please enter an emailId.</span>\r\n            </div>\r\n            <div style=\"margin-bottom: 12px;\">\r\n              <label for=\"email\">PASSWORD</label>\r\n              <input type=\"password\" name=\"\" id=\"password\" placeholder=\"Email Password\" formControlName=\"password\">\r\n              <span *ngIf=\"loginForm.get('password').errors && loginForm.get('password').touched\" class=\"error\">Please enter a password.</span>\r\n              <span style=\"display: none;\" >Recover Password</span>\r\n            </div>\r\n            <p><a href=\"javascript:;\" (click)=\"toggleForm()\">*Recover Password</a></p>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">LOG IN</button>                \r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"activeForm==='forgotPasswordForm'\" class=\"offset-md-5 offset-sm-3 col-md-14 col-sm-18 form\">\r\n        <div class=\"form-text\">\r\n          <h2 class=\"overlay-text\">Enter your Email address</h2>\r\n        </div>\r\n        <div class=\"form-inputs\">\r\n          <div class=\"form-icon\"> \r\n            <p>Forgot Password</p>\r\n          </div>\r\n          <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onForgotPasswordSubmit()\" novalidate>\r\n            <p *ngIf=\"fpErrorResponse\" class=\"error\" style=\"text-align: center\">Either emailId or password were incorrect. Please try again.</p>\r\n            <div style=\"margin-bottom: 12px;\">\r\n              <label for=\"email\">Email Address</label>\r\n              <input type=\"text\" name=\"\" id=\"email\" placeholder=\"Email Address\" formControlName=\"emailAddress\">\r\n              <span *ngIf=\"forgotPasswordForm.get('emailAddress').errors && forgotPasswordForm.get('emailAddress').touched\" class=\"error\">Please enter an emailId.</span>\r\n            </div>\r\n            <p><a  href=\"javascript:;\" (click)=\"toggleForm()\">*Go to Login Page</a></p>\r\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"forgotPasswordForm.invalid\">Submit</button>                \r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dproz-authentication/login/login.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dproz-authentication/login/login.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-bottom: 48px;\n  text-align: center; }\n  .form .form-element {\n    margin-bottom: 12px; }\n  .form .error {\n    color: #fa1c1cf5; }\n  .form .overlay-text {\n    color: #fff; }\n  .form .form-inputs {\n    color: #737373; }\n  .form .form-icon {\n    background: #fff;\n    box-shadow: 0px 0px 5px 0px;\n    font-size: 24px;\n    padding: 16px;\n    z-index: 100;\n    position: relative; }\n  .form .form-icon p {\n      margin-bottom: 0; }\n  .form .form-text {\n    padding-top: 50px;\n    padding-bottom: 30px; }\n  .form form {\n    background-color: #fff;\n    box-shadow: 0px 1px 5px 0px;\n    padding: 24px;\n    text-align: left;\n    z-index: 2;\n    position: relative; }\n  .form form .user-type {\n      margin-bottom: 12px; }\n  .form form .user-type #PRO, .form form .user-type #USER {\n        width: auto;\n        display: inline-block;\n        margin: 0;\n        padding: 0; }\n  .form form .user-type input {\n        vertical-align: middle; }\n  .form form .user-type label {\n        margin-right: 48px; }\n  .form form input {\n      width: 100%;\n      border-radius: 4px;\n      border-color: rgba(54, 69, 79, 0.36);\n      border-style: solid;\n      border-width: 1px;\n      font-size: .875em;\n      padding: 7px; }\n  .form form label, .form form p {\n      font-size: .875em;\n      font-weight: 600;\n      margin-bottom: 2px; }\n  .form form button {\n      display: block;\n      cursor: pointer;\n      margin: auto;\n      margin-top: 24px;\n      width: 20vw; }\n  .form-container {\n  background: url('signup.png') no-repeat;\n  background-size: 100% 260px;\n  position: relative; }\n  .overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 260px;\n  display: block;\n  z-index: 0;\n  background-color: rgba(3, 169, 244, 0.9); }\n"

/***/ }),

/***/ "./src/app/dproz-authentication/login/login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dproz-authentication/login/login.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _shared_services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/services.service */ "./src/app/shared/services/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(services, fb, router, service, state) {
        this.services = services;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.state = state;
        this.activeForm = 'loginForm';
        this.TREE_DATA = {};
    }
    // Dproz@123
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.forgotPasswordForm = this.fb.group({
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    LoginComponent.prototype.toggleForm = function () {
        this.activeForm = this.activeForm === 'loginForm' ? 'forgotPasswordForm' : 'loginForm';
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.service.login(this.loginForm.getRawValue()).subscribe(function (_a) {
            var Authorization = _a.Authorization, userReferenceId = _a.userReferenceId;
            window.localStorage.setItem('auth-token', Authorization);
            window.localStorage.setItem('user-reference', userReferenceId);
            _this.loginErrorResponse = null;
            _this.state.next({ loggedIn: true, authToken: Authorization, userReferenceId: userReferenceId });
            _this.service.getUser(_this.state.getState().userReferenceId).subscribe(function (data) {
                console.log("user get data");
                var loginData = JSON.stringify(data);
                localStorage.setItem("user_details", loginData);
                _this.state.setIdentity(data);
                _this.router.navigate(['../dproz/home']);
            });
            _this.services.getServices().subscribe(function (x) {
                console.log(x);
                var y = JSON.parse(JSON.stringify(x));
                for (var i = 0; i < y.length; i++) {
                    var k = y[i];
                    if (_this.TREE_DATA[k.category.categoryName] == undefined) {
                        _this.TREE_DATA[k.category.categoryName] = {};
                    }
                    _this.TREE_DATA[k.category.categoryName][k.serviceNumber] = k.serviceDescription;
                }
                localStorage.setItem("service_tree", JSON.stringify(_this.TREE_DATA));
                localStorage.setItem("all_services", JSON.stringify(x));
                console.log(_this.TREE_DATA);
            });
        }, function (error) {
            _this.loginErrorResponse = error;
        });
    };
    LoginComponent.prototype.onForgotPasswordSubmit = function () {
        var _this = this;
        this.service.forgotPassword(this.forgotPasswordForm.getRawValue()).subscribe(function () {
        }, function (error) {
            _this.fpErrorResponse = error;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/dproz-authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/dproz-authentication/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dproz-authentication/password-reset/password-reset.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dproz-authentication/password-reset/password-reset.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_us_style\">\r\n  <div class=\"container\">\r\n    <div class=\"row contact_row_style py-5\">\r\n      <div class=\"col-lg \">\r\n        <h3>Password Change</h3>\r\n        <div class=\"border_top border\"></div>\r\n       \r\n        <p>HomePage  &nbsp;&nbsp; /&nbsp;&nbsp; <span>Passwod Reset</span> </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!resetPassword\" class=\"password-container\">\r\n  <div class=\"form offset-md-5 offset-sm-3 col-md-14 col-sm-18 \">\r\n    <h5 class=\"overlay-text\">Request Password Change</h5>    \r\n    <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n      <div  *ngIf=\"activeForm==='changePasswordForm'\" class=\"form-element\">\r\n        <label for=\"oldPassword\">OLD PASSWORD</label>\r\n        <input type=\"password\" name=\"oldPassword\" id=\"oldPassword\" placeholder=\"Enter Old Password\" formControlName=\"oldPassword\">\r\n        <!-- <span *ngIf=\"hasError('password', 'required')\" class=\"error\">Please enter a password.</span>\r\n        <span *ngIf=\"hasError('password', 'minlength')\" class=\"error\">Password should be at least 8 characters.</span> -->\r\n      </div>\r\n      <div class=\"form-element\">\r\n        <label for=\"newPassword\">NEW PASSWORD</label>\r\n        <input type=\"password\" name=\"newPassword\" id=\"newPassword\" placeholder=\"Enter New Password\" formControlName=\"newPassword\">\r\n        <!-- <span *ngIf=\"hasError('password', 'required')\" class=\"error\">Please enter a password.</span>\r\n        <span *ngIf=\"hasError('password', 'minlength')\" class=\"error\">Password should be at least 8 characters.</span> -->\r\n      </div>\r\n      <div class=\"form-element\">\r\n        <label for=\"confirmPassword\">CONFIRM NEW PASSWORD</label>\r\n        <input type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" placeholder=\"Confirm New Password\" formControlName=\"confirmPassword\">\r\n        <!-- <span *ngIf=\"hasError('password', 'required')\" class=\"error\">Please enter a password.</span>\r\n        <span *ngIf=\"hasError('password', 'minlength')\" class=\"error\">Password should be at least 8 characters.</span> -->\r\n      </div>\r\n      <!-- <span *ngIf=\"forgotPasswordForm.errors\" class=\"error\">Please enter the verification code.</span> -->\r\n      <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" [disabled]=\"changePasswordForm.invalid\">Submit</button>            \r\n    </form>\r\n  </div>\r\n  <p *ngIf=\"error\" style=\"margin-top: 12px;\" class=\"error\">Please enter a valid email.</p>\r\n</div>\r\n<div *ngIf=\"resetPassword\" style=\"text-align: center; margin-top: 10vh;\">\r\n  <img style=\"height: 100px;\" src=\"../../../assets/images/check-mark-md.png\">\r\n  <p style=\"margin-top: 12px;\">An email has been sent for reseting the password to your registered email.</p>\r\n</div>"

/***/ }),

/***/ "./src/app/dproz-authentication/password-reset/password-reset.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dproz-authentication/password-reset/password-reset.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-bottom: 48px;\n  text-align: center; }\n  .form .form-element {\n    margin-bottom: 12px; }\n  .form .error {\n    color: #fa1c1cf5; }\n  .form .overlay-text {\n    color: #fff; }\n  .form .form-inputs {\n    color: #737373; }\n  .form .form-icon {\n    background: #fff;\n    box-shadow: 0px 0px 5px 0px;\n    font-size: 24px;\n    padding: 16px;\n    z-index: 100;\n    position: relative; }\n  .form .form-icon p {\n      margin-bottom: 0; }\n  .form .form-text {\n    padding-top: 50px;\n    padding-bottom: 30px; }\n  .form form {\n    background-color: #fff;\n    box-shadow: 0px 1px 5px 0px;\n    padding: 24px;\n    text-align: left;\n    z-index: 2;\n    position: relative; }\n  .form form .user-type {\n      margin-bottom: 12px; }\n  .form form .user-type #PRO, .form form .user-type #USER {\n        width: auto;\n        display: inline-block;\n        margin: 0;\n        padding: 0; }\n  .form form .user-type input {\n        vertical-align: middle; }\n  .form form .user-type label {\n        margin-right: 48px; }\n  .form form input {\n      width: 100%;\n      border-radius: 4px;\n      border-color: rgba(54, 69, 79, 0.36);\n      border-style: solid;\n      border-width: 1px;\n      font-size: .875em;\n      padding: 7px; }\n  .form form label, .form form p {\n      font-size: .875em;\n      font-weight: 600;\n      margin-bottom: 2px; }\n  .form form button {\n      display: block;\n      cursor: pointer;\n      margin: auto;\n      margin-top: 24px;\n      width: 20vw; }\n  .form-container {\n  background: url('signup.png') no-repeat;\n  background-size: 100% 260px;\n  position: relative; }\n  .overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 260px;\n  display: block;\n  z-index: 0;\n  background-color: rgba(3, 169, 244, 0.9); }\n  .password-container {\n  margin-top: 10vh;\n  text-align: center;\n  display: flex;\n  flex-direction: column; }\n  .password-container .input {\n    display: inline-flex;\n    justify-content: center; }\n  .password-container .error {\n    color: red; }\n  .contact_us_style {\n  background-image: url('top-about-img.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-top: 4px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4; }\n  .contact_row_style h3 {\n  font-size: 28px;\n  color: #fff;\n  font-family: Myriad Pro;\n  -webkit-font-family: Myriad Pro;\n  font-weight: 90;\n  font-weight: 600;\n  text-transform: uppercase; }\n  .border_top {\n  padding: 2px;\n  padding-bottom: 3px;\n  background-color: #fff;\n  width: 6%;\n  border: none !important;\n  margin-bottom: 10px; }\n  .contact_row_style p {\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-top: 6px; }\n"

/***/ }),

/***/ "./src/app/dproz-authentication/password-reset/password-reset.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dproz-authentication/password-reset/password-reset.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var passwordValidation = function (fg) {
    return null;
};
var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(service, router, route, fb, state) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.state = state;
        this.activeForm = 'changePasswordForm';
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoggedIn = this.state.getState().loggedIn;
        this.changePasswordForm = this.fb.group({
            oldPassword: ['Dproz@123', this.activeForm === 'forgotPasswordForm' ? [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] : []],
            newPassword: ['Dproz@1234', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['Dproz@1234', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userReferenceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: passwordValidation });
        // this.forgotPasswordForm = this.fb.group({
        //   emailAddress: ['', Validators.required]
        // })
        this.route.params.subscribe(function (data) {
            if (data.code && !_this.isLoggedIn) {
                var a = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkRFRiJ9.eNo0jMEOgjAQRP9lz4RsS2laTl698gcLXZQohbRWjMZ_d010LpNM3rwX5DJAB_d8prSQ1vZwWmi-1uO6QAVUwsxxZCFKvMR1jzKOienGATrVNlp5J2WdrWDOWbhdUoctrc-fo2ROPU9fzVFOgEjeGtOixWCc1wO6RhkV_DQgORPkwo_tb_fYNu8PAAAA__8.4n83875p9g0xa--8v80ztPwJZK0jEOQwDHa3UAB462v2FblfZoIuN0NcfOL1531hP6nCXiRtvH2pnpqlH60DCA';
                _this.service.verifyEmail(data.code).subscribe(function (_a) {
                    var Authorization = _a.Authorization, userReferenceId = _a.userReferenceId;
                    window.localStorage.setItem('auth-token', Authorization);
                    _this.changePasswordForm.get('userReferenceId').setValue(userReferenceId);
                    _this.activeForm = 'forgotPasswordForm';
                }, function (error) {
                    _this.activeForm = 'inActive';
                    _this.errorMessage = 'Unable to retrieve account Info.';
                });
            }
            else if (!data.code && !_this.isLoggedIn) {
                _this.router.navigate(['../dproz/login']);
            }
            else {
                _this.activeForm = 'changePasswordForm';
                _this.changePasswordForm.get('userReferenceId').setValue(_this.state.getState().userReferenceId);
            }
        });
    };
    PasswordResetComponent.prototype.formValidator = function (c) {
        return this.activeForm === 'changePasswordForm' ? _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required : null;
    };
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
    PasswordResetComponent.prototype.email = function (e) {
        this.error = false;
        this.emailId = e.target.value;
    };
    PasswordResetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.changePasswordForm.valid) {
            var formData = this.changePasswordForm.getRawValue();
            // if (this.activeForm==='forgotPasswordForm') {
            //   delete formData.oldPassword;
            // }
            this.service.changePassword(formData).subscribe(function () {
                window.localStorage.removeItem('auth-token');
                window.localStorage.removeItem('user-reference');
                _this.router.navigate(['../dproz/login']);
            }, function (error) {
                console.log(error.status);
                if (error.status === 400) {
                }
                console.log(error, "Error while resetting password");
            });
        }
    };
    PasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-password-reset',
            template: __webpack_require__(/*! ./password-reset.component.html */ "./src/app/dproz-authentication/password-reset/password-reset.component.html"),
            styles: [__webpack_require__(/*! ./password-reset.component.scss */ "./src/app/dproz-authentication/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/dproz-authentication/signup/signup.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dproz-authentication/signup/signup.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container overlay\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-md-5 offset-sm-3 col-md-14 col-sm-18 form\">\r\n      <div class=\"form-text\">\r\n        <h2 class=\"overlay-text\">Create An Account</h2>\r\n        <p class=\"overlay-text\">Please fill in your information and choose to be Provider or Consumer.</p>\r\n      </div>\r\n      <div class=\"form-inputs\">\r\n        <div class=\"form-icon\"> \r\n          <p>SIGNUP</p>\r\n        </div>\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n          <div class=\"form-element\">\r\n            <label for=\"first-name\">FIRST NAME</label>\r\n            <input type=\"text\" name=\"\" id=\"first-name\"  placeholder=\"Enter First Name\" formControlName=\"firstName\">\r\n            <span *ngIf=\"hasError('firstName', 'required')\" class=\"error\">Please enter first name.</span>\r\n            <span *ngIf=\"hasError('firstName', 'minlength')\" class=\"error\">First Name should be at least 2 characters.</span>\r\n          </div>\r\n          <div class=\"form-element\">\r\n            <label for=\"last-name\">LAST NAME</label>\r\n            <input type=\"text\" name=\"\" id=\"last-name\" placeholder=\"Enter Last Name\" formControlName=\"lastName\">\r\n            <span *ngIf=\"hasError('lastName', 'required')\" class=\"error\">Please enter last name.</span>\r\n            <span *ngIf=\"hasError('lastName', 'minlength')\" class=\"error\">Last Name should be at least 2 characters.</span>\r\n          </div>\r\n          <div class=\"form-element\">\r\n            <label for=\"email\">EMAIL</label>\r\n            <input type=\"text\" name=\"\" id=\"email\" placeholder=\"Enter Email\" formControlName=\"emailAddress\">\r\n            <span *ngIf=\"hasError('emailAddress', 'required')\" class=\"error\">Please enter your email.</span>\r\n            <span *ngIf=\"hasError('emailAddress', 'invalidEmail')\" class=\"error\">Please enter a valid email.</span>\r\n            <span *ngIf=\"hasError('emailAddress', 'email')\" class=\"error\">Please enter a valid email.</span>\r\n          </div>\r\n          <div class=\"form-element\">\r\n            <label for=\"password\">PASSWORD</label>\r\n            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Enter Password\" formControlName=\"password\">\r\n            <span *ngIf=\"hasError('password', 'required')\" class=\"error\">Please enter a password.</span>\r\n            <span *ngIf=\"hasError('password', 'pattern')\" class=\"error\">Password should be at least 8 characters, one Upper case, number and one non-alphanumeric.</span>\r\n          </div>\r\n          <div class=\"form-element\">\r\n            <label for=\"name\">RE-TYPE PASSWORD</label>\r\n            <input type=\"password\" name=\"\" id=\"retype-password\" placeholder=\"Re-Enter Password\" formControlName=\"repeatPassword\">\r\n            <span *ngIf=\"hasError('repeatPassword', 'required')\" class=\"error\">Please re-enter your password.</span>\r\n             <span *ngIf=\"signupForm.get('repeatPassword').getError('passMismatch')\" class=\"error\">The passwords do not match. Please retry.</span>\r\n            <span *ngIf=\"signupForm.get('repeatPassword').getError('confirmedPassword')\" class=\"error\">The your passwords do not match. Please retry.</span>\r\n     \r\n          </div>\r\n          <div class=\"user-type form-element\">\r\n            <p>USER TYPE</p>\r\n            <input type=\"checkbox\" name=\"Service Provider\" id=\"PRO\" (click)=\"userType($event)\" [checked]=\"user==='PRO'\">\r\n            <label for=\"PRO\">Service Provider</label>\r\n            <input type=\"checkbox\" name=\"Service Consumer\" id=\"USER\" (click)=\"userType($event)\" [checked]=\"user==='USER'\">\r\n            <label for=\"USER\">Service Consumer</label>\r\n          </div>\r\n          <span *ngIf=\"hasError('userType')\" class=\"error\">Please choose service type.</span>\r\n          <div *ngIf=\"signupForm.get('userType').value==='PRO'\" class=\"form-element\">\r\n            <select id=\"state\" (change)=\"addressChange($event)\">\r\n              <option [value]=null style=\"display: none\">Select State</option>\r\n              <option *ngFor=\"let state of states\" [value]=\"state._region\" [selected]=\"signupForm.getRawValue().address.region===state._region\">{{state._region}}</option>\r\n            </select>\r\n            <select id=\"city\" (change)=\"addressChange($event)\">\r\n              <option [value]=null style=\"display: none\">Select City</option>\r\n              <option *ngFor=\"let city of cities\" [value]=\"city._city\" [selected]=\"signupForm.getRawValue().address.city===city._city\">{{city._city}}</option>\r\n            </select>\r\n            <select id=\"county\" (change)=\"addressChange($event)\">\r\n              <option [value]=null style=\"display: none\">Select County</option>\r\n              <option *ngFor=\"let county of counties\" [value]=\"county._county\" [selected]=\"signupForm.getRawValue().address.county===county._county\">{{county._county}}</option>\r\n            </select>\r\n            <select id=\"street\" (change)=\"addressChange($event)\">\r\n              <option [value]=null style=\"display: none\">Select Street</option>\r\n              <option *ngFor=\"let street of streets\" [value]=\"street._street\" [selected]=\"signupForm.getRawValue().address.street===street._street\">{{street._street}}</option>\r\n            </select>\r\n            <!-- <span *ngIf=\"signupForm.get('repeatPassword').getError('passMismatch')\" class=\"error\">The passwords do not match. Please retry.</span> -->\r\n          </div>\r\n          <re-captcha [formControlName]=\"'recaptcha'\" (resolved)=\"resolved($event)\" siteKey=\"6Lejo2kUAAAAAKpLBaJ4NtKM6tuv8wgIB9Wr0big\"></re-captcha>\r\n          <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" [disabled]=\"signupForm.invalid\">SUBMIT</button>\r\n        </form>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dproz-authentication/signup/signup.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dproz-authentication/signup/signup.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-bottom: 48px;\n  text-align: center; }\n  .form .form-element {\n    margin-bottom: 12px; }\n  .form .error {\n    color: #fa1c1cf5; }\n  .form .overlay-text {\n    color: #fff; }\n  .form .form-inputs {\n    color: #737373; }\n  .form .form-icon {\n    background: #fff;\n    box-shadow: 0px 0px 5px 0px;\n    font-size: 24px;\n    padding: 16px;\n    z-index: 100;\n    position: relative; }\n  .form .form-icon p {\n      margin-bottom: 0; }\n  .form .form-text {\n    padding-top: 50px;\n    padding-bottom: 30px; }\n  .form form {\n    background-color: #fff;\n    box-shadow: 0px 1px 5px 0px;\n    padding: 24px;\n    text-align: left;\n    z-index: 2;\n    position: relative; }\n  .form form .user-type {\n      margin-bottom: 12px; }\n  .form form .user-type #PRO, .form form .user-type #USER {\n        width: auto;\n        display: inline-block;\n        margin: 0;\n        padding: 0; }\n  .form form .user-type input {\n        vertical-align: middle; }\n  .form form .user-type label {\n        margin-right: 48px; }\n  .form form input {\n      width: 100%;\n      border-radius: 4px;\n      border-color: rgba(54, 69, 79, 0.36);\n      border-style: solid;\n      border-width: 1px;\n      font-size: .875em;\n      padding: 7px; }\n  .form form label, .form form p {\n      font-size: .875em;\n      font-weight: 600;\n      margin-bottom: 2px; }\n  .form form button {\n      display: block;\n      cursor: pointer;\n      margin: auto;\n      margin-top: 24px;\n      width: 20vw; }\n  .form-container {\n  background: url('signup.png') no-repeat;\n  background-size: 100% 260px;\n  position: relative; }\n  .overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 260px;\n  display: block;\n  z-index: 0;\n  background-color: rgba(3, 169, 244, 0.9); }\n  .form-element select {\n  margin-right: 2vw;\n  min-width: 123px; }\n"

/***/ }),

/***/ "./src/app/dproz-authentication/signup/signup.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dproz-authentication/signup/signup.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isemail */ "./node_modules/isemail/lib/index.js");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isemail__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_services_places_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/places.service */ "./src/app/shared/services/places.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/validators/professional-profile */ "./src/app/shared/validators/professional-profile.ts");
/* harmony import */ var _shared_constants_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/constants/constants */ "./src/app/shared/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, router, service, state, placesService) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.state = state;
        this.placesService = placesService;
        this.user = '';
        this.states = [];
        this.cities = [];
        this.counties = [];
        this.streets = [];
        this.selectedState = '';
        this.selectedCity = '';
        this.selectedCounty = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.signupForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            middleName: '',
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_shared_constants_constants__WEBPACK_IMPORTED_MODULE_10__["PASS_PATTERN"])]],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // profilePictureUrl: null,
            lastChangedPasswordOn: null,
            verificationDate: null,
            verified: true,
            recaptcha: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
        var password = this.signupForm.get('password');
        var repeatPassword = this.signupForm.get('repeatPassword');
        password.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(1000); }))
            .subscribe(function (pass) {
            console.log(pass);
            repeatPassword.setValidators(Object(_shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_9__["passwordMatchValidator"])(pass));
        });
        this.placesService.getRegions().subscribe(function (regions) {
            _this.states = regions;
            console.log(_this.states);
        });
        this.userChange();
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.signupForm.get('password').value !== this.signupForm.get('repeatPassword').value) {
            this.signupForm.get('repeatPassword').setErrors({ passMismatch: "password" });
        }
        if (!isemail__WEBPACK_IMPORTED_MODULE_6__["validate"](this.signupForm.get('emailAddress').value))
            this.signupForm.get('emailAddress').setErrors({ invalidEmail: 'error' });
        if (this.signupForm.valid) {
            var form_1 = this.signupForm.getRawValue();
            // if (form.userType === 'USER') {
            //   delete form.address;
            // }
            this.service.signup(form_1).subscribe(function (_a) {
                var userReferenceId = _a.userReferenceId;
                window.sessionStorage.setItem('encoded', window.btoa(_this.signupForm.get('emailAddress').value));
                _this.state.setReferenceId(userReferenceId);
                _this.state.setIdentity({ emailAddress: form_1.emailAddress });
                _this.router.navigate(['../dproz/authenticate']);
            }, function (error) {
                window.sessionStorage.setItem('encoded', window.btoa(_this.signupForm.get('emailAddress').value));
                // this.router.navigate(['../dproz/authenticate']);
                console.log(error, "Error!!!!");
            });
        }
    };
    SignupComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    SignupComponent.prototype.userChange = function () {
        var _this = this;
        this.signupForm.get('userType').valueChanges.subscribe(function (v) {
            Object.keys(_this.signupForm.get('address').controls).forEach(function (element) {
                _this.signupForm.get('address').get(element).updateValueAndValidity();
            });
        });
    };
    SignupComponent.prototype.addressChange = function (e) {
        var _this = this;
        if (e.target.id === 'state') {
            this.selectedState = e.target.value;
            this.signupForm.get('address').get('region').setValue(null);
            this.signupForm.get('address').get('county').setValue(null);
            this.signupForm.get('address').get('street').setValue(null);
            this.placesService.getCities(this.selectedState).subscribe(function (cities) {
                _this.cities = cities;
            });
        }
        else if (e.target.id === 'city') {
            this.signupForm.get('address').get('county').setValue(null);
            this.signupForm.get('address').get('street').setValue(null);
            this.selectedCity = e.target.value;
            this.placesService.getCounties(this.selectedState, this.selectedCity).subscribe(function (counties) {
                _this.counties = counties;
            });
        }
        else if (e.target.id === 'county') {
            this.signupForm.get('address').get('street').setValue(null);
            this.selectedCounty = e.target.value;
            this.placesService.getStreets(this.selectedState, this.selectedCity, this.selectedCounty).subscribe(function (streets) {
                _this.streets = streets;
            });
        }
        else if (e.target.id === 'street') {
            var addressSelected = this.streets.find(function (el) { return el._street === e.target.value && el._county === _this.selectedCounty; });
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
    };
    SignupComponent.prototype.userType = function (e) {
        this.user = e.target.id;
        var checked = e.target.checked;
        if (checked)
            this.signupForm.get('userType').setValue(this.user);
        else
            this.signupForm.get('userType').setValue('');
    };
    SignupComponent.prototype.userTypeError = function () {
        this.signupForm.get('userType').errors;
    };
    SignupComponent.prototype.hasError = function (input, type) {
        return (type ? this.signupForm.get(input).getError(type) : this.signupForm.get(input).errors)
            && this.signupForm.get(input).touched;
    };
    SignupComponent.prototype.requiredValidator = function (c) {
        return (this.user === 'PRO' && !c.value) ? { required: true } : null;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dproz-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/dproz-authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/dproz-authentication/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _shared_services_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"],
            _shared_services_places_service__WEBPACK_IMPORTED_MODULE_7__["PlacesService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/dproz-authentication/verification/verification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dproz-authentication/verification/verification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container overlay\">\r\n    <div class=\"row\">\r\n      <div class=\"offset-md-5 offset-sm-3 col-md-14 col-sm-18 form\">\r\n        <div class=\"form-text\">\r\n          <h2 class=\"overlay-text\">{{ pageIntent }}</h2>\r\n          <p class=\"overlay-text\" *ngIf=\"activeForm==='verificationForm'\">Please fill in your verification code sent over the email<strong style=\"color: black\" *ngIf=\"email\">: {{ email }} </strong>you registered.</p>\r\n        </div>\r\n        <div class=\"form-inputs\">\r\n          <div class=\"form-icon\"> \r\n            <p>{{ activeForm==='verificationForm' ? 'VERIFICATION' : 'ENTER EMAIL' }}</p>\r\n          </div>\r\n          <div *ngIf=\"activeForm==='verificationForm'\">\r\n            <form [formGroup]=\"verificationForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n              <label for=\"code\">CODE</label>\r\n              <input type=\"text\" name=\"\" id=\"code\" placeholder=\"Enter Code\" formControlName=\"code\">\r\n              <span *ngIf=\"this.verificationForm.errors\" class=\"error\">Please enter the verification code.</span>\r\n              <button class=\"btn btn-primary\" type=\"submit\" value=\"Verify\" [disabled]=\"!verificationForm.valid\">VERIFY</button>            \r\n            </form>\r\n          </div>\r\n          <div *ngIf=\"activeForm==='resendTokenForm'\">\r\n            <form [formGroup]=\"resendTokenForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n              <label for=\"emailId\">EMAIL</label>\r\n              <input type=\"text\" name=\"emailId\" id=\"code\" placeholder=\"Enter Email\" formControlName=\"emailId\">\r\n              <span *ngIf=\"this.resendTokenForm.errors\" class=\"error\">Please enter the Email address.</span>\r\n              <button class=\"btn btn-primary\" type=\"submit\" value=\"Submit\" [disabled]=\"!resendTokenForm.valid\">Submit</button>            \r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dproz-authentication/verification/verification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dproz-authentication/verification/verification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-bottom: 48px;\n  text-align: center; }\n  .form .form-element {\n    margin-bottom: 12px; }\n  .form .error {\n    color: #fa1c1cf5; }\n  .form .overlay-text {\n    color: #fff; }\n  .form .form-inputs {\n    color: #737373; }\n  .form .form-icon {\n    background: #fff;\n    box-shadow: 0px 0px 5px 0px;\n    font-size: 24px;\n    padding: 16px;\n    z-index: 100;\n    position: relative; }\n  .form .form-icon p {\n      margin-bottom: 0; }\n  .form .form-text {\n    padding-top: 50px;\n    padding-bottom: 30px; }\n  .form form {\n    background-color: #fff;\n    box-shadow: 0px 1px 5px 0px;\n    padding: 24px;\n    text-align: left;\n    z-index: 2;\n    position: relative; }\n  .form form .user-type {\n      margin-bottom: 12px; }\n  .form form .user-type #PRO, .form form .user-type #USER {\n        width: auto;\n        display: inline-block;\n        margin: 0;\n        padding: 0; }\n  .form form .user-type input {\n        vertical-align: middle; }\n  .form form .user-type label {\n        margin-right: 48px; }\n  .form form input {\n      width: 100%;\n      border-radius: 4px;\n      border-color: rgba(54, 69, 79, 0.36);\n      border-style: solid;\n      border-width: 1px;\n      font-size: .875em;\n      padding: 7px; }\n  .form form label, .form form p {\n      font-size: .875em;\n      font-weight: 600;\n      margin-bottom: 2px; }\n  .form form button {\n      display: block;\n      cursor: pointer;\n      margin: auto;\n      margin-top: 24px;\n      width: 20vw; }\n  .form-container {\n  background: url('signup.png') no-repeat;\n  background-size: 100% 260px;\n  position: relative; }\n  .overlay:before {\n  position: absolute;\n  content: \" \";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 260px;\n  display: block;\n  z-index: 0;\n  background-color: rgba(3, 169, 244, 0.9); }\n"

/***/ }),

/***/ "./src/app/dproz-authentication/verification/verification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dproz-authentication/verification/verification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerificationComponent = /** @class */ (function () {
    function VerificationComponent(router, route, fb, service, state) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.state = state;
    }
    VerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.params, 'params');
        this.route.params.subscribe(function (data) {
            if (data.code) {
                _this.service.verification(_this.verificationForm.get('code').value).subscribe(function () {
                    _this.router.navigate(['../dproz/login']);
                }, function (error) {
                    _this.errorMessage = "There was an error while verifing you account. Please try again.";
                    console.log(error, 'Error while verification');
                });
            }
            else if (_this.state.getState().userReferenceId && _this.state.getState().identity.emailAddress) {
                _this.pageIntent = "Verify Account";
                _this.activeForm = 'verificationForm';
                _this.token = _this.state.getState().userReferenceId;
                _this.email = _this.state.getState().identity.emailAddress;
            }
            else {
                _this.pageIntent = "Resend Token";
                _this.activeForm = 'resendTokenForm';
                _this.message = "Please resend token and follow the link";
            }
        });
        this.verificationForm = this.fb.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.resendTokenForm = this.fb.group({
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    VerificationComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.activeForm === 'verificationForm') {
            if (this.verificationForm.valid) {
                this.service.verification(this.verificationForm.get('code').value + ":" + this.token).subscribe(function () {
                    _this.router.navigate(['../dproz/home']);
                }, function (error) {
                    console.log(error, "Error while ");
                });
            }
        }
        else if (this.activeForm === 'resendTokenForm') {
            if (this.resendTokenForm.valid) {
                this.service.resendToken(this.resendTokenForm.get('emailId').value).subscribe(function () {
                    _this.router.navigate(['../dproz/home']);
                }, function (error) {
                    console.log(error, "");
                });
            }
        }
    };
    VerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/dproz-authentication/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.scss */ "./src/app/dproz-authentication/verification/verification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/dproz-contact-us/dproz-contact-us.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dproz-contact-us/dproz-contact-us.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact_us_style\">\r\n  <div class=\"container\">\r\n    <div class=\"row contact_row_style py-5\">\r\n      <div class=\"col-lg \">\r\n        <h3>Contact Us</h3>\r\n        <div class=\"border_top border\"></div>\r\n       \r\n        <p>HomePage  &nbsp;&nbsp; /&nbsp;&nbsp; <span>Contact</span> </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container py-5\">\r\n    <div class=\"row contect_colum1_style\">\r\n      <div class=\"col-lg-8\">\r\n        <div class=\"\">\r\n          <h4>Contact info</h4>\r\n          <p class=\"sub_p_style\">Lorem Ipsum is simply dummy text</p>\r\n          <div class=\"border_style\"></div>\r\n          <p>\r\n           <img src=\"../../assets/images/fa-map-marker-img.png\"><span> Address: &nbsp;</span> Lorem Ipsum is simply dummy text of \r\n           the  printing and typesetting \r\n          </p>\r\n          <p><img src=\"../../assets/images/fa-volume-control-phone-img.png\"><span> Tell:  &nbsp;</span>123-456-7890</p>\r\n          <p><img src=\"../../assets/images//fa-envelope-o-img.png\"><span> Mail:  &nbsp;</span> 123-456-7890</p> \r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-16\">\r\n         <form>\r\n          <div class=\"row\">\r\n              <div class=\"col-lg-12 form-group\">\r\n              \r\n              <input class=\"form-control input-sm input_style\" id=\"inputsm\" type=\"text\" placeholder=\"Name\">\r\n            </div>\r\n            <div class=\"col-lg-12 form-group\">\r\n              <input class=\"form-control input_style\" id=\"inputdefault\" type=\"text\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n            <div class=\"row\">\r\n            <div class=\"col-lg form-group\">\r\n              <textarea class=\"form-control \" rows=\"5\" id=\"comment\" placeholder=\"Message\"></textarea>\r\n            <div>\r\n              <button type=\"button\" class=\"button_style btn btn-link\">Send Message</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n         </form> \r\n     </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/dproz-contact-us/dproz-contact-us.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dproz-contact-us/dproz-contact-us.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_us_style {\n  background-image: url('top-contect-us.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-top: 4px solid #03a9f4;\n  border-bottom: 4px solid #03a9f4; }\n\n.contact_row_style h3 {\n  font-size: 28px;\n  color: #fff;\n  font-family: Myriad Pro;\n  -webkit-font-family: Myriad Pro;\n  font-weight: 90;\n  font-weight: 600;\n  text-transform: uppercase; }\n\n.border_top {\n  padding: 2px;\n  padding-bottom: 3px;\n  background-color: #fff;\n  width: 6%;\n  border: none !important;\n  margin-bottom: 10px; }\n\n.contact_row_style p {\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-top: 6px; }\n\n.contect_colum1_style .button_style {\n  background: #03a9f4;\n  color: #fff;\n  margin-top: 26px;\n  padding-left: 50px;\n  padding-right: 50px;\n  text-transform: uppercase;\n  border-radius: 1px;\n  text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/dproz-contact-us/dproz-contact-us.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dproz-contact-us/dproz-contact-us.component.ts ***!
  \****************************************************************/
/*! exports provided: DprozContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozContactUsComponent", function() { return DprozContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DprozContactUsComponent = /** @class */ (function () {
    function DprozContactUsComponent() {
    }
    DprozContactUsComponent.prototype.ngOnInit = function () {
    };
    DprozContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-dproz-contact-us',
            template: __webpack_require__(/*! ./dproz-contact-us.component.html */ "./src/app/dproz-contact-us/dproz-contact-us.component.html"),
            styles: [__webpack_require__(/*! ./dproz-contact-us.component.scss */ "./src/app/dproz-contact-us/dproz-contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DprozContactUsComponent);
    return DprozContactUsComponent;
}());



/***/ }),

/***/ "./src/app/dproz-home/dproz-home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dproz-home/dproz-home.module.ts ***!
  \*************************************************/
/*! exports provided: DprozHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozHomeModule", function() { return DprozHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dproz-home/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DprozHomeModule = /** @class */ (function () {
    function DprozHomeModule() {
    }
    DprozHomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]]
        })
    ], DprozHomeModule);
    return DprozHomeModule;
}());



/***/ }),

/***/ "./src/app/dproz-home/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/dproz-home/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"hero\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dproz-home/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/dproz-home/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  height: 400px;\n  background: url('Hero.png') no-repeat;\n  background-size: 100%; }\n"

/***/ }),

/***/ "./src/app/dproz-home/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/dproz-home/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(service) {
        this.service = service;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var a = {
            "userReferenceId": "test",
            "userType": "comsumer",
            "firstName": "Va",
            "lastName": "Sh",
            "middleName": "middle",
            "phone": {
                "phoneNumber": "2223334567",
                "isPrimary": true,
                "contactMethod": "Mobile"
            },
            "address": {
                "longtude": 0,
                "latitude": 0,
                "street": "string",
                "district": "string",
                "region": "string",
                "country": "string"
            },
            "emailAddress": "string",
            "password": "string",
            "profilePictureUrl": "string"
        };
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dproz-home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/dproz-home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dproz-prof-profile/dproz-prof-profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/dproz-prof-profile/dproz-prof-profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n        <div   class=\"info_input_border\">\r\n\r\n          <div class=\"row user_row_style\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"p-2\">\r\n                <h4>General Information</h4>\r\n              </div>\r\n              <div class=\"general_bt_br\"></div>\r\n            </div>\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"pt-2 pb-md-4 btn_styletop\">\r\n                <ul class=\"info_form\">\r\n                  <li *ngIf=\"editForm\" (click)=\"toggleEdit()\">\r\n                    <a>\r\n                      <i class=\"fa fa-save\"></i>Cancel</a>\r\n                  </li>\r\n                  <li *ngIf=\"editForm\" (click)=\"saveForm()\">\r\n                    <a>\r\n                      <i class=\"fa fa-save\"></i> Save Change</a>\r\n                  </li>\r\n                  <li *ngIf=\"!editForm\" (click)=\"toggleEdit()\">\r\n                    <a>\r\n                      <i class=\"fa fa-pencil\"></i> Edit Profile</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"profile_home_bt_br\"></div>\r\n          <div class=\"pt-4 form_style\">\r\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-xs-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>{{ editForm ? 'First' : 'User' }} Name </label>\r\n                <div class=\"col-sm-16 col-xs-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" [ngClass]=\"user.identity.firstName ? 'focus-t' : ''\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"firstName\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">\r\n                        {{ user.identity.firstName }} {{ user.identity.lastName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"editForm\" class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-xs-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>Last Name </label>\r\n                <div class=\"col-sm-16 col-xs-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <span style=\"padding: 5px 20px; \"></span>\r\n                      <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"lastName\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>User Type </label>\r\n                <div class=\"col-sm-8 \">\r\n                  <div *ngIf=\"editForm\">\r\n                    <input type=\"checkbox\" value=\"\" class=\"checkbox-inline\" (click)=\"userType($event)\" [checked]=\"user.identity.userType==='PRO'\">Service provider\r\n                    <input type=\"checkbox\" value=\"\" class=\"checkbox-inline\" (click)=\"userType($event)\" [checked]=\"user.identity.userType==='USER'\">Service Coustmer\r\n                  </div>\r\n                  <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.userType }}</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-envelope\"></i>Email Address </label>\r\n                <div class=\"col-sm-16 \">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"emailAddress\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.emailAddress }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-map-marker\"></i>Address </label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:100%; display: block;\">\r\n                      <ng-container *ngIf=\"editForm\">\r\n                        <select id=\"state\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select State</option>\r\n                          <option *ngFor=\"let state of states\" [value]=\"state._region\" [selected]=\"profileForm.getRawValue().address.region===state._region\">{{state._region}}</option>\r\n                        </select>\r\n                        <select id=\"city\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select City</option>\r\n                          <option *ngFor=\"let city of cities\" [value]=\"city._city\" [selected]=\"profileForm.getRawValue().address.city===city._city\">{{city._city}}</option>\r\n                        </select>\r\n                        <select id=\"county\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select County</option>\r\n                          <option *ngFor=\"let county of counties\" [value]=\"county._county\" [selected]=\"profileForm.getRawValue().address.county===county._county\">{{county._county}}</option>\r\n                        </select>\r\n                        <select id=\"street\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select Street</option>\r\n                          <option *ngFor=\"let street of streets\" [value]=\"street._street\" [selected]=\"profileForm.getRawValue().address.street===street._street\">{{street._street}}</option>\r\n                        </select>\r\n                      </ng-container>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.address.street }} {{ user.identity.address.city }} {{ user.identity.address.county }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-phone\"></i>Phone </label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" formGroupName=\"phone\">\r\n                      <ng-container *ngIf=\"editForm\">\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"phoneNumber\">\r\n                      </ng-container>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.phone?.phoneNumber }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-phone\"></i>Profile Picture</label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity?.profilePictureUrl?.url }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row info_input\">\r\n                <a style=\"padding: 5px 35px;\" routerLink=\"../password\" routerLinkActive=\"active-link\">Change Password</a>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n"

/***/ }),

/***/ "./src/app/dproz-prof-profile/dproz-prof-profile.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/dproz-prof-profile/dproz-prof-profile.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_us_style {\n  background: #03a9f4; }\n\n.contact_row_style p {\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-top: 6px; }\n\n.profile_home_col_5 {\n  /* border: 1px solid #c7c7c7; */\n  text-align: center;\n  padding: 10px;\n  box-shadow: 0px 1px 6px 0px #e0e0e0;\n  border-radius: 3px;\n  padding-bottom: 43px; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.profile_home_p {\n  color: #03a9f4; }\n\n.info_input_border {\n  /* border: 1px solid #c7c7c7; */\n  box-shadow: 0px 1px 6px 0px #e0e0e0;\n  border-radius: 2px;\n  width: 90%;\n  margin: 20px auto; }\n\n.form_style {\n  overflow: hidden;\n  padding-bottom: 20px;\n  font-size: 14px; }\n\n.form-group {\n  margin-bottom: 0; }\n\n.info_input {\n  padding: 12px 10px; }\n\n.col-form-label {\n  padding-top: calc(.375rem + 1px);\n  padding-bottom: calc(.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.info_input i {\n  padding: 0 10px; }\n\n.text-effect {\n  position: relative;\n  height: 70px; }\n\n.text-effect span {\n  bottom: 3px;\n  position: absolute;\n  z-index: 1; }\n\n.text-effect input {\n  border: none;\n  border-bottom: 1px solid #073951 !important;\n  border-radius: 0;\n  position: absolute;\n  bottom: 0;\n  border-style: none none solid;\n  border-width: 0 0 2px;\n  box-shadow: none;\n  z-index: 2;\n  background-color: transparent; }\n\n.info_input input {\n  border: none;\n  margin: 5px 21px;\n  border-bottom: 1px solid grey;\n  transition: 0.6s; }\n\n.form_style input {\n  font-size: 14px; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.info_input :hover, input:focus {\n  color: #000000;\n  border-color: #03a9f4; }\n\n.text-effect {\n  position: relative;\n  height: 70px;\n  height: 35px;\n  display: flex;\n  align-items: center; }\n\n.focus-t span {\n  bottom: 36px !important;\n  color: #0971a2;\n  font-size: 15px;\n  transition: all 0.3s ease 0s;\n  z-index: 1; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\n.general_bt_br {\n  border-bottom: 3px solid #04a9f3;\n  width: 75%;\n  margin: 3px 0; }\n\n.info_form li {\n  list-style: none;\n  float: right;\n  border: 1px solid grey;\n  border-radius: 60px;\n  padding: 6px 8px;\n  margin: 4px 4px;\n  font-size: 13px;\n  color: #007bff;\n  cursor: pointer; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.address-select {\n  display: block;\n  padding: 6px;\n  width: 100%;\n  margin-bottom: 12px; }\n"

/***/ }),

/***/ "./src/app/dproz-prof-profile/dproz-prof-profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dproz-prof-profile/dproz-prof-profile.component.ts ***!
  \********************************************************************/
/*! exports provided: DprozProfProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozProfProfileComponent", function() { return DprozProfProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/places.service */ "./src/app/shared/services/places.service.ts");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isemail */ "./node_modules/isemail/lib/index.js");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isemail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/document.service */ "./src/app/shared/services/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DprozProfProfileComponent = /** @class */ (function () {
    function DprozProfProfileComponent(fb, state, service, placesService, userService, docService) {
        this.fb = fb;
        this.state = state;
        this.service = service;
        this.placesService = placesService;
        this.userService = userService;
        this.docService = docService;
        this.editForm = false;
    }
    DprozProfProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            middleName: '',
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
        this.placesService.getRegions().subscribe(function (regions) {
            _this.states = regions;
            // console.log(this.states);
        });
        this.state.user.subscribe(function (u) {
            _this.user = u;
            // console.log(u);
            if (_this.user.identity)
                _this.profileForm.patchValue(_this.user.identity);
            if (_this.user.identity && _this.user.identity.address) {
            }
            // console.log(this.profileForm.getRawValue());
        });
    };
    DprozProfProfileComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.docService.postDocument(file, this.user.identity.userReferenceId, 'PHOTO_ID', 'thumbnail', 'true').subscribe(function (d) {
                console.log(d);
            });
        }
    };
    DprozProfProfileComponent.prototype.focus = function (e) {
        e.target.parentElement.classList.add('focus-t');
        console.log(e);
    };
    DprozProfProfileComponent.prototype.blur = function (e) {
        e.target.parentElement.classList.remove('focus-t');
        console.log(e);
    };
    DprozProfProfileComponent.prototype.toggleEdit = function () {
        var _this = this;
        this.editForm = !this.editForm;
        console.log(this.state.getState().identity);
        if (this.editForm) {
            this.profileForm.get('address').patchValue(this.state.getState().identity.address);
            console.log(this.profileForm.getRawValue());
            var _a = this.profileForm.getRawValue().address, region_1 = _a.region, county_1 = _a.county, city_1 = _a.city;
            this.selectedCity = city_1;
            this.selectedCounty = county_1;
            this.selectedState = region_1;
            if (this.profileForm.get('address').value.city) {
                this.placesService.getCities(region_1).subscribe(function (cities) {
                    _this.cities = cities;
                    console.log(_this.state.getState().identity.address.region);
                    if (_this.profileForm.get('address').value.county) {
                        _this.placesService.getCounties(region_1, city_1).subscribe(function (counties) {
                            _this.counties = counties;
                            if (_this.profileForm.get('address').value.street) {
                                _this.placesService.getStreets(region_1, city_1, county_1).subscribe(function (streets) {
                                    _this.streets = streets;
                                });
                            }
                        });
                    }
                });
            }
        }
    };
    DprozProfProfileComponent.prototype.saveForm = function () {
        this.onSubmit();
    };
    DprozProfProfileComponent.prototype.requiredValidator = function (c) {
        return (this.user === 'PRO' && !c.value) ? { required: true } : null;
    };
    DprozProfProfileComponent.prototype.addressChange = function (e) {
        var _this = this;
        if (e.target.id === 'state') {
            this.selectedState = e.target.value;
            this.profileForm.get('address').get('region').setValue(null);
            this.profileForm.get('address').get('county').setValue(null);
            this.profileForm.get('address').get('street').setValue(null);
            this.placesService.getCities(this.selectedState).subscribe(function (cities) {
                _this.cities = cities;
            });
        }
        else if (e.target.id === 'city') {
            this.profileForm.get('address').get('county').setValue(null);
            this.profileForm.get('address').get('street').setValue(null);
            this.selectedCity = e.target.value;
            this.placesService.getCounties(this.selectedState, this.selectedCity).subscribe(function (counties) {
                _this.counties = counties;
            });
        }
        else if (e.target.id === 'county') {
            this.profileForm.get('address').get('street').setValue(null);
            this.selectedCounty = e.target.value;
            this.placesService.getStreets(this.selectedState, this.selectedCity, this.selectedCounty).subscribe(function (streets) {
                _this.streets = streets;
            });
        }
        else if (e.target.id === 'street') {
            var addressSelected = this.streets.find(function (el) { return el._street === e.target.value && el._county === _this.selectedCounty; });
            this.profileForm.patchValue({
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
            console.log(this.profileForm.get('address'));
        }
    };
    DprozProfProfileComponent.prototype.userType = function (e) {
        this.user = e.target.id;
        var checked = e.target.checked;
        if (checked)
            this.profileForm.get('userType').setValue(this.user);
        else
            this.profileForm.get('userType').setValue('');
    };
    DprozProfProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.profileForm.disable();
        if (!isemail__WEBPACK_IMPORTED_MODULE_5__["validate"](this.profileForm.get('emailAddress').value))
            this.profileForm.get('emailAddress').setErrors({ invalidEmail: 'error' });
        if (this.profileForm.valid) {
            var form_1 = this.profileForm.getRawValue();
            // if (form.userType === 'USER') {f
            // }
            this.userService.updateprofile(this.state.getState().userReferenceId, form_1).subscribe(function (data) {
                window.sessionStorage.setItem('encoded', window.btoa(_this.profileForm.get('emailAddress').value));
                _this.state.setIdentity(form_1);
                _this.toggleEdit();
            }, function (error) {
                _this.toggleEdit();
                console.log(error, "Error!!!!");
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myname'),
        __metadata("design:type", Object)
    ], DprozProfProfileComponent.prototype, "input", void 0);
    DprozProfProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-prof-profile',
            template: __webpack_require__(/*! ./dproz-prof-profile.component.html */ "./src/app/dproz-prof-profile/dproz-prof-profile.component.html"),
            styles: [__webpack_require__(/*! ./dproz-prof-profile.component.scss */ "./src/app/dproz-prof-profile/dproz-prof-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _shared_services_places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _shared_services_document_service__WEBPACK_IMPORTED_MODULE_7__["DocumentService"]])
    ], DprozProfProfileComponent);
    return DprozProfProfileComponent;
}());



/***/ }),

/***/ "./src/app/dproz-profile/dproz-profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dproz-profile/dproz-profile.module.ts ***!
  \*******************************************************/
/*! exports provided: DprozProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozProfileModule", function() { return DprozProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/dproz-profile/profile/profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DprozProfileModule = /** @class */ (function () {
    function DprozProfileModule() {
    }
    DprozProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]]
        })
    ], DprozProfileModule);
    return DprozProfileModule;
}());



/***/ }),

/***/ "./src/app/dproz-profile/profile/profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dproz-profile/profile/profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user_us_style\">\r\n  <div class=\"container\">\r\n    <div class=\"row contact_row_style py-3 pt-3\">\r\n      <div class=\"col-lg \">\r\n        <br>\r\n        <p>HomePage &nbsp;&nbsp; /&nbsp;&nbsp;\r\n          <span>User Profile</span>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"user.identity\" class=\"pricing-header  py-3 pt-md-5 pb-md-4 profile_home\">\r\n  <div class=\"container px-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 col-sm-24 col-xs-24 user_row_style \">\r\n        <div class=\"profile_home_col_5\">\r\n          <img src=\"../../../assets/images/prfilimg1.png\">\r\n          <h4 class=\"text-uppercase pt-3\">{{ user.identity.firstName }} {{ user.identity.lastName }}</h4>\r\n          <p class=\"profile_home_p\">Lorem Ipsum is simply dummy text</p>\r\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\r\n            standard dummy text ever since the 1500s, when an unknown printer took a galley</p>\r\n          <div>\r\n            <a href=\"#\">\r\n              <img src=\"../../../assets/images/User-Profile_Dproz_03.png\">\r\n            </a>\r\n            <a href=\"#\">\r\n              <img src=\"../../../assets/images/User-Profile_Dproz_05.png\">\r\n            </a>\r\n            <a href=\"#\">\r\n              <img src=\"../../../assets/images/User-Profile_Dproz_07.png\">\r\n            </a>\r\n            <a href=\"#\">\r\n              <img src=\"../../../assets/images/User-Profile_Dproz_09.png\">\r\n            </a>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-14 col-sm-24 col-xs-24 user_row_style\">\r\n        <div class=\"info_input_border\">\r\n\r\n          <div class=\"row user_row_style\">\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"p-2\">\r\n                <h4>General Information</h4>\r\n              </div>\r\n              <div class=\"general_bt_br\"></div>\r\n            </div>\r\n            <div class=\"col-lg-12 col-sm-12 col-xs-12\">\r\n              <div class=\"pt-2 pb-md-4 btn_styletop\">\r\n                <ul class=\"info_form\">\r\n                  <li *ngIf=\"editForm\" (click)=\"toggleEdit()\">\r\n                    <a>\r\n                      <i class=\"fa fa-save\"></i>Cancel</a>\r\n                  </li>\r\n                  <li *ngIf=\"editForm\" (click)=\"saveForm()\">\r\n                    <a>\r\n                      <i class=\"fa fa-save\"></i> Save Change</a>\r\n                  </li>\r\n                  <li *ngIf=\"!editForm\" (click)=\"toggleEdit()\">\r\n                    <a>\r\n                      <i class=\"fa fa-pencil\"></i> Edit Profile</a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"profile_home_bt_br\"></div>\r\n          <div class=\"pt-4 form_style\">\r\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-xs-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>{{ editForm ? 'First' : 'User' }} Name </label>\r\n                <div class=\"col-sm-16 col-xs-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" [ngClass]=\"user.identity.firstName ? 'focus-t' : ''\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"firstName\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">\r\n                        {{ user.identity.firstName }} {{ user.identity.lastName }}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div *ngIf=\"editForm\" class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-xs-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>Last Name </label>\r\n                <div class=\"col-sm-16 col-xs-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <span style=\"padding: 5px 20px; \"></span>\r\n                      <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"lastName\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-user\"></i>User Type </label>\r\n                <div class=\"col-sm-8 \">\r\n                  <div *ngIf=\"editForm\">\r\n                    <input type=\"checkbox\" value=\"\" class=\"checkbox-inline\" (click)=\"userType($event)\" [checked]=\"user.identity.userType==='PRO'\">Service provider\r\n                    <input type=\"checkbox\" value=\"\" class=\"checkbox-inline\" (click)=\"userType($event)\" [checked]=\"user.identity.userType==='USER'\">Service Coustmer\r\n                  </div>\r\n                  <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.userType }}</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-envelope\"></i>Email Address </label>\r\n                <div class=\"col-sm-16 \">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"emailAddress\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.emailAddress }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-map-marker\"></i>Address </label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:100%; display: block;\">\r\n                      <ng-container *ngIf=\"editForm\">\r\n                        <select id=\"state\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select State</option>\r\n                          <option *ngFor=\"let state of states\" [value]=\"state._region\" [selected]=\"profileForm.getRawValue().address.region===state._region\">{{state._region}}</option>\r\n                        </select>\r\n                        <select id=\"city\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select City</option>\r\n                          <option *ngFor=\"let city of cities\" [value]=\"city._city\" [selected]=\"profileForm.getRawValue().address.city===city._city\">{{city._city}}</option>\r\n                        </select>\r\n                        <select id=\"county\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select County</option>\r\n                          <option *ngFor=\"let county of counties\" [value]=\"county._county\" [selected]=\"profileForm.getRawValue().address.county===county._county\">{{county._county}}</option>\r\n                        </select>\r\n                        <select id=\"street\" (change)=\"addressChange($event)\" class=\"address-select\">\r\n                          <option [value]=null style=\"display: none\">Select Street</option>\r\n                          <option *ngFor=\"let street of streets\" [value]=\"street._street\" [selected]=\"profileForm.getRawValue().address.street===street._street\">{{street._street}}</option>\r\n                        </select>\r\n                      </ng-container>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.address.street }} {{ user.identity.address.city }} {{ user.identity.address.county }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-phone\"></i>Phone </label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" formGroupName=\"phone\">\r\n                      <ng-container *ngIf=\"editForm\">\r\n                        <input type=\"text\" class=\"form-control focus-text w-75\" formControlName=\"phoneNumber\">\r\n                      </ng-container>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity.phone?.phoneNumber }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group row info_input\">\r\n                <label for=\"inputEmail3\" class=\"col-sm-8 col-form-label\">\r\n                  <i class=\"fa fa-phone\"></i>Profile Picture</label>\r\n                <div class=\"col-sm-16\">\r\n                  <div class=\"form-group\">\r\n                    <div class=\"text-effect\" style=\"height:35px\">\r\n                      <div *ngIf=\"editForm\">\r\n                        <span style=\"padding: 5px 20px; \"></span>\r\n                        <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\">\r\n                      </div>\r\n                      <div *ngIf=\"!editForm\" style=\"margin: 5px 21px\">{{ user.identity?.profilePictureUrl?.url }}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row info_input\">\r\n                <a style=\"padding: 5px 35px;\" routerLink=\"../password\" routerLinkActive=\"active-link\">Change Password</a>\r\n              </div>\r\n\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dproz-profile/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dproz-profile/profile/profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_us_style {\n  background: #03a9f4; }\n\n.contact_row_style p {\n  font-size: 14px;\n  color: #ffffff;\n  text-transform: uppercase;\n  margin-top: 6px; }\n\n.profile_home_col_5 {\n  /* border: 1px solid #c7c7c7; */\n  text-align: center;\n  padding: 10px;\n  box-shadow: 0px 1px 6px 0px #e0e0e0;\n  border-radius: 3px;\n  padding-bottom: 43px; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\n.text-uppercase {\n  text-transform: uppercase !important; }\n\n.profile_home_p {\n  color: #03a9f4; }\n\n.info_input_border {\n  /* border: 1px solid #c7c7c7; */\n  box-shadow: 0px 1px 6px 0px #e0e0e0;\n  border-radius: 2px; }\n\n.form_style {\n  overflow: hidden;\n  padding-bottom: 20px;\n  font-size: 14px; }\n\n.form-group {\n  margin-bottom: 0; }\n\n.info_input {\n  padding: 12px 10px; }\n\n.col-form-label {\n  padding-top: calc(.375rem + 1px);\n  padding-bottom: calc(.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.info_input i {\n  padding: 0 10px; }\n\n.text-effect {\n  position: relative;\n  height: 70px; }\n\n.text-effect span {\n  bottom: 3px;\n  position: absolute;\n  z-index: 1; }\n\n.text-effect input {\n  border: none;\n  border-bottom: 1px solid #073951 !important;\n  border-radius: 0;\n  position: absolute;\n  bottom: 0;\n  border-style: none none solid;\n  border-width: 0 0 2px;\n  box-shadow: none;\n  z-index: 2;\n  background-color: transparent; }\n\n.info_input input {\n  border: none;\n  margin: 5px 21px;\n  border-bottom: 1px solid grey;\n  transition: 0.6s; }\n\n.form_style input {\n  font-size: 14px; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; }\n\n.info_input :hover, input:focus {\n  color: #000000;\n  border-color: #03a9f4; }\n\n.text-effect {\n  position: relative;\n  height: 70px;\n  height: 35px;\n  display: flex;\n  align-items: center; }\n\n.focus-t span {\n  bottom: 36px !important;\n  color: #0971a2;\n  font-size: 15px;\n  transition: all 0.3s ease 0s;\n  z-index: 1; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\n.general_bt_br {\n  border-bottom: 3px solid #04a9f3;\n  width: 75%;\n  margin: 3px 0; }\n\n.info_form li {\n  list-style: none;\n  float: right;\n  border: 1px solid grey;\n  border-radius: 60px;\n  padding: 6px 8px;\n  margin: 4px 4px;\n  font-size: 13px;\n  color: #007bff;\n  cursor: pointer; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.address-select {\n  display: block;\n  padding: 6px;\n  width: 100%;\n  margin-bottom: 12px; }\n"

/***/ }),

/***/ "./src/app/dproz-profile/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dproz-profile/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/places.service */ "./src/app/shared/services/places.service.ts");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isemail */ "./node_modules/isemail/lib/index.js");
/* harmony import */ var isemail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isemail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/document.service */ "./src/app/shared/services/document.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, state, service, placesService, userService, docService) {
        this.fb = fb;
        this.state = state;
        this.service = service;
        this.placesService = placesService;
        this.userService = userService;
        this.docService = docService;
        this.editForm = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)]],
            middleName: '',
            emailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
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
        this.placesService.getRegions().subscribe(function (regions) {
            _this.states = regions;
            // console.log(this.states);
        });
        this.state.user.subscribe(function (u) {
            _this.user = u;
            // console.log(u);
            if (_this.user.identity)
                _this.profileForm.patchValue(_this.user.identity);
            if (_this.user.identity && _this.user.identity.address) {
            }
            // console.log(this.profileForm.getRawValue());
        });
    };
    ProfileComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.docService.postDocument(file, this.user.identity.userReferenceId, 'PHOTO_ID', 'thumbnail', 'true').subscribe(function (d) {
                console.log(d);
            });
        }
    };
    ProfileComponent.prototype.focus = function (e) {
        e.target.parentElement.classList.add('focus-t');
        console.log(e);
    };
    ProfileComponent.prototype.blur = function (e) {
        e.target.parentElement.classList.remove('focus-t');
        console.log(e);
    };
    ProfileComponent.prototype.toggleEdit = function () {
        var _this = this;
        this.editForm = !this.editForm;
        console.log(this.state.getState().identity);
        if (this.editForm) {
            this.profileForm.get('address').patchValue(this.state.getState().identity.address);
            console.log(this.profileForm.getRawValue());
            var _a = this.profileForm.getRawValue().address, region_1 = _a.region, county_1 = _a.county, city_1 = _a.city;
            this.selectedCity = city_1;
            this.selectedCounty = county_1;
            this.selectedState = region_1;
            if (this.profileForm.get('address').value.city) {
                this.placesService.getCities(region_1).subscribe(function (cities) {
                    _this.cities = cities;
                    console.log(_this.state.getState().identity.address.region);
                    if (_this.profileForm.get('address').value.county) {
                        _this.placesService.getCounties(region_1, city_1).subscribe(function (counties) {
                            _this.counties = counties;
                            if (_this.profileForm.get('address').value.street) {
                                _this.placesService.getStreets(region_1, city_1, county_1).subscribe(function (streets) {
                                    _this.streets = streets;
                                });
                            }
                        });
                    }
                });
            }
        }
    };
    ProfileComponent.prototype.saveForm = function () {
        this.onSubmit();
    };
    ProfileComponent.prototype.requiredValidator = function (c) {
        return (this.user === 'PRO' && !c.value) ? { required: true } : null;
    };
    ProfileComponent.prototype.addressChange = function (e) {
        var _this = this;
        if (e.target.id === 'state') {
            this.selectedState = e.target.value;
            this.profileForm.get('address').get('region').setValue(null);
            this.profileForm.get('address').get('county').setValue(null);
            this.profileForm.get('address').get('street').setValue(null);
            this.placesService.getCities(this.selectedState).subscribe(function (cities) {
                _this.cities = cities;
            });
        }
        else if (e.target.id === 'city') {
            this.profileForm.get('address').get('county').setValue(null);
            this.profileForm.get('address').get('street').setValue(null);
            this.selectedCity = e.target.value;
            this.placesService.getCounties(this.selectedState, this.selectedCity).subscribe(function (counties) {
                _this.counties = counties;
            });
        }
        else if (e.target.id === 'county') {
            this.profileForm.get('address').get('street').setValue(null);
            this.selectedCounty = e.target.value;
            this.placesService.getStreets(this.selectedState, this.selectedCity, this.selectedCounty).subscribe(function (streets) {
                _this.streets = streets;
            });
        }
        else if (e.target.id === 'street') {
            var addressSelected = this.streets.find(function (el) { return el._street === e.target.value && el._county === _this.selectedCounty; });
            this.profileForm.patchValue({
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
            console.log(this.profileForm.get('address'));
        }
    };
    ProfileComponent.prototype.userType = function (e) {
        this.user = e.target.id;
        var checked = e.target.checked;
        if (checked)
            this.profileForm.get('userType').setValue(this.user);
        else
            this.profileForm.get('userType').setValue('');
    };
    ProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        // this.profileForm.disable();
        if (!isemail__WEBPACK_IMPORTED_MODULE_5__["validate"](this.profileForm.get('emailAddress').value))
            this.profileForm.get('emailAddress').setErrors({ invalidEmail: 'error' });
        if (this.profileForm.valid) {
            var form_1 = this.profileForm.getRawValue();
            // if (form.userType === 'USER') {f
            // }
            this.userService.updateprofile(this.state.getState().userReferenceId, form_1).subscribe(function (data) {
                window.sessionStorage.setItem('encoded', window.btoa(_this.profileForm.get('emailAddress').value));
                _this.state.setIdentity(form_1);
                _this.toggleEdit();
            }, function (error) {
                _this.toggleEdit();
                console.log(error, "Error!!!!");
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myname'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "input", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dproz-profile/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/dproz-profile/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _shared_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _shared_services_places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _shared_services_document_service__WEBPACK_IMPORTED_MODULE_7__["DocumentService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dproz/dproz-main/dproz-main.component.html":
/*!************************************************************!*\
  !*** ./src/app/dproz/dproz-main/dproz-main.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/dproz/dproz-main/dproz-main.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dproz/dproz-main/dproz-main.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dproz/dproz-main/dproz-main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dproz/dproz-main/dproz-main.component.ts ***!
  \**********************************************************/
/*! exports provided: DprozMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozMainComponent", function() { return DprozMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DprozMainComponent = /** @class */ (function () {
    function DprozMainComponent() {
    }
    DprozMainComponent.prototype.ngOnInit = function () {
    };
    DprozMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-dproz-main',
            template: __webpack_require__(/*! ./dproz-main.component.html */ "./src/app/dproz/dproz-main/dproz-main.component.html"),
            styles: [__webpack_require__(/*! ./dproz-main.component.scss */ "./src/app/dproz/dproz-main/dproz-main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DprozMainComponent);
    return DprozMainComponent;
}());



/***/ }),

/***/ "./src/app/dproz/dproz.module.ts":
/*!***************************************!*\
  !*** ./src/app/dproz/dproz.module.ts ***!
  \***************************************/
/*! exports provided: DprozModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozModule", function() { return DprozModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dproz_main_dproz_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dproz-main/dproz-main.component */ "./src/app/dproz/dproz-main/dproz-main.component.ts");
/* harmony import */ var _dproz_home_dproz_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dproz-home/dproz-home.module */ "./src/app/dproz-home/dproz-home.module.ts");
/* harmony import */ var _dproz_authentication_dproz_authentication_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dproz-authentication/dproz-authentication.module */ "./src/app/dproz-authentication/dproz-authentication.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dproz_profile_dproz_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dproz-profile/dproz-profile.module */ "./src/app/dproz-profile/dproz-profile.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DprozModule = /** @class */ (function () {
    function DprozModule() {
    }
    DprozModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dproz_home_dproz_home_module__WEBPACK_IMPORTED_MODULE_3__["DprozHomeModule"],
                _dproz_profile_dproz_profile_module__WEBPACK_IMPORTED_MODULE_6__["DprozProfileModule"],
                _dproz_authentication_dproz_authentication_module__WEBPACK_IMPORTED_MODULE_4__["DprozAuthenticationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [_dproz_main_dproz_main_component__WEBPACK_IMPORTED_MODULE_2__["DprozMainComponent"]]
        })
    ], DprozModule);
    return DprozModule;
}());



/***/ }),

/***/ "./src/app/service/service.module.ts":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ServiceModule = /** @class */ (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], ServiceModule);
    return ServiceModule;
}());



/***/ }),

/***/ "./src/app/services/basic-info/basic-info.component.html":
/*!***************************************************************!*\
  !*** ./src/app/services/basic-info/basic-info.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n      basicInfoForm: FormGroup;\r\n  proInfoForm: FormGroup;\r\n  proAreaOfServiceForm: FormGroup;\r\n  proBusinessHoursForm: FormGroup;\r\n  </button> -->\r\n\r\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n    <mat-step [stepControl]=\"basicInfoForm\">\r\n      \r\n      <ng-template matStepLabel>Fill Business Details</ng-template>\r\n      <form [formGroup]=\"basicInfoForm\">\r\n      <div class=\"form-container\">\r\n        <mat-form-field>\r\n          <mat-label>Business Name</mat-label>\r\n          <input matInput formControlName=\"proName\" placeholder=\"Enter Business Name\">\r\n          <mat-error *ngIf=\"!basicInfoForm.controls['proName'].valid\">business name is required</mat-error>\r\n          <mat-icon matSuffix>business_center</mat-icon>\r\n          <mat-hint>business name</mat-hint>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-label>Business Intro</mat-label>\r\n          <input matInput formControlName=\"proIntro\" placeholder=\"Enter Business Intro\">\r\n          <mat-error *ngIf=\"!basicInfoForm.controls['proIntro'].valid\">business intro is required</mat-error>\r\n          <mat-icon matSuffix>assistant</mat-icon>\r\n          <mat-hint>business intro</mat-hint>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Email</mat-label>\r\n          <input matInput formControlName=\"proEmailAddress\" placeholder=\"Enter Business Email\">\r\n          <mat-error *ngIf=\"!basicInfoForm.controls['proEmailAddress'].valid\">valid email is required</mat-error>\r\n          <mat-icon matSuffix>alternate_email</mat-icon>\r\n          <mat-hint>email address</mat-hint>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <mat-label>Website</mat-label>\r\n          <input matInput formControlName=\"proWebsite\" placeholder=\"Enter Business Website\">\r\n          <mat-error *ngIf=\"!basicInfoForm.controls['proWebsite'].valid\">website format</mat-error>\r\n          <mat-icon matSuffix>computer</mat-icon>\r\n          <mat-hint>website</mat-hint>\r\n        </mat-form-field>\r\n\r\n      \r\n          <mat-form-field>\r\n            <mat-label>Phone Number</mat-label>\r\n            <input matInput formControlName=\"proPhoneNumber\" placeholder=\"Enter Phone Number\">\r\n           \r\n              \r\n            <mat-icon matSuffix>call</mat-icon>\r\n            <mat-hint>phoneNumber</mat-hint>\r\n          </mat-form-field>\r\n        \r\n      </div>\r\n      <div style=\"float:right;\">\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n</form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"proAreaOfServiceStep\">\r\n     \r\n      <ng-template matStepLabel>Fill out your address</ng-template>\r\n      <form [formGroup]=\"proAreaOfServiceForm\">\r\n    \r\n\r\n         \r\n        <div formGroupName=\"location\" class=\"form-container\">\r\n          <mat-form-field>\r\n            <mat-label>Country/State</mat-label>\r\n            <mat-select matInput formControlName=\"country\" placeholder=\"Select Country/State\">\r\n              <mat-option *ngFor=\"let country of countries\" [value]=\"country.Id\">{{country.Name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <mat-label>Region</mat-label>\r\n            <mat-select matInput formControlName=\"region\" placeholder=\"Select Region\">\r\n              <mat-option *ngFor=\"let region of regions\" [value]=\"region.Id\">{{region.Name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-label>District</mat-label>\r\n            <mat-select matInput formControlName=\"district\" placeholder=\"Select Country/State\">\r\n              <mat-option *ngFor=\"let district of districts\" [value]=\"district.Id\">{{district.Name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <mat-label>County</mat-label>\r\n            <mat-select matInput formControlName=\"county\" placeholder=\"Select County\">\r\n              <mat-option *ngFor=\"let county of counties\" [value]=\"county.Id\">{{county.Name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div  class=\"form-container\">\r\n        <mat-form-field>\r\n            <mat-label>Radius Covered From you Center(Miles)</mat-label>\r\n            <input type=\"number\" matInput formControlName=\"radius\" placeholder=\"Enter Radius Covered by your Services\">\r\n            <mat-icon matSuffix>adjust</mat-icon>\r\n            <mat-hint>Radius</mat-hint>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      \r\n      <div style=\"float:right;\">\r\n          <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button matStepperNext>Next</button>\r\n      </div>\r\n</form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"proBusinessHourStep\">\r\n      \r\n      <ng-template matStepLabel>Business Hours</ng-template>\r\n      <form [formGroup]=\"proBusinessHoursForm\">\r\n      <div formGroupName=\"businessHours\" class=\"form-container\">\r\n          <div *ngFor=\"let day of proBusinessHoursForm.get('businessHours').controls; let i=index\">\r\n              <div formGroupName={{i}}> \r\n                  <div  style=\"float:left;\">\r\n                      <mat-checkbox formControlName=\"isSelected\">\r\n\r\n                        {{proBusinessHoursForm.controls.businessHours.controls[i].controls.dayOfWeek.value | daysOfWeek}}\r\n                      </mat-checkbox>\r\n                  </div>\r\n                  <div formGroupName=\"startingHour\" style=\"float:right\">\r\n                      <mat-form-field>\r\n                          <mat-label>Starting Hour</mat-label>\r\n                          <input type=\"number\" matInput formControlName=\"hour\" placeholder=\"Enter Hour\">\r\n                          \r\n                          <mat-hint>Hour</mat-hint>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <mat-label>Minute</mat-label>\r\n                            <input type=\"number\" matInput formControlName=\"minute\" placeholder=\"Enter Minute\">\r\n                            <mat-icon matSuffix>access_time</mat-icon>\r\n                            <mat-hint>minute</mat-hint>\r\n                          </mat-form-field>\r\n                  </div>\r\n                  <div formGroupName=\"endingHour\" style=\"float:right\">\r\n                      <mat-form-field>\r\n                          <mat-label>Ending Hour</mat-label>\r\n                          <input type=\"number\" matInput formControlName=\"hour\" placeholder=\"Enter Hour\">\r\n                         \r\n                          <mat-hint>Hour</mat-hint>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <mat-label>Minute</mat-label>\r\n                            <input type=\"number\" matInput formControlName=\"minute\" placeholder=\"Enter Minute\">\r\n                            <mat-icon matSuffix>access_time</mat-icon>\r\n                            <mat-hint>minute</mat-hint>\r\n                          </mat-form-field>\r\n                  </div> \r\n              </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"float:right;\">\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Submit</button>\r\n      </div>\r\n      </form>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "./src/app/services/basic-info/basic-info.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/services/basic-info/basic-info.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tree-progress-bar {\n  margin-left: 30px; }\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 20px; }\n\n.form-container > * {\n  width: 100%;\n  margin: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/services/basic-info/basic-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/basic-info/basic-info.component.ts ***!
  \*************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/places.service */ "./src/app/shared/services/places.service.ts");
/* harmony import */ var _shared_services_pro_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/pro-info.service */ "./src/app/shared/services/pro-info.service.ts");
/* harmony import */ var _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent(fb, state, placesService, proInfo) {
        this.fb = fb;
        this.state = state;
        this.placesService = placesService;
        this.proInfo = proInfo;
        this.isLinear = false;
        this.setNewForms();
    }
    BasicInfoComponent.prototype.setNewForms = function () {
        this.basicInfoForm = this.fb.group({
            'proReferenceId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'registrationDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proAvatarUrl': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proIntro': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proEmailAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proWebsite': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proVerified': [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proActive': [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "proPhoneNumber": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
        this.proAreaOfServiceForm = this.fb.group({
            "location": this.fb.group({
                "longtude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "latitude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "street": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "county": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "zip": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "district": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "region": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
            "radius": [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
        });
        this.proBusinessHoursForm = this.fb.group({
            businessHours: this.fb.array([this.createBusinessDay("MONDAY")]),
        });
        this.proBusinessHours = this.proBusinessHoursForm.get('businessHours');
        this.proBusinessHours.removeAt(0);
        var days = this.proInfo.getDaysOfTheWeek();
        for (var i = 0; i < days.length; i++) {
            this.proBusinessHours.push(this.createBusinessDay(days[i].Id));
        }
    };
    BasicInfoComponent.prototype.setNewBasicInfo = function () {
        this.proInfoForm = this.fb.group({
            'proReferenceId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'registrationDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proAvatarUrl': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proIntro': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proEmailAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'proWebsite': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proVerified': [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            'proActive': [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "proPhoneNumber": this.fb.group({
                "phoneNumber": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "isPrimary": [true, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "contactMethod": ['CALL', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
            "proAddress": this.fb.group({
                "longtude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "latitude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "street": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "county": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "zip": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "district": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "region": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
            "proAreaOfService": this.fb.group({
                "location": this.fb.group({
                    "longtude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "latitude": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "street": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "county": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "zip": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "district": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "region": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                    "country": ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                }),
                "radius": [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
            "proBusinessHours": this.fb.array([this.createBusinessDay("MONDAY")]),
        });
        this.proBusinessHours = this.basicInfoForm.get('proBusinessHours');
        this.proBusinessHours.removeAt(0);
        var days = this.proInfo.getDaysOfTheWeek();
        for (var i = 0; i < days.length; i++) {
            this.proBusinessHours.push(this.createBusinessDay(days[i].Id));
        }
    };
    BasicInfoComponent.prototype.createBusinessDay = function (day) {
        return this.fb.group({
            "isSelected": [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            "dayOfWeek": [day, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            "startingHour": this.fb.group({
                "hour": [8, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "minute": [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
            "endingHour": this.fb.group({
                "hour": [17, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
                "minute": [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            }),
        });
    };
    BasicInfoComponent.prototype.ngOnInit = function () {
    };
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-basic-info',
            template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/services/basic-info/basic-info.component.html"),
            styles: [__webpack_require__(/*! ./basic-info.component.scss */ "./src/app/services/basic-info/basic-info.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"], _shared_services_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"], _shared_services_pro_info_service__WEBPACK_IMPORTED_MODULE_3__["ProInfoService"]])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/app/services/dproz-credentials/dproz-credentials.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/services/dproz-credentials/dproz-credentials.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"editForm\">\n  <form [formGroup]=\"credentialForm\">\n    <div  class=\"form-container\">\n      <!-- //*ngFor=\"let credential in credentials\" -->\n        <mat-form-field>\n            <mat-label>Credential Type</mat-label>\n            <mat-select  matInput formControlName=\"credentialType\" placeholder=\"Select Credential Type\">\n              <mat-option *ngFor=\"let credential of credentials\" [value]=\"credential.Id\" >{{credential.Name}}</mat-option>\n            \n            </mat-select>\n          </mat-form-field>\n\n          <mat-form-field >\n              <mat-label>Credential Description</mat-label>\n              <textarea matInput formControlName=\"credentialDescription\" placeholder=\"Enter Description\"></textarea>\n              <mat-error *ngIf=\"!credentialForm.controls['credentialDescription'].valid\">credentia description is required</mat-error>\n              <mat-icon matSuffix>adjust</mat-icon>\n              <mat-hint>credentia description</mat-hint>\n            </mat-form-field>\n\n      <mat-form-field >\n          <mat-label>Credential Id</mat-label>\n          <input matInput formControlName=\"CredentialId\" placeholder=\"Enter ID\">\n          <mat-error *ngIf=\"!credentialForm.controls['CredentialId'].valid\">credential id is required</mat-error>\n          <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n          <mat-hint>project name</mat-hint>\n        </mat-form-field>\n      \n  \n        \n     \n        <mat-form-field >\n          <mat-label>Effective Date</mat-label>\n          <input matInput formControlName=\"startDate\" [matDatepicker]=\"startDate\" placeholder=\"Choose start date\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n          <mat-datepicker #startDate></mat-datepicker>\n          <mat-error *ngIf=\"!credentialForm.controls['startDate'].valid\">start date can't be later than today</mat-error>\n          \n          <mat-hint>start date</mat-hint>\n        </mat-form-field>\n      \n  \n  \n        <mat-form-field>\n          <mat-label>Expire Date</mat-label>\n          <input matInput formControlName=\"endDate\" [matDatepicker]=\"endDate\" placeholder=\"Choose end date\">\n          <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n          <mat-datepicker #endDate></mat-datepicker>\n          <mat-error *ngIf=\"!credentialForm.controls['endDate'].valid\">end date can't be before start date</mat-error>\n          <mat-hint>end date</mat-hint>\n        </mat-form-field>\n  \n  \n        <mat-form-field >\n            <mat-label>Issuing Authority</mat-label>\n            <input matInput formControlName=\"authorityName\" placeholder=\"Enter Authrity Name\">\n            <mat-error *ngIf=\"!credentialForm.controls['authorityName'].valid\">Issuing Authority is required</mat-error>\n            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n            <mat-hint>authority name</mat-hint>\n          </mat-form-field>\n        \n          <!-- <div style=\"width:100%; clear:both;\">\n              <div style=\"float:left; width:100%\">\n            \n                <input \n                style=\"display: none\" \n                type=\"file\" #attachment   (change)=\"onFileChanged($event)\">\n              <button [disabled] = hasAttachment mat-button (click)=\"attachment.click()\">Add Attachment</button>\n              \n               <button mat-button (click)=\"onUpload()\">Upload!</button>  \n             </div>\n             <div formArrayName=\"attachments\">\n\n          \n              <div *ngFor=\"let photo of credentialForm.get('attachments').controls; let i=index\" style=\"float:left; width: 50%; padding: 10px;\">\n                <div [formGroupName]=\"i\">  \n              \n                 \n                    <div style=\"float:left; \">\n                       <img width=\"90%\" mat-card-image [src]= credentialForm.controls.attachments.controls[i].\n                       controls.url.value alt=credentialForm.controls.attachments.controls[i].controls.caption.value> \n                        <a [href]=credentialForm.controls.attachments.controls[i].controls.url.value>\n                        {{credentialForm.controls.attachments.controls[i].controls.caption.value}}\n                        </a>\n                    </div>\n                    <div style=\"float:left;\"><button mat-icon-button (click)=\"removeImage(i)\"> \n                        <mat-icon>delete</mat-icon></button></div>\n                  </div>\n                    \n                \n              </div>\n            </div>\n              \n              </div> -->\n              \n      </div>\n      <div style=\"float:right;\">\n            \n          <button mat-button (click)=\"saveForm()\">Submit</button>\n        </div>  \n  </form>\n  </div>\n  <div *ngIf=\"viewAll\">\n      <div style=\"float:left; color: \t#50B2EC;\">\n          Click the (+) Sign to Add Credential\n          </div>\n      <div style=\"float:right;\">\n          <button mat-icon-button (click)=\"addCredential()\">\n            <mat-icon>add</mat-icon></button>\n          </div>\n  <div>\n  <div>\n      <div style=\"width:90%;  clear:both; margin: auto;\" *ngFor=\"let cred of credentialDataChunk; let i of index\">\n        <div style=\"float:right; clear: both;\"><button mat-icon-button (click)=\"editAttachment(cred, i)\"> \n          <mat-icon>attach_file</mat-icon></button></div>\n         \n              <div style=\"float:right; clear: both;\"><button mat-icon-button (click)=\"editCredential(cred, i)\"> \n                  <mat-icon>edit</mat-icon></button></div>\n                  <div style=\"float:right; clear: both;\"><button mat-icon-button (click)=\"deleteCredential( i)\"> \n                    <mat-icon>delete</mat-icon></button></div>\n          <p style=\"font-weight: bold;\"> {{cred.type | credentialType}}, {{cred.issuedBy}}</p>\n          <p> {{cred.description}}</p>\n          <p> <span  style=\"font-weight: bold;\">Effective Date :</span> {{cred.effectiveDate | date }} \n            <span  style=\"font-weight: bold;\"> Expire Date: </span> {{cred.expiringDate | date}}  </p>\n          <hr>\n     </div>\n     <div style=\"clear:both; width:100%\">\n      <mat-paginator [length]=\"length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"pageChange($event)\">\n    </mat-paginator>\n    </div>\n\n      </div></div></div>\n\n      <div style=\"margin-top: 10px\" *ngIf=\"viewOnly\">\n        <!-- <div style=\"float:left; color: \t#50B2EC;\">\n            Click the (+) Sign to Add Credential\n            </div>\n        <div style=\"float:right;\">\n            <button mat-icon-button (click)=\"addCredential()\">\n              <mat-icon>add</mat-icon></button>\n            </div> -->\n    <div>\n    <div>\n        <div style=\"width:90%;  clear:both; margin: auto;\" >\n          <div style=\"float:right; clear: both;\"><button mat-icon-button (click)=\"editCredential(currentCred, currentIndex)\"> \n            <mat-icon>edit</mat-icon></button></div>\n\n            <div style=\"float:right; clear: both;\"><button mat-icon-button (click)=\"deleteCredential( currentIndex)\"> \n                <mat-icon>delete</mat-icon></button></div>\n              \n            <p><span  style=\"font-weight: bold;\">Credential Type:</span> {{currentCred.type | credentialType}}</p>\n            <p><span  style=\"font-weight: bold;\">Issuing Authority:</span> {{currentCred.issuedBy}}</p>\n            <p><span  style=\"font-weight: bold;\">Identification Number: </span> {{currentCred.identificationNumber}}</p>\n            <p><span  style=\"font-weight: bold;\">Description : </span>{{currentCred.description}}</p>\n            <p> <span  style=\"font-weight: bold;\">Effective Date :</span> {{currentCred.effectiveDate | date }} </p>\n            <p><span  style=\"font-weight: bold;\"> Expire Date: </span> {{currentCred.expiringDate | date}}  </p>\n            \n       </div><form [formGroup]=\"credentialForm\">\n\n        <div style=\"width:92%;  clear:both; margin: auto;\">\n         \n       <div formArrayName=\"attachments\">\n\n        <div *ngFor=\"let photo of credentialForm.get('attachments').controls; let i=index\" style=\"float:left; width: 50%; padding: 10px;\">\n          <div [formGroupName]=\"i\">  \n        \n           \n              <div style=\"float:left; \">\n                <!-- <div  style=\" overflow-wrap: break-word;\"> -->\n\n                  <mat-form-field style=\"width:290px;\" >\n                      <input matInput type=\"text\"   formControlName=\"caption\"  placeholder=\"Caption\">\n                    \n                      <button mat-button *ngIf=credentialForm.controls.attachments.controls[i].controls.caption.value matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"credentialForm.controls['attachments'].controls[i].controls['caption'].setValue('')\">\n                        <mat-icon>close</mat-icon>\n                      </button>\n                    </mat-form-field>\n\n                  <!-- <textarea matInput placeholder=\"Leave a comment\"></textarea> -->\n\n              <!-- </div> -->\n              <div>\n                  <!-- <img width=\"90%\" mat-card-image [src]= credentialForm.controls.attachments.controls[i].controls.url.value alt=credentialForm.controls.attachments.controls[i].controls.caption.value> -->\n                  <a [href]=credentialForm.controls.attachments.controls[i].controls.url.value>\n                  {{credentialForm.controls.attachments.controls[i].controls.caption.value}}\n                  </a>\n                  <div style=\"float:right;\"><button mat-icon-button (click)=\"removeImage(i)\"> \n                    <mat-icon>delete</mat-icon></button></div>\n                </div>\n              </div>\n              \n            </div>\n              \n            <div style=\"float:right;\">\n              </div>\n        </div>\n        <div style=\"float:left; width:100%\">\n        \n          <input \n          style=\"display: none\" \n          type=\"file\" #attachment   (change)=\"onFileChanged($event)\">\n        <button [disabled] = hasAttachment mat-button (click)=\"attachment.click()\">Add Attachment(Optional)</button>\n        <button mat-button (click)=\"closeView()\">Exit</button>\n        <button [disabled] = !hasAttachment mat-button (click)=\"saveAttachment()\">Save</button>\n        \n        <!-- <button mat-button (click)=\"onUpload()\">Upload!</button>  -->\n       </div>\n      </div>\n     \n      </div>    </form>\n        </div></div></div>"

/***/ }),

/***/ "./src/app/services/dproz-credentials/dproz-credentials.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/services/dproz-credentials/dproz-credentials.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 20px; }\n\n.form-container > * {\n  width: 100%;\n  margin: 10px 0px; }\n"

/***/ }),

/***/ "./src/app/services/dproz-credentials/dproz-credentials.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/dproz-credentials/dproz-credentials.component.ts ***!
  \***************************************************************************/
/*! exports provided: DprozCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozCredentialsComponent", function() { return DprozCredentialsComponent; });
/* harmony import */ var _shared_services_document_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/document.service */ "./src/app/shared/services/document.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_domain_credential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/domain/credential */ "./src/app/shared/domain/credential.ts");
/* harmony import */ var _shared_services_credentials_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/credentials.service */ "./src/app/shared/services/credentials.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/validators/professional-profile */ "./src/app/shared/validators/professional-profile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DprozCredentialsComponent = /** @class */ (function () {
    function DprozCredentialsComponent(fb, credentialService, documentService) {
        this.fb = fb;
        this.credentialService = credentialService;
        this.documentService = documentService;
        this.editForm = false;
        this.credentialData = [];
        this.credentialDataChunk = [];
        this.hasAttachment = false;
        this.viewOnly = false;
        this.viewAll = true;
        this.currentIndex = -1;
        this.newAttachment = false;
        this.length = 0;
        this.pageSize = 5;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.currentPage = 0;
        this.credentials = credentialService.getCredentiaTypes();
        var cred = JSON.parse(localStorage.getItem("pro_details")).credentials;
        this.initializeCredViewAll(cred);
        this.setNewForm();
    }
    DprozCredentialsComponent.prototype.pageChange = function (event) {
        console.log(event);
        this.credentialDataChunk =
            this.credentialData
                .slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
        //   this.length = 0;
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex;
    };
    DprozCredentialsComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    DprozCredentialsComponent.prototype.setCurrentCred = function (cred) {
        this.setNewForm();
        var credentialForm = this.credentialForm;
        credentialForm.get("credentialType").setValue(cred.type);
        credentialForm.get("credentialDescription").setValue(cred.description);
        credentialForm.get("startDate").setValue(cred.effectiveDate);
        credentialForm.get("endDate").setValue(cred.expiringDate);
        credentialForm.get("CredentialId").setValue(cred.identificationNumber);
        credentialForm.get("authorityName").setValue(cred.issuedBy);
        var attachement = cred.attachment;
        this.hasAttachment = true;
        if (attachement != null) {
            this.hasAttachment = true;
            this.addPhoto(null, attachement.url.url, attachement.description);
        }
    };
    DprozCredentialsComponent.prototype.setNewForm = function () {
        var _this = this;
        this.credentialForm = this.fb.group({
            'credentialType': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'credentialDescription': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'startDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_7__["startDateValidator"]])],
            'endDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'CredentialId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)],
            'authorityName': [''],
            attachments: this.fb.array([this.createAttachment()])
        });
        //assign value to endDate everytime the startDate changes
        var date = this.credentialForm.get('startDate');
        date.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(100); })).subscribe(function (x) {
            var u = _this.credentialForm.get('endDate');
            u.setValidators(Object(_shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_7__["endDateValidator"])(date.value));
            var old = u.value;
            u.setValue(old);
        });
        this.attachments = this.credentialForm.get('attachments');
        this.newAttachment = false;
        this.attachments.removeAt(0);
    };
    DprozCredentialsComponent.prototype.createAttachment = function (file, url, caption) {
        if (file === void 0) { file = null; }
        if (url === void 0) { url = null; }
        if (caption === void 0) { caption = null; }
        return this.fb.group({
            file: file,
            url: url,
            caption: caption
        });
    };
    DprozCredentialsComponent.prototype.ngOnInit = function () {
    };
    DprozCredentialsComponent.prototype.removeImage = function (img) {
        this.attachments = this.credentialForm.get('attachments');
        this.attachments.removeAt(img);
        this.hasAttachment = false;
        this.newAttachment = false;
    };
    DprozCredentialsComponent.prototype.addPhoto = function (file, url, caption) {
        this.attachments = this.credentialForm.get('attachments');
        this.attachments.push(this.createAttachment(file, url, caption));
        this.hasAttachment = true;
    };
    DprozCredentialsComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        console.log(event.target.files[0].name);
        if (event.target.files && event.target.files[0]) {
            // this.files.push(event.target.files[0]);
            var file_1 = event.target.files[0];
            var reader = new FileReader();
            var caption_1 = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                var url = event.target.result;
                _this.addPhoto(file_1, url, caption_1);
                _this.newAttachment = true;
            };
        }
        else {
            this.newAttachment = false;
        }
    };
    DprozCredentialsComponent.prototype.addCredential = function () {
        this.editForm = true;
        this.viewOnly = false;
        this.viewAll = false;
    };
    DprozCredentialsComponent.prototype.getAttachments = function () {
        var attachments = [];
        this.attachments = this.credentialForm.get('attachments');
        for (var i = 0; i < this.attachments.controls.length; i++) {
            var attachmentForm = this.attachments.controls[i];
            var file = attachmentForm.controls["file"].value;
            var url = attachmentForm.controls["url"].value;
            var caption = attachmentForm.controls["caption"].value;
            var attachment = {
                referenceId: "",
                parentReferenceId: "",
                category: "CREDENTIAL",
                url: { url: url },
                thumbnail: true,
                userReferenceId: "",
                description: caption,
                createdDate: (new Date()).toDateString()
            };
            attachments.push(attachment);
        }
        return attachments;
    };
    DprozCredentialsComponent.prototype.getCurrentCredential = function (attachment) {
        var credential = new _shared_domain_credential__WEBPACK_IMPORTED_MODULE_3__["CredentialClass"]();
        credential.type = this.credentialForm.get("credentialType").value;
        credential.description = this.credentialForm.get("credentialDescription").value;
        credential.identificationNumber = this.credentialForm.get("CredentialId").value;
        credential.referenceId = "";
        credential.issuedBy = this.credentialForm.get("authorityName").value;
        credential.effectiveDate = this.credentialForm.get("startDate").value;
        credential.expiringDate = this.credentialForm.get("endDate").value;
        credential.attachment = attachment;
        return credential;
    };
    DprozCredentialsComponent.prototype.saveForm = function () {
        var _this = this;
        var attachment = null;
        if (this.getAttachments().length > 0) {
            attachment = this.getAttachments()[0];
            console.log("attach");
        }
        var credential = this.getCurrentCredential(attachment);
        if (this.currentIndex == -1) {
            this.credentialData.push(credential);
            this.currentIndex = this.credentialData.length - 1;
        }
        else
            this.credentialData[this.currentIndex] = credential;
        this.currentCred = credential;
        console.log(credential);
        this.credentialService
            .insertCredential(credential.getPostingData())
            .subscribe(function (cred) {
            //  this.credentialRefId = credId;
            _this.initializeCredViewAll(cred);
            _this.viewOnly = false;
            _this.viewAll = true;
            _this.editForm = false;
        }, function (error) {
            console.log(error);
        });
    };
    DprozCredentialsComponent.prototype.editAttachment = function (cred, i) {
        this.currentCred = cred;
        this.currentIndex = i;
        this.viewOnly = true;
        this.viewAll = false;
        this.editForm = false;
    };
    DprozCredentialsComponent.prototype.editCredential = function (cred, i) {
        if (i != -1)
            this.currentIndex = i;
        this.currentCred = cred;
        this.setCurrentCred(this.currentCred);
        this.editForm = true;
        this.viewOnly = false;
        this.viewAll = false;
    };
    DprozCredentialsComponent.prototype.closeView = function () {
        this.editForm = false;
        this.viewOnly = false;
        this.viewAll = true;
    };
    DprozCredentialsComponent.prototype.deleteCredential = function (i) {
        this.credentialData.splice(i, 1);
        this.closeView();
    };
    DprozCredentialsComponent.prototype.saveAttachment = function () {
        if (!this.newAttachment)
            return;
        var attachment = null;
        this.hasAttachment = false;
        if (this.getAttachments().length > 0) {
            attachment = this.getAttachments()[0];
            this.hasAttachment = true;
            this.attachments = this.credentialForm.get('attachments');
            this.documentService
                .postDocument(this.attachments.controls[0].get("file").value, this.currentCred.referenceId, this.currentCred.type, this.attachments.controls[0].get("caption").value, false)
                .subscribe(function (doc) {
                console.log(doc);
            }, function (error) {
                console.log(error);
            });
        }
        this.currentCred.attachment = attachment;
        this.credentialData[this.currentIndex] = this.currentCred;
        this.closeView();
    };
    DprozCredentialsComponent.prototype.initializeCredViewAll = function (cred) {
        var creds = new _shared_domain_credential__WEBPACK_IMPORTED_MODULE_3__["CredentialClass"]();
        this.credentialData = creds.getList(JSON.stringify(cred));
        this.length = this.credentialData.length;
        this.credentialDataChunk =
            this.credentialData
                .slice(0, this.pageSize);
    };
    DprozCredentialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'dproz-credentials',
            template: __webpack_require__(/*! ./dproz-credentials.component.html */ "./src/app/services/dproz-credentials/dproz-credentials.component.html"),
            styles: [__webpack_require__(/*! ./dproz-credentials.component.scss */ "./src/app/services/dproz-credentials/dproz-credentials.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_services_credentials_service__WEBPACK_IMPORTED_MODULE_4__["CredentialsService"], _shared_services_document_service__WEBPACK_IMPORTED_MODULE_0__["DocumentService"]])
    ], DprozCredentialsComponent);
    return DprozCredentialsComponent;
}());



/***/ }),

/***/ "./src/app/services/dproz-experience/dproz-experience.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/services/dproz-experience/dproz-experience.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"editForm\">\n<form [formGroup]=\"experienceForm\"><div class=\"form-container\">\n  <!-- <mat-card class=\"example-card\">\n    \n              <mat-card-content> -->\n                  <button *ngIf=\"false\" mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n                      {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n                    </button>\n                    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n                      <mat-step [stepControl]=\"projectDetails\">\n                        <div formGroupName=\"projectDetails\" class=\"form-container\">\n                          <ng-template matStepLabel>Fill out Project Details</ng-template>\n                          <mat-form-field >\n                              <mat-label>Project Name</mat-label>\n                              <input matInput formControlName=\"projectName\" placeholder=\"Enter Project Name\">\n                              <mat-error *ngIf=\"!experienceForm.controls['projectDetails'].controls['projectName'].valid\">project name is required</mat-error>\n                              <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                              <mat-hint>project name</mat-hint>\n                            </mat-form-field>\n                          \n                      \n                            \n                         \n                            <mat-form-field >\n                              <mat-label>Start Date</mat-label>\n                              <input matInput formControlName=\"startDate\" [matDatepicker]=\"startDate\" placeholder=\"Choose start date\">\n                              <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                              <mat-datepicker #startDate></mat-datepicker>\n                              <mat-error *ngIf=\"!experienceForm.controls['projectDetails'].controls['startDate'].valid\">start date must be before today's date</mat-error>\n                              <mat-hint>start date</mat-hint>\n                            </mat-form-field>\n                          \n                      \n                      \n                            <mat-form-field>\n                              <mat-label>End Date</mat-label>\n                              <input matInput formControlName=\"endDate\" [matDatepicker]=\"endDate\" placeholder=\"Choose end date\">\n                              <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                              <mat-datepicker #endDate></mat-datepicker>\n                              <mat-error *ngIf=\"!experienceForm.controls['projectDetails'].controls['endDate'].valid\">end date must be later than start date</mat-error>\n                              <mat-hint>end date</mat-hint>\n                            </mat-form-field>\n                      \n                      \n                        \n                            <mat-form-field >\n                              <mat-label>Project Description</mat-label>\n                              <textarea matInput formControlName=\"projectDescription\" placeholder=\"Enter Project Description\"></textarea>\n                              <mat-error *ngIf=\"!experienceForm.controls['projectDetails'].controls['projectName'].valid\">project description is required</mat-error>\n                              <mat-icon matSuffix>adjust</mat-icon>\n                              <mat-hint>project description</mat-hint>\n                            </mat-form-field>\n                          </div>\n                          <div style=\"float:right;\">\n                              <button mat-button matStepperNext>Next</button>\n                            </div>\n                      </mat-step>\n                      <mat-step [stepControl]=\"clientDetails\">\n                        <div formGroupName=\"clientDetails\" class=\"form-container\">\n                          <ng-template matStepLabel>Fill out Cleint Details</ng-template>\n                         \n                          <mat-form-field >\n                              <mat-label>Client Name</mat-label>\n                              <input matInput formControlName=\"customerNames\" placeholder=\"Enter Client Name\">\n                              <mat-error *ngIf=\"!experienceForm.controls['clientDetails'].controls['customerNames'].valid\">client name minimum 4 charactors</mat-error>\n                              <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n                              <mat-hint>Client name</mat-hint>\n                            </mat-form-field>\n                         \n                            <mat-form-field >\n                                <mat-label>Phone Number</mat-label>\n                                <input matInput formControlName=\"phoneNumber\" placeholder=\"Enter Phone Number\">\n                                <mat-error *ngIf=\"!experienceForm.controls['clientDetails'].controls['phoneNumber'].valid\">phone number must be valid</mat-error>\n                                <mat-icon matSuffix>call</mat-icon>\n                                <mat-hint>phone number</mat-hint>\n                              </mat-form-field>\n                      \n                              <mat-form-field >\n                                  <mat-label>Email Address</mat-label>\n                                  <input matInput formControlName=\"emailAddress\" placeholder=\"Enter Email Address\">\n                                  <mat-error *ngIf=\"!experienceForm.controls['clientDetails'].controls['emailAddress'].valid\">email address must be valid</mat-error>\n                                  <mat-icon matSuffix>alternate_email</mat-icon>\n                                  <mat-hint>email address</mat-hint>\n                                </mat-form-field>\n                      \n                                <mat-checkbox formControlName=\"allowContact\">Allow customer to contact client</mat-checkbox>\n                        \n                          \n                       \n                       \n                        </div>\n                         \n                        <div style=\"float:right;\">\n                            <button mat-button matStepperPrevious>Back</button>\n                            <button mat-button matStepperNext>Next</button>\n                          </div>\n                      </mat-step>\n                      <mat-step>\n                        <ng-template matStepLabel>Upload Photos</ng-template>\n                        <div style=\"width:100%; clear:both;\">\n                          <div style=\"float:left; width:100%\">\n                        \n                            <input \n                            style=\"display: none\"  capture=\"camera\"\n                            type=\"file\" #image accept=\"image/*\"  (change)=\"onFileChanged($event)\">\n                          <button mat-button (click)=\"image.click()\">Add Photo( 3 advisable)</button>\n                          \n                          <!-- <button mat-button (click)=\"onUpload()\">Upload!</button>  -->\n                         </div>\n                         <div formArrayName=\"photos\">\n\n                      \n                          <div *ngFor=\"let photo of experienceForm.get('photos').controls; let i=index\" style=\"float:left; width:290px; padding: 10px;\">\n                            <div [formGroupName]=\"i\">  \n                            <div  style=\" overflow-wrap: break-word;\">\n\n                                  <mat-form-field style=\"width:270px;\" >\n                                      <input matInput type=\"text\"   formControlName=\"caption\"  placeholder=\"Caption\">\n                                    \n                                      <button mat-button *ngIf=experienceForm.controls.photos.controls[i].controls.caption.value matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"experienceForm.controls['photos'].controls[i].controls['caption'].setValue('')\">\n                                        <mat-icon>close</mat-icon>\n                                      </button>\n                                    </mat-form-field>\n\n                                  <!-- <textarea matInput placeholder=\"Leave a comment\"></textarea> -->\n\n                              </div>\n                              <div style=\"float:right; margin: 10px 0px;\"><button mat-icon-button (click)=\"removeImage(i)\"> \n                                <mat-icon>delete</mat-icon></button></div>\n                                <div  style=\"margin: 20px 30px;\">\n\n                                    <img style=\"max-height:200px; height: auto; width:auto; max-width: 270px;\" mat-card-image [src]= experienceForm.controls.photos.controls[i].controls.url.value alt=experienceForm.controls.photos.controls[i].controls.caption.value>\n                                    \n                                </div></div>\n                                \n                                <!-- <div style=\" overflow-wrap: break-word; font-size: 10px;\">\n                                    {{experienceForm.controls['photos'].controls[i].controls['caption'].value}}\n                                    {{experienceForm.controls['photos'].controls[i].controls['caption']}}\n                                </div> -->\n                          </div>\n                        </div>\n                          \n                          </div>\n\n                        \n                    \n                     \n                        <div style=\"float:right; clear:both\">\n                          <button mat-button matStepperPrevious>Back</button>\n                          <button mat-button  (click)=\"stepper.reset()\">Reset</button>\n                          <button mat-button (click)=\"saveForm()\">Submit</button>\n                        </div>\n                      </mat-step>\n                    </mat-horizontal-stepper>\n                \n\n    \n   \n    \n  \n  <!-- </mat-card-content></mat-card> --></div>\n</form>\n</div>\n<div *ngIf=\"!editForm\">\n    <div style=\"float:left; color: \t#50B2EC;\">\n        Click the (+) Sign to Add Experience\n        </div>\n    <div style=\"float:right;\">\n        <button mat-icon-button (click)=\"addExperience()\">\n          <mat-icon>add</mat-icon></button>\n        </div>\n<div style=\"float: left; clear: both;\">\n  <div *ngFor=\"let project of projects; let i=index\" style=\"float:left; width:290px; padding: 10px;\">\n\n    <div style=\"float:right; margin: 10px 0px;\"><button mat-icon-button (click)=\"deleteExperience(i)\"> \n      <mat-icon>delete</mat-icon></button></div>                   \n    <div style=\"float:right; margin: 10px 0px;\"><button mat-icon-button (click)=\"editExperience(project,i)\"> \n      <mat-icon>edit</mat-icon></button></div>\n      <div style=\"margin: 20px 30px; \"><p>\n          <img  style=\"max-height:200px; height: auto; width:auto; max-width: 270px;\" mat-card-image [src]= project.attachments[0].url.url alt=project.attachments[0].url.url> \n          </p><p style=\"font-weight:bold\">{{project.projectName}}</p>\n          <p>({{project.startDate | date}} - {{project.completedDate | date}})</p>\n          \n          <p style=\"color:gray\">{{project.projectDescription}}</p>\n      </div>\n     \n </div>\n\n</div>\n<div style=\"clear:both; width:100%\">\n  <mat-paginator [length]=\"length\"\n  [pageSize]=\"pageSize\"\n  [pageSizeOptions]=\"pageSizeOptions\"\n  (page)=\"pageChange($event)\">\n</mat-paginator>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/services/dproz-experience/dproz-experience.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/services/dproz-experience/dproz-experience.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 20px; }\n\n.form-container > * {\n  width: 100%;\n  margin: 10px 0px; }\n\n.image-container {\n  width: 270px;\n  /*or 70%, or what you want*/\n  height: 200px;\n  /*or 70%, or what you want*/\n  background-size: auto;\n  background-position: center;\n  background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/services/dproz-experience/dproz-experience.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/dproz-experience/dproz-experience.component.ts ***!
  \*************************************************************************/
/*! exports provided: MyFile, DprozExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFile", function() { return MyFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DprozExperienceComponent", function() { return DprozExperienceComponent; });
/* harmony import */ var _shared_domain_experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/domain/experience */ "./src/app/shared/domain/experience.ts");
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/projects.service */ "./src/app/shared/services/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/validators/professional-profile */ "./src/app/shared/validators/professional-profile.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyFile = /** @class */ (function () {
    function MyFile() {
    }
    return MyFile;
}());

var DprozExperienceComponent = /** @class */ (function () {
    function DprozExperienceComponent(fb, projectService) {
        this.fb = fb;
        this.projectService = projectService;
        this.hide = true;
        this.editForm = false;
        this.add = false;
        this.edit = false;
        this.index = 0;
        this.projects = [];
        this.startDateValue = new Date();
        this.files = [];
        this.urls = [];
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.setNewForm();
    }
    DprozExperienceComponent.prototype.removeImage = function (img) {
        this.photos = this.experienceForm.get('photos');
        this.photos.removeAt(img);
    };
    DprozExperienceComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    DprozExperienceComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    DprozExperienceComponent.prototype.pageChange = function (event) {
        console.log(event);
    };
    DprozExperienceComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    DprozExperienceComponent.prototype.setNewForm = function () {
        var _this = this;
        this.experienceForm = this.fb.group({
            'projectDetails': this.fb.group({
                'projectName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'projectDescription': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                'startDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_6__["startDateValidator"]])],
                'endDate': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            }),
            'clientDetails': this.fb.group({
                'customerNames': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                'phoneNumber': [''],
                'emailAddress': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                'allowContact': [''],
            }),
            photos: this.fb.array([this.createPhoto()])
        });
        //assign value to endDate everytime the startDate changes
        var date = this.experienceForm.get('projectDetails').get('startDate');
        date.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(100); })).subscribe(function (x) {
            var u = _this.experienceForm.get('projectDetails').get('endDate');
            u.setValidators(Object(_shared_validators_professional_profile__WEBPACK_IMPORTED_MODULE_6__["endDateValidator"])(date.value));
            var old = u.value;
            u.setValue(old);
        });
        this.photos = this.experienceForm.get('photos');
        this.photos.removeAt(0);
    };
    DprozExperienceComponent.prototype.createPhoto = function (file, url, caption) {
        if (file === void 0) { file = null; }
        if (url === void 0) { url = null; }
        if (caption === void 0) { caption = null; }
        return this.fb.group({
            file: file,
            url: url,
            caption: caption
        });
    };
    DprozExperienceComponent.prototype.addPhoto = function (file, url, caption) {
        this.photos = this.experienceForm.get('photos');
        this.photos.push(this.createPhoto(file, url, caption));
    };
    DprozExperienceComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        console.log(event.target.files[0].name);
        if (event.target.files && event.target.files[0]) {
            this.files.push(event.target.files[0]);
            var file_1 = event.target.files[0];
            var reader = new FileReader();
            var caption_1 = event.target.files[0].name;
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                var url = event.target.result;
                _this.addPhoto(file_1, url, caption_1);
            };
        }
    };
    DprozExperienceComponent.prototype.addExperience = function () {
        this.setNewForm();
        this.editForm = true;
        this.edit = false;
        this.add = true;
    };
    //get attachments from the form to attachment data structure for submission
    DprozExperienceComponent.prototype.getAttachments = function () {
        var attachments = [];
        this.photos = this.experienceForm.get('photos');
        for (var i = 0; i < this.photos.controls.length; i++) {
            var attachmentForm = this.photos.controls[i];
            var file = attachmentForm.controls["file"].value;
            var url = attachmentForm.controls["url"].value;
            var caption = attachmentForm.controls["caption"].value;
            var attachment = {
                referenceId: "",
                parentReferenceId: "",
                category: "PROJECT",
                url: { url: url },
                thumbnail: true,
                userReferenceId: "",
                description: caption,
                createdDate: (new Date()).toDateString()
            };
            attachments.push(attachment);
        }
        return attachments;
    };
    //get project data from the form to project data structure for submission
    DprozExperienceComponent.prototype.getCurrentProject = function (attachments) {
        var client = {
            fistName: this.experienceForm.get("clientDetails").get("customerNames").value,
            lastName: this.experienceForm.get("clientDetails").get("customerNames").value,
            phoneNumber: this.experienceForm.get("clientDetails").get("phoneNumber").value,
            emailAddress: this.experienceForm.get("clientDetails").get("emailAddress").value,
        };
        var project = new _shared_domain_experience__WEBPACK_IMPORTED_MODULE_0__["Project"]();
        project.projectName = this.experienceForm.get("projectDetails").get("projectName").value;
        project.projectDescription = this.experienceForm.get("projectDetails").get("projectDescription").value;
        project.projectLocation = {
            longitude: 0, latitude: 0, street: "", county: "", zip: "", city: "", region: "", country: ""
        };
        project.startDate = this.experienceForm.get("projectDetails").get("startDate").value;
        project.completedDate = this.experienceForm.get("projectDetails").get("endDate").value;
        project.client = client;
        project.consent = { text: "", acknowledged: true, signedOn: "" };
        project.offeredServices = [];
        project.services = [];
        project.attachments = [];
        project.attachments = attachments;
        return project;
    };
    //mostly used when editing, load data into the form
    DprozExperienceComponent.prototype.setCurrentProject = function (project) {
        this.setNewForm();
        var projetDetails = this.experienceForm.get("projectDetails");
        projetDetails.get("projectName").setValue(project.projectName);
        projetDetails.get("projectDescription").setValue(project.projectDescription);
        projetDetails.get("startDate").setValue(project.startDate);
        projetDetails.get("endDate").setValue(project.completedDate);
        var clientDetails = this.experienceForm.get("clientDetails");
        clientDetails.get("customerNames").setValue(project.client.fistName);
        clientDetails.get("phoneNumber").setValue(project.client.phoneNumber);
        clientDetails.get("emailAddress").setValue(project.client.emailAddress);
        for (var i = 0; i < project.attachments.length; i++) {
            var attachement = project.attachments[i];
            this.addPhoto(null, attachement.url.url, attachement.description);
        }
    };
    DprozExperienceComponent.prototype.saveForm = function () {
        var attachments = this.getAttachments();
        var project = this.getCurrentProject(attachments);
        if (this.add)
            this.projects.push(project);
        else
            this.projects[this.index] = project;
        console.log(project.getPostingData());
        this
            .projectService
            .postProject(project.getPostingData())
            .subscribe(function (x) {
            ////
            console.log(x);
        });
        this.editForm = false;
        this.add = false;
        this.edit = false;
    };
    DprozExperienceComponent.prototype.editExperience = function (project, index) {
        this.setCurrentProject(project);
        this.index = index;
        this.editForm = true;
        this.edit = true;
        this.add = false;
    };
    DprozExperienceComponent.prototype.deleteExperience = function (index) {
        this.projects.splice(index, 1);
    };
    DprozExperienceComponent.prototype.ngOnInit = function () {
    };
    DprozExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'dproz-experience',
            template: __webpack_require__(/*! ./dproz-experience.component.html */ "./src/app/services/dproz-experience/dproz-experience.component.html"),
            styles: [__webpack_require__(/*! ./dproz-experience.component.scss */ "./src/app/services/dproz-experience/dproz-experience.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], DprozExperienceComponent);
    return DprozExperienceComponent;
}());



/***/ }),

/***/ "./src/app/services/edit-service-dialog.css":
/*!**************************************************!*\
  !*** ./src/app/services/edit-service-dialog.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollbar {\r\n\tmargin-left: 22px;\r\n\tfloat: left;\r\n\theight: 300px;\r\n\twidth: 65px;\r\n\tbackground: #F5F5F5;\r\n\toverflow-y: scroll;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.force-overflow {\r\n\tmin-height: 450px;\r\n}\r\n\r\n#wrapper {\r\n\ttext-align: center;\r\n\tmargin: auto;\r\n}\r\n\r\n#style-1::-webkit-scrollbar,\r\n#style-2::-webkit-scrollbar {\r\n\twidth: 12px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-4::-webkit-scrollbar,\r\n#style-5::-webkit-scrollbar,\r\n#style-6::-webkit-scrollbar,\r\n#style-7::-webkit-scrollbar,\r\n#style-8::-webkit-scrollbar,\r\n#style-9::-webkit-scrollbar,\r\n#style-10::-webkit-scrollbar,\r\n#style-11::-webkit-scrollbar {\r\n\twidth: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n/**  STYLE 1 */\r\n\r\n#style-1::-webkit-scrollbar-thumb {\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n\r\n#style-1::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n/**  STYLE 2 */\r\n\r\n#style-2::-webkit-scrollbar-thumb {\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #D62929;\r\n}\r\n\r\n#style-2::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n/**  STYLE 3 */\r\n\r\n#style-3::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-3::-webkit-scrollbar {\r\n\twidth: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-3::-webkit-scrollbar-thumb {\r\n\tbackground-color: #000000;\r\n}\r\n\r\n/**  STYLE 4 */\r\n\r\n#style-4::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-4::-webkit-scrollbar-thumb {\r\n\tbackground-color: #000000;\r\n\tborder: 2px solid #555555;\r\n}\r\n\r\n/**  STYLE 5 */\r\n\r\n#style-5::-webkit-scrollbar-track {\r\n    width: 6px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-5::-webkit-scrollbar-thumb {\r\n\tbackground-color: #0ae;\r\n\tbackground-image: -webkit-gradient(linear, 0 0, 0 100%,\r\n\t                  color-stop(.5, rgba(255, 255, 255, .2)),\r\n\t\t\t\t\t          color-stop(.5, transparent), to(transparent));\r\n}\r\n\r\n/**  STYLE 6 */\r\n\r\n#style-6::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-6::-webkit-scrollbar-thumb {\r\n\tbackground-color: #F90;\t\r\n\tbackground-image: -webkit-linear-gradient(45deg,rgba(255, 255, 255, .2) 25%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 25%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 50%,\r\n\t\t\t\t\t\t\t\t\t\t\t  rgba(255, 255, 255, .2) 50%,\r\n\t\t\t\t\t\t\t\t\t\t\t  rgba(255, 255, 255, .2) 75%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 75%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent)\r\n}\r\n\r\n/** STYLE 7 */\r\n\r\n#style-7::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#style-7::-webkit-scrollbar-thumb {\r\n\tborder-radius: 10px;\r\n\tbackground-image: -webkit-gradient(linear,\r\n\t\t\t\t\t\t\t\t\t   left bottom,\r\n\t\t\t\t\t\t\t\t\t   left top,\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.44, rgb(122,153,217)),\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.72, rgb(73,125,189)),\r\n\t\t\t\t\t\t\t\t\t   color-stop(0.86, rgb(28,58,148)));\r\n}\r\n\r\n/**  STYLE 8 */\r\n\r\n#style-8::-webkit-scrollbar-track {\r\n\tborder: 1px solid black;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-8::-webkit-scrollbar-thumb {\r\n\tbackground-color: #000000;\t\r\n}\r\n\r\n/**  STYLE 9 */\r\n\r\n#style-9::-webkit-scrollbar-track {\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-9::-webkit-scrollbar-thumb {\r\n\tbackground-color: #F90;\t\r\n\tbackground-image: -webkit-linear-gradient(90deg, rgba(255, 255, 255, .2) 25%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 25%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 50%,\r\n\t\t\t\t\t\t\t\t\t\t\t  rgba(255, 255, 255, .2) 50%,\r\n\t\t\t\t\t\t\t\t\t\t\t  rgba(255, 255, 255, .2) 75%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent 75%,\r\n\t\t\t\t\t\t\t\t\t\t\t  transparent)\r\n}\r\n\r\n/**  STYLE 10 */\r\n\r\n#style-10::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background: linear-gradient(left, #96A6BF, #63738C);\r\n  box-shadow: inset 0 0 1px 1px #5C6670;\r\n}\r\n\r\n#style-10::-webkit-scrollbar-track {\r\n  border-radius: 10px;\r\n  background: #eee;\r\n  box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0,0,0,0.3)\r\n}\r\n\r\n#style-10::-webkit-scrollbar-thumb:hover {\r\n  background: linear-gradient(left, #8391A6, #536175);\r\n}\r\n\r\n/**  STYLE 11 */\r\n\r\n#style-11::-webkit-scrollbar-track {\r\n  border-radius: 10px;\r\n  background: rgba(0,0,0,0.1);\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n#style-11::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  background: linear-gradient(left, #fff, #e4e4e4);\r\n  border: 1px solid #aaa;\r\n}\r\n\r\n#style-11::-webkit-scrollbar-thumb:hover {\r\n  background: #fff;\r\n}\r\n\r\n#style-11::-webkit-scrollbar-thumb:active {\r\n  background: linear-gradient(left, #22ADD4, #1E98BA);\r\n}"

/***/ }),

/***/ "./src/app/services/edit-service-dialog.html":
/*!***************************************************!*\
  !*** ./src/app/services/edit-service-dialog.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div   style=\"text-align:center; background-color:#F5F5F5; color: \t#50B2EC; margin: 10px 0px; padding: 10px 0px;\">\r\n    <h5 style=\"text-align:center; \">\r\n        Click on the Category to Expand\r\n    </h5>\r\n      <h6 style=\"text-align:center;\">\r\n          Select Services From the Items\r\n      </h6>\r\n</div>\r\n\r\n\r\n<div id=\"style-5\" style=\"overflow-y:auto; height:300px;\">\r\n\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle matTreeNodePadding>\r\n      <button mat-icon-button disabled></button>\r\n      <mat-checkbox class=\"checklist-leaf-node\"\r\n                    [checked]=\"checklistSelection.isSelected(node)\"\r\n                    (change)=\"checklistSelection.toggle(node);\">{{node.item}}</mat-checkbox>\r\n    </mat-tree-node>\r\n  \r\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n      <button mat-icon-button disabled></button>\r\n      <mat-form-field>\r\n        <input matInput #itemValue placeholder=\"New item...\">\r\n      </mat-form-field>\r\n      <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n    </mat-tree-node>\r\n  \r\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n      <button mat-icon-button matTreeNodeToggle\r\n              [attr.aria-label]=\"'toggle ' + node.filename\">\r\n        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n          {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n        </mat-icon>\r\n      </button>\r\n      <mat-checkbox [checked]=\"descendantsAllSelected(node)\"\r\n                    [indeterminate]=\"descendantsPartiallySelected(node)\"\r\n                    (change)=\"ServiceItemSelectionToggle(node)\">{{node.item}}</mat-checkbox>\r\n      <!-- <button mat-icon-button (click)=\"addNewItem(node)\"><mat-icon>add</mat-icon></button> -->\r\n    </mat-tree-node>\r\n   \r\n  </mat-tree>\r\n   \r\n</div>\r\n<div style=\"float:right\">\r\n    <button mat-icon-button (click)=\"onNoClick()\"><mat-icon>save</mat-icon></button>\r\n</div> \r\n "

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#F5F5F5; width: 100% \">\r\n  <div ><mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title><span style=\"margin:10px;\">  {{user.firstName}} {{user.lastName}}</span></mat-card-title>\r\n    <mat-card-subtitle> <span style=\"margin:10px;\">  {{user.emailAddress}}</span></mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-actions>\r\n    <mat-tab-group>\r\n        <mat-tab label=\"User Profile\">\r\n            <ng-template matTabContent>\r\n  \r\n            <dproz-prof-profile></dproz-prof-profile>\r\n  \r\n            </ng-template>\r\n           </mat-tab>\r\n      <mat-tab label=\"Basic Info\">\r\n        <ng-template matTabContent>\r\n         \r\n\r\n           <dproz-basic-info>\r\n\r\n           </dproz-basic-info>\r\n\r\n          </ng-template>\r\n         </mat-tab>\r\n      <mat-tab label=\"Services\">   <ng-template matTabContent>\r\n          <div style=\"float:left; margin: 10px 20px; color: \t#50B2EC;\">\r\n              Click the (+) Sign to Add Services\r\n              </div>\r\n        <div style=\"float:right;\">\r\n          <button mat-icon-button (click)=\"openDialog()\">\r\n            <mat-icon>add</mat-icon></button>\r\n          </div>\r\n   <div style=\"clear: both;\">\r\n     <mat-accordion>\r\n       <div *ngFor=\"let category of categoryArray\" >\r\n          <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n          (closed)=\"panelOpenState = false\">\r\n      <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n      {{category.name}}\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n       <!-- {{panelOpenState ? 'open' : 'closed'}} -->\r\n      </mat-panel-description>\r\n      </mat-expansion-panel-header><ul style=\"list-style-type:square\">\r\n      <div *ngFor=\"let service of category.services\" style=\"clear:both; padding: 0px 0px 10px;\">\r\n        <li>\r\n          <div style=\"float:left;\">{{service.name}}</div><div style=\"float:right;\"><button mat-icon-button (click)=\"deleteService(service)\"> \r\n            <mat-icon>delete</mat-icon></button></div></li>\r\n      </div></ul>\r\n      </mat-expansion-panel>\r\n       </div>\r\n   \r\n</mat-accordion>\r\n   </div>\r\n      \r\n        </ng-template> </mat-tab>\r\n      <mat-tab label=\"Experience\">    <ng-template matTabContent>\r\n          <dproz-experience>\r\n\r\n          </dproz-experience>\r\n          </ng-template> </mat-tab>\r\n\r\n          <mat-tab label=\"Credentials\">\r\n              <ng-template matTabContent>\r\n  \r\n              <dproz-credentials>\r\n                \r\n              </dproz-credentials>\r\n\r\n           \r\n  \r\n              </ng-template>\r\n           </mat-tab>\r\n    </mat-tab-group>\r\n    <!-- <button >View All</button> -->\r\n  </mat-card-actions>\r\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n\r\n \r\n</mat-card></div></div>"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 1000px;\n  margin: auto; }\n\n@media (max-width: 600px) {\n  md-card {\n    min-width: 17rem; } }\n\n.example-header-image {\n  background-image: url('mrisho_profile.png');\n  background-size: contain; }\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServiceItemNode, ServiceItemFlatNode, Category, IndividualService, ChecklistDatabase, ServicesComponent, EditServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceItemNode", function() { return ServiceItemNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceItemFlatNode", function() { return ServiceItemFlatNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualService", function() { return IndividualService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistDatabase", function() { return ChecklistDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditServiceComponent", function() { return EditServiceComponent; });
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _shared_services_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/services.service */ "./src/app/shared/services/services.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ServiceItemNode = /** @class */ (function () {
    function ServiceItemNode() {
    }
    return ServiceItemNode;
}());

/** Flat to-do item node with expandable and level information */
var ServiceItemFlatNode = /** @class */ (function () {
    function ServiceItemFlatNode() {
    }
    return ServiceItemFlatNode;
}());

var Category = /** @class */ (function () {
    function Category() {
        this.services = [];
    }
    Category.prototype.equals = function (name) {
        if (this.name = name)
            return true;
        return false;
    };
    return Category;
}());

var IndividualService = /** @class */ (function () {
    function IndividualService() {
    }
    return IndividualService;
}());

/**
 * The Json object for to-do list data.
 */
var TREE_DATA = {};
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase(services) {
        this.services = services;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        TREE_DATA = JSON.parse(localStorage.getItem("service_tree"));
        //  console.log(TREE_DATA);
        var data = this.buildFileTree(TREE_DATA, 0);
        // Notify the change.
        this.dataChange.next(data);
        // Build the tree nodes from Json object. The result is a list of `ServiceItemNode` with nested
        //     file node as children.
    };
    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `ServiceItemNode`.
     */
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.entries(obj).reduce(function (accumulator, en) {
            var value = en[1];
            var node = new ServiceItemNode();
            node.item = en[0];
            if (value != null && value != 0) {
                if (typeof value === 'object') {
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = en[1];
                    node.value = en[0];
                }
            }
            return accumulator.concat(node);
        }, []);
    };
    ChecklistDatabase.prototype.insertItem = function (parent, name) {
        if (parent.children) {
            parent.children.push({ item: name });
            this.dataChange.next(this.data);
        }
    };
    ChecklistDatabase.prototype.updateItem = function (node, name) {
        node.item = name;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"]])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(dialog, services, auth) {
        this.dialog = dialog;
        this.services = services;
        this.auth = auth;
        this.categories = {};
        this.categoryArray = new Array();
        this.panelOpenState = true;
        // services.getServiceCategories().subscribe( c =>{
        //      this.categories = c;
        //      console.log(c);
        // });
        //this.setPro();
        this.setPro();
    }
    ServicesComponent.prototype.setPro = function () {
        var businesses = JSON.parse(localStorage.getItem("user_details")).businesses;
        if (businesses.length > 0) {
            var proId = businesses[0];
            this.proRef = proId;
            this.auth.getPro(proId)
                .subscribe(function (pro) {
                console.log(pro);
                localStorage.setItem("pro_details", JSON.stringify(pro));
            });
        }
    };
    ServicesComponent.prototype.ngOnInit = function () {
        //  throw new Error("Method not implemented.");
        this.user_ref = localStorage.getItem("user-reference");
        this.user = JSON.parse(localStorage.getItem("user_details"));
        //  this.user
    };
    ServicesComponent.prototype.deleteService = function (service) {
        if (confirm("Are you sure to delete service " + service.name)) {
            console.log("deleted");
        }
    };
    ServicesComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(EditServiceComponent, {
            //width: '600px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            var data = JSON.parse(localStorage.getItem("all_services"));
            var postingString = "";
            var count = 0;
            result._selection.forEach(function (element) {
                if (count > 0)
                    postingString.concat(",");
                postingString.concat(element.value);
                count++;
                var serv = data.filter(function (v) {
                    if (v.serviceNumber == element.value) {
                        console.log(element.value);
                        console.log(v.serviceNumber);
                    }
                    return (v.serviceNumber == element.value);
                })[0];
                console.log(serv);
                var found = false;
                _this.categoryArray.forEach(function (c) {
                    if (c.name == serv.category.categoryName) {
                        var service = new IndividualService();
                        service.name = serv.serviceDescription;
                        service.id = serv.serviceNumber;
                        c.services.push(service);
                        found = true;
                    }
                });
                if (!found) {
                    var newCat = new Category();
                    newCat.name = serv.category.categoryName;
                    var service = new IndividualService();
                    service.name = serv.serviceDescription;
                    service.id = serv.serviceNumber;
                    newCat.services.push(service);
                    _this.categoryArray.push(newCat);
                }
            });
            _this.services.putServices(_this.proRef, postingString)
                .subscribe(function (services) {
                console.log(services);
            });
            console.log(_this.categoryArray);
            console.log(data);
            console.log(result._selection);
            _this.animal = result;
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'dproz-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_services_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"], _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());

var EditServiceComponent = /** @class */ (function () {
    // constructor(
    //   public dialogRef: MatDialogRef<EditServiceComponent>,
    //   @Inject(MAT_DIALOG_DATA) public data: DialogData)
    //    {
    //    }
    function EditServiceComponent(dialogRef, data, database) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.database = database;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true /* multiple */);
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
         * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
         */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new ServiceItemFlatNode();
            flatNode.item = node.item;
            flatNode.value = node.value;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["FlatTreeControl"](this.getLevel, this.isExpandable);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
            console.trace();
        });
    }
    /** Whether all the descendants of the node are selected */
    EditServiceComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    EditServiceComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    EditServiceComponent.prototype.ServiceItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    EditServiceComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, '');
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    EditServiceComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    EditServiceComponent.prototype.onNoClick = function () {
        this.dialogRef.close(this.checklistSelection);
    };
    EditServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'edit-service',
            template: __webpack_require__(/*! ./edit-service-dialog.html */ "./src/app/services/edit-service-dialog.html"),
            styles: [__webpack_require__(/*! ./edit-service-dialog.css */ "./src/app/services/edit-service-dialog.css")],
            providers: [ChecklistDatabase],
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, ChecklistDatabase])
    ], EditServiceComponent);
    return EditServiceComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: DOMAIN, SERVICING_PORT, PLACES_PORT, PLACES_DOMAIN, SERVICING_DOMAIN, PASS_PATTERN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICING_PORT", function() { return SERVICING_PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACES_PORT", function() { return PLACES_PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLACES_DOMAIN", function() { return PLACES_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICING_DOMAIN", function() { return SERVICING_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASS_PATTERN", function() { return PASS_PATTERN; });
var DOMAIN = 'http://52.22.128.37';
var SERVICING_PORT = "8080";
var PLACES_PORT = "3000";
var PLACES_DOMAIN = DOMAIN + ":" + PLACES_PORT;
var SERVICING_DOMAIN = DOMAIN + ":" + SERVICING_PORT;
var PASS_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


/***/ }),

/***/ "./src/app/shared/directives/responsive-menu.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/responsive-menu.directive.ts ***!
  \****************************************************************/
/*! exports provided: ResponsiveMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMenuDirective", function() { return ResponsiveMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsiveMenuDirective = /** @class */ (function () {
    function ResponsiveMenuDirective(e, r) {
        this.e = e;
        this.r = r;
        this.outStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ResponsiveMenuDirective.prototype.click = function () {
        if (this.inStatus) {
            this.r.removeClass(this.e.nativeElement, "responsive");
            this.outStatus.emit(false);
        }
        else {
            this.r.addClass(this.e.nativeElement, "responsive");
            this.outStatus.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ResponsiveMenuDirective.prototype, "inStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ResponsiveMenuDirective.prototype, "outStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ResponsiveMenuDirective.prototype, "click", null);
    ResponsiveMenuDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dprozResponsiveMenu]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ResponsiveMenuDirective);
    return ResponsiveMenuDirective;
}());



/***/ }),

/***/ "./src/app/shared/domain/credential.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/domain/credential.ts ***!
  \*********************************************/
/*! exports provided: CredentialType, CredentialClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialType", function() { return CredentialType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialClass", function() { return CredentialClass; });
var CredentialType = /** @class */ (function () {
    function CredentialType() {
    }
    return CredentialType;
}());

var CredentialClass = /** @class */ (function () {
    function CredentialClass() {
    }
    CredentialClass.prototype.getList = function (jsonData) {
        var data = [];
        var inputData = JSON.parse(jsonData);
        for (var i = 0; i < inputData.length; i++) {
            var cred = inputData[i];
            var credential = new CredentialClass();
            console.log(cred);
            credential.description = cred.description;
            credential.type = cred.type;
            credential.identificationNumber = cred.identificationNumber;
            credential.issuedBy = cred.issuedBy;
            credential.effectiveDate = cred.effectiveDate;
            credential.expiringDate = cred.expiringDate;
            credential.referenceId = cred.referenceId;
            credential.attachment = cred.attachment;
            data.push(credential);
        }
        return data;
    };
    CredentialClass.prototype.getPostingData = function () {
        return {
            type: this.type,
            description: this.description,
            identificationNumber: this.identificationNumber,
            issuedBy: this.issuedBy,
            effectiveDate: this.effectiveDate,
            expiringDate: this.expiringDate,
            referenceId: this.referenceId
        };
    };
    return CredentialClass;
}());



/***/ }),

/***/ "./src/app/shared/domain/experience.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/domain/experience.ts ***!
  \*********************************************/
/*! exports provided: Project, ClientDetails, Consent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetails", function() { return ClientDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consent", function() { return Consent; });
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.getPostingData = function () {
        return {
            projectName: this.projectName,
            projectDescription: this.projectDescription,
            projectLocation: this.projectLocation,
            startDate: this.startDate,
            completedDate: this.completedDate,
            client: this.client,
            consent: this.consent,
            offeredServices: this.offeredServices,
            services: this.services
        };
    };
    return Project;
}());

var ClientDetails = /** @class */ (function () {
    function ClientDetails() {
    }
    ClientDetails.prototype.getPostingData = function () {
        return {
            fistName: this.fistName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            emailAddress: this.emailAddress
        };
    };
    return ClientDetails;
}());

var Consent = /** @class */ (function () {
    function Consent() {
        this.acknowledged = true;
    }
    Consent.prototype.getPostingData = function () {
        return {
            text: this.text,
            acknowledged: this.acknowledged,
            signedOn: this.signedOn,
        };
    };
    return Consent;
}());



/***/ }),

/***/ "./src/app/shared/gaurds/logged-in.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/gaurds/logged-in.guard.ts ***!
  \**************************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(stateService) {
        this.stateService = stateService;
    }
    LoggedInGuard.prototype.canActivate = function (next, state) {
        return this.stateService.user.value.loggedIn;
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());



/***/ }),

/***/ "./src/app/shared/global-components/header/header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/global-components/header/header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n\r\n<!-- <div class=\"topnav\" id=\"myTopnav\">\r\n  <a href=\"#home\" class=\"active\">Home</a>\r\n  <a href=\"#news\">News</a>\r\n  <a href=\"#contact\">Contact</a>\r\n  <a href=\"#about\">About</a>\r\n  <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\r\n    <i class=\"fa fa-bars\"></i>\r\n  </a>\r\n</div> -->\r\n\r\n\r\n\r\n<div class=\"dproz-header\">\r\n  <div class=\"row\"> \r\n\r\n    <div  class=\"col-md-10 dproz-logo\" >\r\n      <img id=\"outer-img\" routerLink=\"dproz/home\" src=\"./assets/images/Vector Smart Object.png\" alt=\"logo dproz\">\r\n    </div>\r\n    <div id=\"myTopnav\" class=\"col-md-14 topnav\" dprozResponsiveMenu [inStatus] = isMenuOpen (outStatus) = \"changeMenu($event)\">\r\n      <img id=\"inner-img\"  routerLink=\"dproz/home\"  src=\"./assets/images/Vector Smart Object.png\" alt=\"logo dproz\">\r\n      <a routerLink=\"dproz/home\" routerLinkActive=\"active-link\">Home</a>\r\n      <a routerLink=\"dproz/about-us\" routerLinkActive=\"active-link\">About Us</a>\r\n      <a routerLink=\"dproz/services\" routerLinkActive=\"active-link\">Services</a>\r\n      <a routerLink=\"dproz/blog\" routerLinkActive=\"active-link\">Blog</a>\r\n      <a routerLink=\"dproz/contact-us\" routerLinkActive=\"active-link\">Contact Us</a>\r\n      \r\n      \r\n      <!-- <a *ngIf=\"userData.loggedIn\"  (click)=\"logout()\">Logout</a> -->\r\n      <mat-chip-list class=\"dropdown\">\r\n          <mat-chip color=\"primary\" *ngIf=\"!userData.loggedIn\"  routerLink=\"dproz/login\" >Login</mat-chip>\r\n          <mat-chip color=\"primary\" *ngIf=\"!userData.loggedIn\" style=\"background-color:#50B2EC\"  routerLink=\"dproz/signup\" selected>Signup</mat-chip>\r\n      \r\n          <mat-chip color=\"primary\" *ngIf=\"userData.loggedIn\" routerLink=\"dproz/profile\">Profile</mat-chip>\r\n        <mat-chip color=\"warn\" style=\"background-color:#50B2EC\" (click)=\"logout()\" *ngIf=\"userData.loggedIn\" selected>Logout</mat-chip>\r\n      </mat-chip-list>\r\n      \r\n      <!-- <div *ngIf=\"userData.loggedIn\" (click) = \"ddClick($event)\" class=\"dropdown\">\r\n          <button class=\"dropbtn\">Options \r\n            <i class=\"fa fa-caret-down\"></i>\r\n          </button>\r\n          <div class=\"dropdown-content\">\r\n            <a routerLink=\"dproz/profile\" (click) = \"dcClick($event)\" class=\"button\" >Profile</a>\r\n            <a (click)=\"logout()\" class=\"button\" >Logout</a>\r\n          </div>\r\n        </div>  -->\r\n        <!-- <a href=\"javascript:void(0);\" class=\"icon\"  >&#9776;</a> -->\r\n        <a href=\"javascript:void(0);\" class=\"icon\"  > <i *ngIf=isMenuOpen class='fa fa-times'></i><i *ngIf=!isMenuOpen class='fa fa-bars'></i></a>\r\n      <!-- <a href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\r\n          <i class=\"fa fa-bars\"></i>\r\n        </a> -->\r\n      <div class=\"row dropdown\" *ngIf=\"false\">\r\n          <div class=\"col\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Options</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                <button class=\"dropdown-item\" routerLink=\"dproz/profile\">Profile</button>\r\n                <button class=\"dropdown-item\"  (click)=\"logout()\">Logout</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/global-components/header/header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/global-components/header/header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dproz-header {\n  padding: 12px;\n  width: 90%;\n  margin: 0px auto; }\n  .dproz-header .dropdown {\n    margin-left: 0px; }\n  .dproz-header .dropdown .btn-outline-primary {\n      color: black;\n      font-size: 14px;\n      font-weight: bold; }\n  .dproz-header .navigation {\n    display: flex;\n    align-items: center; }\n  .dproz-header .navigation a {\n      cursor: pointer;\n      color: #000;\n      outline: none;\n      margin-left: 30px;\n      font-size: .875em;\n      font-weight: 600;\n      text-decoration: none; }\n  .dproz-header .navigation a.active-link {\n        color: #1ab0f5; }\n  .dproz-header .navigation .btn {\n      border-color: transparent;\n      border-radius: 20px; }\n  .dproz-logo {\n  text-align: center; }\n  .dproz-logo img {\n    height: 50px; }\n  .navbar-nav {\n  flex-direction: row; }\n  .navigation .icon {\n  display: none; }\n  /* Add a black background color to the top navigation */\n  .topnav {\n  color: #000; }\n  /* Style the links inside the navigation bar */\n  .topnav a {\n  float: left;\n  display: block;\n  color: #000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n  /* Add an active class to highlight the current page */\n  .active {\n  color: #1ab0f5; }\n  /* Hide the link that should open and close the topnav on small screens */\n  .topnav .icon {\n  display: none; }\n  /* Dropdown container - needed to position the dropdown content */\n  .dropdown {\n  float: left;\n  color: #000; }\n  /* Style the dropdown button to fit inside the topnav */\n  .dropdown .dropbtn {\n  font-size: 17px;\n  border: none;\n  outline: none;\n  color: #000;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0; }\n  /* Style the dropdown content (hidden by default) */\n  .dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #ffffff;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n  /* Style the links inside the dropdown */\n  .dropdown-content a {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n  /* Add a dark background on topnav links and the dropdown button on hover */\n  .topnav a:hover, .dropdown:hover .dropbtn {\n  color: #1ab0f5; }\n  #inner-img {\n  display: none; }\n  /* Add a grey background to dropdown links on hover */\n  .dropdown-content a:hover {\n  color: #1ab0f5; }\n  #outer-img {\n  display: inline; }\n  .topnav mat-chip-list {\n  margin-top: 10px; }\n  /* Show the dropdown menu when the user moves the mouse over the dropdown button */\n  .dropdown:hover .dropdown-content {\n  display: block; }\n  /* When the screen is less than 600 pixels wide, hide all links, except for the first one (\"Home\"). Show the link that contains should open and close the topnav (.icon) */\n  @media screen and (max-width: 600px) {\n  .topnav a:not(:first-child), .dropdown .dropbtn {\n    display: none; }\n  #inner-img {\n    display: inline-block;\n    height: 35px; }\n  .topnav mat-chip-list {\n    display: none; }\n  #outer-img {\n    display: none; }\n  .topnav a.icon {\n    float: right;\n    display: block; } }\n  /* The \"responsive\" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */\n  @media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: relative; }\n  .topnav.responsive a.icon {\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left; }\n  .topnav.responsive mat-chip-list {\n    float: none;\n    display: block;\n    text-align: left;\n    margin-top: 0px; }\n  .topnav.responsive .dropdown {\n    float: none; }\n  .topnav.responsive .dropdown-content {\n    position: relative; }\n  .topnav.responsive .dropdown .dropbtn {\n    display: block;\n    width: 100%;\n    text-align: left; } }\n"

/***/ }),

/***/ "./src/app/shared/global-components/header/header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/global-components/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/state.service */ "./src/app/shared/services/state.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(state, router, r) {
        this.state = state;
        this.router = router;
        this.r = r;
    }
    HeaderComponent.prototype.changeMenu = function (status) {
        this.isMenuOpen = status;
    };
    HeaderComponent.prototype.ddClick = function (event) {
        event.stopImmediatePropagation();
    };
    HeaderComponent.prototype.dcClick = function (event) {
        var myTopnav = document.getElementById('myTopnav');
        myTopnav.click();
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.state.user.subscribe(function (data) {
            _this.userData = data;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.state.resetState();
        window.localStorage.removeItem('auth-token');
        window.localStorage.removeItem('user-reference');
        this.router.navigate(['../dproz/home']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myTopnav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "topnav", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dproz-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/global-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/global-components/header/header.component.scss")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]]
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/http-interceptors/auth-token-interceptor.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/http-interceptors/auth-token-interceptor.ts ***!
  \********************************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Pass untouched request through to the next request handler. */
var AuthTokenInterceptor = /** @class */ (function () {
    function AuthTokenInterceptor(auth) {
        this.auth = auth;
    }
    AuthTokenInterceptor.prototype.intercept = function (req, next) {
        var authToken = window.localStorage.getItem('auth-token');
        console.log(authToken, req, '**************************************');
        var authReq = req.clone(authToken ? { headers: req.headers.set('Authorization', authToken) } : {});
        return next.handle(authReq);
    };
    AuthTokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], AuthTokenInterceptor);
    return AuthTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/pipes/credential-type.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/credential-type.pipe.ts ***!
  \******************************************************/
/*! exports provided: CredentialTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialTypePipe", function() { return CredentialTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/credentials.service */ "./src/app/shared/services/credentials.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CredentialTypePipe = /** @class */ (function () {
    function CredentialTypePipe(credentialService) {
        this.credentialService = credentialService;
        this.credentialTypes = credentialService.getCredentiaTypes();
    }
    CredentialTypePipe.prototype.transform = function (value, args) {
        var newValue = value;
        var filtered = this.credentialTypes.filter(function (x) { return x.Id == value; });
        if (filtered.length > 0)
            newValue = filtered[0].Name;
        return newValue;
    };
    CredentialTypePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'credentialType'
        }),
        __metadata("design:paramtypes", [_services_credentials_service__WEBPACK_IMPORTED_MODULE_1__["CredentialsService"]])
    ], CredentialTypePipe);
    return CredentialTypePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/days-of-week.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/days-of-week.pipe.ts ***!
  \***************************************************/
/*! exports provided: DaysOfWeekPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaysOfWeekPipe", function() { return DaysOfWeekPipe; });
/* harmony import */ var _services_pro_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/pro-info.service */ "./src/app/shared/services/pro-info.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DaysOfWeekPipe = /** @class */ (function () {
    function DaysOfWeekPipe(proInfo) {
        this.proInfo = proInfo;
        this.daysOfTheWeek = proInfo.getDaysOfTheWeek();
    }
    DaysOfWeekPipe.prototype.transform = function (value, args) {
        var newValue = value;
        var filtered = this.daysOfTheWeek.filter(function (x) { return x.Id == value; });
        if (filtered.length > 0)
            newValue = filtered[0].Name;
        return newValue;
    };
    DaysOfWeekPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'daysOfWeek'
        }),
        __metadata("design:paramtypes", [_services_pro_info_service__WEBPACK_IMPORTED_MODULE_0__["ProInfoService"]])
    ], DaysOfWeekPipe);
    return DaysOfWeekPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.signup = function (signupInputs) {
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users", signupInputs);
    };
    AuthenticationService.prototype.verification = function (token) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users/verification/" + token);
    };
    AuthenticationService.prototype.verifyEmail = function (token) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/verify-forgot-password/" + token);
    };
    AuthenticationService.prototype.resendToken = function (emailId) {
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('emailAddress', emailId) };
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users/verification/resend", options);
    };
    AuthenticationService.prototype.login = function (credentials) {
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/login", credentials);
    };
    AuthenticationService.prototype.forgotPassword = function (emailId) {
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/forgot-password", emailId);
    };
    AuthenticationService.prototype.changePassword = function (data) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users/change-password", data);
    };
    AuthenticationService.prototype.verifyPassword = function (data) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/verify-forgot-password/" + data);
    };
    AuthenticationService.prototype.getUser = function (userReference) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users/" + userReference);
    };
    AuthenticationService.prototype.getPro = function (proReferenceId) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/services/credentials.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/credentials.service.ts ***!
  \********************************************************/
/*! exports provided: CredentialClass, CredentialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialClass", function() { return CredentialClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsService", function() { return CredentialsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CredentialClass = /** @class */ (function () {
    function CredentialClass() {
    }
    return CredentialClass;
}());

var CredentialsService = /** @class */ (function () {
    function CredentialsService(http, state) {
        this.http = http;
        this.state = state;
    }
    CredentialsService.prototype.getCredentiaTypes = function () {
        var credentials;
        credentials = [
            {
                Id: "CERTIFICATE_CREDENTIAL", Name: "Certificate/Diploma/Degree",
            },
            {
                Id: "MEMBER_CREDENTIAL", Name: "Membership",
            },
            {
                Id: "LICENSE_CREDENTIAL", Name: "Professional Licence",
            },
            {
                Id: "PERMIT_CREDENTIAL ", Name: "Permit",
            },
        ];
        return credentials;
    };
    CredentialsService.prototype.getProReferenceId = function () {
        var proReferenceId = "no-business";
        var proReferences = JSON.parse(this.state.getCurrentUser()).businesses;
        if (proReferences.length > 0)
            proReferenceId = proReferences[0];
        return proReferenceId;
    };
    CredentialsService.prototype.insertCredential = function (credentialData) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + this.getProReferenceId() + "/credentials", credentialData);
    };
    CredentialsService.prototype.updateCredential = function (credentialData) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + this.getProReferenceId() + "/credentials", credentialData);
    };
    CredentialsService.prototype.deleteteCredential = function (credentialReferenceId) {
        return this.http.delete(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + this.getProReferenceId() + "/credentials/" + credentialReferenceId);
    };
    CredentialsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], CredentialsService);
    return CredentialsService;
}());



/***/ }),

/***/ "./src/app/shared/services/document.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/document.service.ts ***!
  \*****************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = /** @class */ (function () {
    function DocumentService(http) {
        this.http = http;
    }
    DocumentService.prototype.postDocument = function (file, attachmentParentReferenceId, attachmentCategory, attachmentDescription, thumbnail) {
        var options = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('parentReferenceId', attachmentParentReferenceId)
                .set('category', attachmentCategory)
                .set('description', attachmentDescription)
                .set('thumbnail', thumbnail)
        };
        var uploadData = new FormData();
        uploadData.append('attachment', file);
        console.log(uploadData);
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/documents", uploadData, options);
    };
    DocumentService.prototype.getDocument = function (image, userReference) {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/documents/" + userReference);
    };
    DocumentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/shared/services/places.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/places.service.ts ***!
  \***************************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlacesService = /** @class */ (function () {
    function PlacesService(http) {
        this.http = http;
        this.country = 'Tanzania';
        this.PLACESAPI = _constants_constants__WEBPACK_IMPORTED_MODULE_1__["PLACES_DOMAIN"] + "/apis/v1/places";
    }
    PlacesService.prototype.getRegions = function () {
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country', this.country) };
        return this.http.get(this.PLACESAPI, options);
    };
    PlacesService.prototype.getCities = function (region) {
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country', this.country).set('region', region) };
        return this.http.get(this.PLACESAPI, options);
    };
    PlacesService.prototype.getCounties = function (region, city) {
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country', this.country).set('region', region).set('city', city) };
        return this.http.get(this.PLACESAPI, options);
    };
    PlacesService.prototype.getStreets = function (region, city, county) {
        var options = { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('country', this.country).set('region', region).set('city', city).set('county', county) };
        return this.http.get(this.PLACESAPI, options);
    };
    PlacesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/shared/services/pro-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/pro-info.service.ts ***!
  \*****************************************************/
/*! exports provided: ProInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProInfoService", function() { return ProInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProInfoService = /** @class */ (function () {
    function ProInfoService() {
    }
    ProInfoService.prototype.getDaysOfTheWeek = function () {
        var days;
        days = [
            {
                Id: "MONDAY", Name: "Monday",
            },
            {
                Id: "TUESDAY", Name: "Tuesday",
            },
            {
                Id: "WEDNESDAY", Name: "Wednesday",
            },
            {
                Id: "THURSDAY ", Name: "Thurday",
            },
            {
                Id: "FRIDAY ", Name: "Friday",
            },
            {
                Id: "SATURDAY ", Name: "Saturday",
            },
            {
                Id: "SUNDAY ", Name: "Sunday",
            }
        ];
        return days;
    };
    ProInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProInfoService);
    return ProInfoService;
}());



/***/ }),

/***/ "./src/app/shared/services/projects.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/projects.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "./src/app/shared/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = /** @class */ (function () {
    function ProjectsService(http, state) {
        this.http = http;
        this.state = state;
    }
    ProjectsService.prototype.getProjects = function (proReferenceId) {
        // let proReferenceId = JSON.parse(this.state.getCurrentUser()).userReferenceId;
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId + "/projects");
    };
    ProjectsService.prototype.getProject = function (proReferenceId, projectReferenceId) {
        // let proReferenceId = JSON.parse(this.state.getCurrentUser()).userReferenceId;
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId + "/projects/" + projectReferenceId);
    };
    ProjectsService.prototype.postProject = function (projectData) {
        var proReferenceId = JSON.parse(this.state.getCurrentUser()).userReferenceId;
        return this.http.post(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId + "/projects", projectData);
    };
    ProjectsService.prototype.putProject = function (proReferenceId, projectReferenceId, projectData) {
        // let proReferenceId = JSON.parse(this.state.getCurrentUser()).userReferenceId;
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId + "/projects/" + projectReferenceId, projectData);
    };
    ProjectsService.prototype.deleteProject = function (proReferenceId, projectReferenceId) {
        // let proReferenceId = JSON.parse(this.state.getCurrentUser()).userReferenceId;
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz//pros/" + proReferenceId + "/projects/" + projectReferenceId + "\n    ");
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/shared/services/services.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/services.service.ts ***!
  \*****************************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.getServiceCategories = function () {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/services/categories");
    };
    ServicesService.prototype.getServices = function () {
        return this.http.get(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/services");
    };
    ServicesService.prototype.putServices = function (proReferenceId, serviceNumbers) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/pros/" + proReferenceId + "/services/" + serviceNumbers, null);
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/shared/services/state.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/state.service.ts ***!
  \**************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@Injectable()
var StateService = /** @class */ (function () {
    function StateService() {
        this.intialState = {
            loggedIn: false,
            authToken: undefined,
            userReferenceId: undefined,
            identity: {
                emailAddress: undefined,
                address: undefined
            }
        };
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.intialState);
    }
    StateService.prototype.next = function (data) {
        this.user.next(data);
    };
    StateService.prototype.getAuthToken = function () {
        return window.localStorage.getItem('auth-session');
    };
    StateService.prototype.getState = function () {
        return __assign({}, this.user.value, { authToken: null });
    };
    StateService.prototype.setIdentity = function (identity) {
        var currentValue = this.user.value;
        currentValue.identity = __assign({}, currentValue.identity, identity);
        this.next(currentValue);
    };
    StateService.prototype.getCurrentUser = function () {
        return localStorage.getItem("user_details");
    };
    StateService.prototype.setReferenceId = function (referenceId) {
        var currentValue = this.user.value;
        currentValue.userReferenceId = referenceId;
        this.next(currentValue);
    };
    StateService.prototype.resetState = function () {
        this.next(this.intialState);
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/app/shared/constants/constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.updateprofile = function (referenceId, profile) {
        return this.http.put(_constants_constants__WEBPACK_IMPORTED_MODULE_2__["SERVICING_DOMAIN"] + "/api/dproz/users/" + referenceId, profile);
    };
    UserService.prototype.getDaysOfTheWeek = function () {
        var daysOfTheWeek;
        daysOfTheWeek = [
            {
                Id: "MONDAY", Name: "Monday",
            },
            {
                Id: "TUESDAY", Name: "Membership",
            },
            {
                Id: "WEDNESDAY", Name: "Wednesday",
            },
            {
                Id: "THURSDAY ", Name: "Thursday",
            },
            {
                Id: "FRIDAY ", Name: "Friday",
            },
            {
                Id: "SATURDAY ", Name: "Saturday",
            },
            {
                Id: "SUNDAY ", Name: "Sunday",
            },
        ];
        return daysOfTheWeek;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/validators/professional-profile.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/professional-profile.ts ***!
  \***********************************************************/
/*! exports provided: startDateValidator, endDateValidator, passwordMatchValidator, usernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDateValidator", function() { return startDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endDateValidator", function() { return endDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatchValidator", function() { return passwordMatchValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameValidator", function() { return usernameValidator; });
//custom date validator for start date not after today
function startDateValidator(control) {
    if (control.value !== undefined && (isNaN(control.value) || control.value > new Date())) {
        return { 'startDate': true };
    }
    return null;
}
//custom date validator for end date not before start date
function endDateValidator(startDate) {
    return function (control) {
        if (control.value !== undefined && (isNaN(control.value) || control.value <= startDate)) {
            return { 'endDate': true };
        }
        return null;
    };
}
//custom password validator 
function passwordMatchValidator(password) {
    return function (control) {
        if (control.value !== undefined && ((password != control.value))) {
            return { 'confirmedPassword': true };
        }
        return null;
    };
}
//custom username exists validator 
function usernameValidator(users) {
    return function (control) {
        if (control.value !== undefined && (isNaN(control.value))) {
            return { 'userName': true };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Deproz\mrisho\dproz-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map