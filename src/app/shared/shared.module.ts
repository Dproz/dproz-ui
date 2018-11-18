import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialTypePipe } from './pipes/credential-type.pipe';
import { ResponsiveMenuDirective } from './directives/responsive-menu.directive';
import { CompareDatesDirective } from './directives/compare-dates.directive';
import { DaysOfWeekPipe } from './pipes/days-of-week.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DaysOfWeekPipe]
})
export class SharedModule { }
