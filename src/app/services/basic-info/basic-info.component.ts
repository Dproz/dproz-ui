import { Component,Injectable, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';




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

  constructor(private fb: FormBuilder ) {

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

        "proBusinessHours" : this.fb.array([this.createBusinessDay()]),

    });

   }

  
   createBusinessDay():FormGroup
   {
    return this.fb.group({

      "isSelected": [ false , Validators.compose([Validators.required])],
      "dayOfWeek": ['', Validators.compose([Validators.required])],
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
