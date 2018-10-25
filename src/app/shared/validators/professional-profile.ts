import { AbstractControl, ValidatorFn } from "@angular/forms";
import { UserService } from "../services/user.service";

//custom date validator for start date not after today
export function startDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value > new Date())) {
      return { 'startDate': true };
    }
    return null;
  }
  
  //custom date validator for end date not before start date
  export function endDateValidator(startDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value <= startDate)) {
        return { 'endDate': true };
      }
      return null;
    };
  }

  
//custom password validator 
export function passwordMatchValidator(password:string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
   
      if (control.value !== undefined && ( (password != control.value))) {
      
        return { 'confirmedPassword': true };
      }
      return null;
    };
  }
  
  //custom username exists validator 
  export function usernameValidator(users: UserService): ValidatorFn {
  
    
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value))) {
        return { 'userName': true };
      }
      return null;
    };
  }
  