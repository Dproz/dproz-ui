import { PhoneNumber } from './../../shared/domain/common_data';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { PlacesService } from '../../shared/services/places.service';
import { ProInfoService } from '../../shared/services/pro-info.service';
import { DaysOfTheWeek } from '../../shared/domain/common_data';
import { StateService } from '../../shared/services/state.service';
import { ProClass } from '../../shared/domain/pro-class';
import { CredentialClass } from '../../shared/domain/credential';

class HourOfService
{

  getHour(hour, minute){

    return {
      hour: hour,
      minute: minute,
    }
  }
 
  getHourOfService(day: any, starthour: any, startminute: any, endhour: any, endminute: any)
  {

    return {
      dayOfWeek: day,
      startingHour: this.getHour(starthour, startminute),
      endingHour: this.getHour(endhour, endminute),
    }

  }



}




@Component({
  selector: 'dproz-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],

})
export class BasicInfoComponent implements OnInit {

  isLinear = false;
  basicInfoForm: FormGroup;
  proInfoForm: FormGroup;
  proAreaOfServiceForm: FormGroup;
  proBusinessHoursForm: FormGroup;


  proBusinessHours: FormArray;
  states: any;
  cities: any[];
  counties: any[];
  selectedCity: any;
  selectedState: any;
  streets: any[];
  regions: any[];
  selectedRegion: string;

  bussinessDetails: any;

  edit:boolean;

  constructor(private fb: FormBuilder, private state: StateService, private placesService: PlacesService,  private proInfo: ProInfoService) {

    this.setNewForms();
    this.setPlaces();
    
    this.bussinessDetails = JSON.parse(localStorage.getItem("pro_details"));
    console.log(this.bussinessDetails)
   
  }

  editInfo(){
    this.edit = true;
    this.basicInfoForm.get('proName').setValue( this.bussinessDetails["proName"]);
    this.basicInfoForm.get('proIntro').setValue( this.bussinessDetails["proIntro"]);
    this.basicInfoForm.get('proEmailAddress').setValue( this.bussinessDetails["proEmailAddress"]);
    this.basicInfoForm.get('proWebsite').setValue( this.bussinessDetails["proWebsite"]);
    this.basicInfoForm.get('proPhoneNumber').setValue( this.bussinessDetails["proPhoneNumber"]["phoneNumber"]);
   
  }
  setPlaces(){

    this.placesService.getRegions().subscribe( values => {
      this.regions = values;    
    });

    this.proAreaOfServiceForm.controls["location"].get("region").valueChanges.subscribe( value => {
      this.selectedRegion = value;
      this.placesService.getCities(this.selectedRegion).subscribe( values => {
        this.cities = values;    
      });

    });

    this.proAreaOfServiceForm.controls["location"].get("district").valueChanges.subscribe( value => {
      
      this.selectedCity = value;
      this.placesService.getCounties(this.selectedRegion, this.selectedCity).subscribe( values => {
        this.counties = values;    
      });

    });

    this.proAreaOfServiceForm.controls["location"].get("county").valueChanges.subscribe( value => {
      
      this.placesService.getStreets(this.selectedRegion, this.selectedCity, value).subscribe( values => {
        this.streets = values;    
      });

    });
  }

