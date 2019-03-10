import { Injectable } from '@angular/core';
import { PLACES_DOMAIN } from '../constants/constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class PlacesService {

  country = 'Tanzania';
  PLACESAPI = `${PLACES_DOMAIN}/apis/v1/places`;

  constructor(private http: HttpClient) { }

  getCountries() {
    const countries = [{ _country: this.country }];
    return of(countries) ;
  }

  getRegions(country: string) {
    const options = { params: new HttpParams().set('country', country) };
    return this.http.get<any>(this.PLACESAPI, options);
  }

  getCities(region: string, country: string) {
    const options = { params: new HttpParams().set('country', country).set('region', region) };
    return this.http.get<any>(this.PLACESAPI, options);
  }

  getCounties(region: string, city: string, country: string) {
    const options = { params: new HttpParams().set('country', country).set('region', region).set('city', city) };
    return this.http.get<any>(this.PLACESAPI, options);
  }

  getStreets(region: string, city: string, county: string, country: string) {
    const options = { params: new HttpParams().set('country', country).set('region', region).set('city', city).set('county', county) };
    return this.http.get<any>(this.PLACESAPI, options);
  }
}
