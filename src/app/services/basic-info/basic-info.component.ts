import { Component,Injectable, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { PlacesService } from '../../shared/services/places.service';
import { ProInfoService } from '../../shared/services/pro-info.service';




@Component({
  selector: 'dproz-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],

})
export class BasicInfoComponent implements OnInit {

  isLinear = false;
  basicInfoForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  proBusinessHours: FormArray;

  constructor(private fb: FormBuilder, private palces: PlacesService, private proInfo: ProInfoService ) {

  this. setNewBasicInfo();
   }

   setNewBasicInfo()
   {
    this.basicInfoForm = this.fb.group({
      
        'proReferenceId': ['', Validators.required],
        'registrationDate': ['', Validators.required],
        'proName': ['', Validators.compose([Validators.required])],
        'proAvatarUrl': ['', Validators.compose([Validators.required])],
        'proIntro': ['', Validators.required],
        'proEmailAddress': ['', Validators.required],
        'proWebsite': ['', Validators.compose([Validators.required])],
        'proVerified': [false, Validators.compose([Validators.required])],
        'proActive': [false, Validators.required],
        "proPhoneNumber":  this.fb.group({
          "phoneNumber": ['', Validators.compose([Validators.required])],
          "isPrimary": [ true, Validators.compose([Validators.required])],
          "contactMethod": ['CALL', Validators.compose([Validators.required])],
        }),

        "proAddress" :  this.fb.group({
          "longtude":  ['', Validators.compose([Validators.required])],
          "latitude": ['', Validators.compose([Validators.required])],
          "street":  ['', Validators.compose([Validators.required])],
          "county":  ['', Validators.compose([Validators.required])],
          "zip":  ['', Validators.compose([Validators.required])],
          "district":  ['', Validators.compose([Validators.required])],
          "region":  ['', Validators.compose([Validators.required])],
          "country":  ['', Validators.compose([Validators.required])],
        }),

        "proAreaOfService" :  this.fb.group({

          "location": this.fb.group({
            "longtude":  ['', Validators.compose([Validators.required])],
            "latitude": ['', Validators.compose([Validators.required])],
            "street":  ['', Validators.compose([Validators.required])],
            "county":  ['', Validators.compose([Validators.required])],
            "zip":  ['', Validators.compose([Validators.required])],
            "district":  ['', Validators.compose([Validators.required])],
            "region":  ['', Validators.compose([Validators.required])],
            "country":  ['', Validators.compose([Validators.required])],
          }),
          "radius":  [0, Validators.compose([Validators.required])],
        }),

        "proBusinessHours" : this.fb.array([this.createBusinessDay("MONDAY")]),

    });

    this.proBusinessHours = this.basicInfoForm.get('proBusinessHours') as FormArray;

    
    this.proBusinessHours.removeAt(0);

    let days = this.proInfo.getDaysOfTheWeek();

    days.forEach( x => {
      this.proBusinessHours.push(this.createBusinessDay(x.Id));
      console.log(x.Id);
    });

   }

  
   createBusinessDay(day:string):FormGroup
   {

    return this.fb.group({
   
      "isSelected": [ false , Validators.compose([Validators.required])],
      "dayOfWeek": [ day, Validators.compose([Validators.required])],
      "startingHour": this.fb.group({
        "hour": [8, Validators.compose([Validators.required])],
        "minute": [0, Validators.compose([Validators.required])],
      }),
      "endingHour": this.fb.group({

        "hour":  [17, Validators.compose([Validators.required])],
        "minute": [0, Validators.compose([Validators.required])],
      }),

    });
   }

   ngOnInit() {
 
}
}
