import { DaysOfTheWeek } from './../domain/common_data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SERVICING_DOMAIN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  updateprofile(referenceId, profile) {
    return this.http.put<any>(`${SERVICING_DOMAIN}/api/dproz/users/${referenceId}`, profile);
  }

  getDaysOfTheWeek():DaysOfTheWeek[]
  {
    let daysOfTheWeek:DaysOfTheWeek[];

    daysOfTheWeek = [
      {
        Id : "MONDAY", Name : "Monday",
      },
      {
        Id : "TUESDAY", Name : "Membership",
      },
      {
        Id : "WEDNESDAY", Name : "Wednesday",
      },
      {
        Id : "THURSDAY ", Name : "Thursday",
      },
      {
        Id : "FRIDAY ", Name : "Friday",
      },
      {
        Id : "SATURDAY ", Name : "Saturday",
      },
      {
        Id : "SUNDAY ", Name : "Sunday",
      },
    ];

    return daysOfTheWeek;
  }
}
