import { Injectable } from '@angular/core';
import { PLACES_DOMAIN } from '../constants/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PlacesService {

  country = 'Tanzania';
  PLACESAPI = `${PLACES_DOMAIN}/apis/v1/places`

  constructor(private http: HttpClient) {  }

  getRegions():Observable<any> {
    const options = { params: new HttpParams().set('country', this.country) };
    return this.http.get<any>(this.PLACESAPI, options);
  }
  getCities(region):Observable<any> {
    const options = { params: new HttpParams().set('country', this.country).set('region', region) };
    return this.http.get<any>(this.PLACESAPI, options);
  }
  getCounties(region, city):Observable<any> {
    const options = { params: new HttpParams().set('country', this.country).set('region', region).set('city', city) };
    return this.http.get<any>(this.PLACESAPI, options);
  }
  getStreets(region, city, county):Observable<any> {
    const options = { params: new HttpParams().set('country', this.country).set('region', region).set('city', city).set('county', county) };
    return this.http.get<any>(this.PLACESAPI, options);
  }
}
