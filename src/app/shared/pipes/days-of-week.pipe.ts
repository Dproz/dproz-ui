import { ProInfoService } from './../services/pro-info.service';
import { DaysOfTheWeek } from './../domain/common_data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysOfWeek'
})

export class DaysOfWeekPipe implements PipeTransform {

  daysOfTheWeek: DaysOfTheWeek[];

  constructor(private proInfo: ProInfoService){

    this.daysOfTheWeek = proInfo.getDaysOfTheWeek();
  }

  transform(value: any, args?: any): any {

    let newValue = value;

    let filtered = this.daysOfTheWeek.filter( x => x.Id == value);

    if(filtered.length > 0)
    newValue = filtered[0].Name;

    return newValue;
  }

}
