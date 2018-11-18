import { Injectable } from '@angular/core';
import { DaysOfTheWeek } from '../domain/common_data';

@Injectable({
  providedIn: 'root'
})
export class ProInfoService {

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

  constructor() { }
}