  setNewForms() {

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
      "proPhoneNumber": ['', Validators.compose([Validators.required])],
    });

    this.proAreaOfServiceForm = this.fb.group({

      "location": this.fb.group({
        "longtude": ['', Validators.compose([Validators.required])],
        "latitude": ['', Validators.compose([Validators.required])],
        "street": ['', Validators.compose([Validators.required])],
        "county": ['', Validators.compose([Validators.required])],
        "zip": ['', Validators.compose([Validators.required])],
        "district": ['', Validators.compose([Validators.required])],
        "region": ['', Validators.compose([Validators.required])],
        "country": ['', Validators.compose([Validators.required])],
      }),
      "radius": [0, Validators.compose([Validators.required])],
    });

    this.proBusinessHoursForm = this.fb.group({
      businessHours: this.fb.array([this.createBusinessDay("MONDAY")]),
    });

    this.proBusinessHours = this.proBusinessHoursForm.get('businessHours') as FormArray;


    this.proBusinessHours.removeAt(0);

    let days = this.proInfo.getDaysOfTheWeek();

    for (let i: number = 0; i < days.length; i++) {

      this.proBusinessHours.push(this.createBusinessDay(days[i].Id));
    }

  }


  setNewBasicInfo() {
    this.proInfoForm = this.fb.group({

      'proReferenceId': ['', Validators.required],
      'registrationDate': ['', Validators.required],
      'proName': ['', Validators.compose([Validators.required])],
      'proAvatarUrl': ['', Validators.compose([Validators.required])],
      'proIntro': ['', Validators.required],
      'proEmailAddress': ['', Validators.required],
      'proWebsite': ['', Validators.compose([Validators.required])],
      'proVerified': [false, Validators.compose([Validators.required])],
      'proActive': [false, Validators.required],
      "proPhoneNumber": this.fb.group({
        "phoneNumber": ['', Validators.compose([Validators.required])],
        "isPrimary": [true, Validators.compose([Validators.required])],
        "contactMethod": ['CALL', Validators.compose([Validators.required])],
      }),

      "proAddress": this.fb.group({
        "longtude": ['', Validators.compose([Validators.required])],
        "latitude": ['', Validators.compose([Validators.required])],
        "street": ['', Validators.compose([Validators.required])],
        "county": ['', Validators.compose([Validators.required])],
        "zip": ['', Validators.compose([Validators.required])],
        "district": ['', Validators.compose([Validators.required])],
        "region": ['', Validators.compose([Validators.required])],
        "country": ['', Validators.compose([Validators.required])],
      }),

      "proAreaOfService": this.fb.group({

        "location": this.fb.group({
          "longtude": ['', Validators.compose([Validators.required])],
          "latitude": ['', Validators.compose([Validators.required])],
          "street": ['', Validators.compose([Validators.required])],
          "county": ['', Validators.compose([Validators.required])],
          "zip": ['', Validators.compose([Validators.required])],
          "district": ['', Validators.compose([Validators.required])],
          "region": ['', Validators.compose([Validators.required])],
          "country": ['', Validators.compose([Validators.required])],
        }),
        "radius": [0, Validators.compose([Validators.required])],
      }),

      "proBusinessHours": this.fb.array([this.createBusinessDay("MONDAY")]),

    });

    this.proBusinessHours = this.basicInfoForm.get('proBusinessHours') as FormArray;


    this.proBusinessHours.removeAt(0);

    let days = this.proInfo.getDaysOfTheWeek();

    for (let i: number = 0; i < days.length; i++) {

      this.proBusinessHours.push(this.createBusinessDay(days[i].Id));
    }

  }


  createBusinessDay(day: string): FormGroup {

    return this.fb.group({

      "isSelected": [false, Validators.compose([Validators.required])],
      "dayOfWeek": [day, Validators.compose([Validators.required])],
      "startingHour": this.fb.group({
        "hour": [8, Validators.compose([Validators.required])],
        "minute": [0, Validators.compose([Validators.required])],
      }),
      "endingHour": this.fb.group({

        "hour": [17, Validators.compose([Validators.required])],
        "minute": [0, Validators.compose([Validators.required])],
      }),

    });
  }

  ngOnInit() {

  }

  submit()
  {

    let pro = JSON.parse(localStorage.getItem("pro_details"));

    let hour: HourOfService = new HourOfService();
    let hours:[] = this.proBusinessHoursForm.controls["businessHours"]["controls"];
    let len = hours.length;

    let hoursToSubmit: any[] = [];


    for( let i = 0; i< len; i++){
      let control:any = hours[i]["controls"];
      let dayOfWeek:string = control["dayOfWeek"]["value"];
      let startingHour = control["startingHour"]["controls"]["hour"]["value"];
      let startingMinute = control["startingHour"]["controls"]["minute"]["value"];
      let endingHour = control["endingHour"]["controls"]["hour"]["value"];
      let endingMinute = control["endingHour"]["controls"]["minute"]["value"];
     
      let h:any = hour.getHourOfService(dayOfWeek, startingHour, startingMinute, endingHour, endingMinute);
      hoursToSubmit.push(h);
    }
    
   
   let phone:PhoneNumber = new PhoneNumber();
   phone.phoneNumber = this.basicInfoForm.controls["proPhoneNumber"].value;

    let proBiz:ProClass = new ProClass();

    proBiz.proReferenceId= "";
    proBiz.registrationDate = new Date();
    proBiz.proName= this.basicInfoForm.get("proName").value;
    proBiz.proAvatarUrl = this.basicInfoForm.get("proAvatarUrl").value;
    proBiz.proIntro= this.basicInfoForm.get("proIntro").value;
    proBiz.proPhoneNumber= phone;
    proBiz.proEmailAddress= this.basicInfoForm.get("proEmailAddress").value;
    proBiz.proWebsite= this.basicInfoForm.get("proWebsite").value;
    proBiz.proAddress= null;
    proBiz.proBusinessHours= hoursToSubmit;
    proBiz.proAreaOfService= this.proAreaOfServiceForm.value;
  //  proBiz.proVerified=  false;
  //  proBiz.proActive=false;
  //  proBiz.credentials= [];
    proBiz.proServices= [];
  

    let data = proBiz.getPostingData();
    console.log(data);
    this.proInfo.postProInfo(proBiz.getPostingData()).subscribe( x => {
         console.log(x);
    })

    this.edit = false;

  }
}
