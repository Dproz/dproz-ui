import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DaysOfTheWeek } from '../domain/common_data';
import { SERVICING_DOMAIN } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ProInfoService {

  postProInfo(proInfo)
  {
    return this.http.post(`${SERVICING_DOMAIN}/api/dproz/pros`, proInfo);
  }

  getDaysOfTheWeek():DaysOfTheWeek[]
  {
    let days:DaysOfTheWeek[];

    days = [
      {
        Id : "MONDAY", Name : "Monday",
      },
      {
        Id : "TUESDAY", Name : "Tuesday",
      },
      {
        Id : "WEDNESDAY", Name : "Wednesday",
      },
      {
        Id : "THURSDAY ", Name : "Thurday",
      },
      {
        Id : "FRIDAY ", Name : "Friday",
      },
      {
        Id : "SATURDAY ", Name : "Saturday",
      },
      {
        Id : "SUNDAY ", Name : "Sunday",
      }


    ];

    return days
  }

  constructor(private http:HttpClient) { }
}
