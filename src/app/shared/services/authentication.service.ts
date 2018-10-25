import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICING_DOMAIN } from '../constants/constants';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signup(signupInputs) {
    return this.http.post<any>(`${SERVICING_DOMAIN}/api/dproz/users`, signupInputs);
  }

  verification(token) {
    return this.http.get<void>(`${SERVICING_DOMAIN}/api/dproz/users/verification/${token}`);
  }

  verifyEmail(token) {
    return this.http.get<any>(`${SERVICING_DOMAIN}/api/dproz/verify-forgot-password/${token}`);
  }

  resendToken(emailId) {
    const options = { params: new HttpParams().set('emailAddress', emailId) };
    return this.http.get<void>(`${SERVICING_DOMAIN}/api/dproz/users/verification/resend`, options);
  }

  login(credentials) {
    return this.http.post(`${SERVICING_DOMAIN}/api/dproz/login`, credentials);
  }

  forgotPassword(emailId) {
    return this.http.post(`${SERVICING_DOMAIN}/api/dproz/forgot-password`, emailId);
  }

  changePassword(data) {
    return this.http.put(`${SERVICING_DOMAIN}/api/dproz/users/change-password`, data);
  }

  verifyPassword(data) {
    return this.http.get(`${SERVICING_DOMAIN}/api/verify-forgot-password/${data}`);
  }

  getUser(userReference) {
    return this.http.get<any>(`${SERVICING_DOMAIN}/api/dproz/users/${userReference}`);
  }

  getPro(proReferenceId) {
    return this.http.get<any>(`${SERVICING_DOMAIN}/api/dproz/pros/${proReferenceId}`);
  }

  

}

