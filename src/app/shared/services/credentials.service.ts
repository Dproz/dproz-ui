import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICING_DOMAIN } from '../constants/constants';
import { StateService } from './state.service';
import { CredentialType } from '../domain/credential';

export class CredentialClass {


}

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private http: HttpClient, private state: StateService) { }
  

  getCredentiaTypes():CredentialType[]
  {
    let credentials:CredentialType[];

    credentials = [
      {
        Id : "CERTIFICATE_CREDENTIAL", Name : "Certificate/Diploma/Degree",
      },
      {
        Id : "MEMBER_CREDENTIAL", Name : "Membership",
      },
      {
        Id : "LICENSE_CREDENTIAL", Name : "Professional Licence",
      },
      {
        Id : "PERMIT_CREDENTIAL ", Name : "Permit",
      },

    ];

    return credentials
  }
  
  getProReferenceId()
  {
    let proReferenceId = "no-business";
    let proReferences = JSON.parse(this.state.getCurrentUser()).businesses;
  
    if(proReferences.length > 0)
        proReferenceId = proReferences[0];

    return proReferenceId;

  }
  
  insertCredential(credentialData) {

    return this.http.put<any>(`${SERVICING_DOMAIN}/api/dproz/pros/${this.getProReferenceId()}/credentials`, credentialData);
  }

  updateCredential(credentialData) {

    return this.http.put<any>(`${SERVICING_DOMAIN}/api/dproz/pros/${this.getProReferenceId()}/credentials`, credentialData);

  }

  deleteteCredential(credentialReferenceId) {



    return this.http.delete<any>(`${SERVICING_DOMAIN}/api/dproz/pros/${this.getProReferenceId()}/credentials/${credentialReferenceId}`);
  }




}
