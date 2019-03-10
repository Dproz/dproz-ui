import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialTypePipe } from './pipes/credential-type.pipe';
import { ResponsiveMenuDirective } from './directives/responsive-menu.directive';
import { CompareDatesDirective } from './directives/compare-dates.directive';

@NgModule({
  declarations: [
    CompareDatesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompareDatesDirective
  ]
})
export class SharedModule { }
