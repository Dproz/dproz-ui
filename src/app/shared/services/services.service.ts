import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICING_DOMAIN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServiceCategories()
  {
    return this.http.get(`${SERVICING_DOMAIN}/api/dproz/services/categories`);
  }

  getServices()
  {
    return this.http.get(`${SERVICING_DOMAIN}/api/dproz/services`);
  }

  putServices(proReferenceId, serviceNumbers)
  {
    return this.http.put(`${SERVICING_DOMAIN}/api/dproz/pros/${proReferenceId}/services/${serviceNumbers}`, null);
  }

}
