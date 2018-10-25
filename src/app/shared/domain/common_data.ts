import { PostingIfo } from "../interfaces/domainData";


export class serviceDetails implements PostingIfo {



    serviceId: string;
    serviceNumber: string;
    serviceSubcategory: string;
    serviceCategory: string;
    serviceDescription: string;
    languageIndicator: string;

    getPostingData() {
        return {

            serviceId: this.serviceId,
            serviceNumber: this.serviceNumber,
            serviceSubcategory: this.serviceSubcategory,
            serviceCategory: this.serviceCategory,
            serviceDescription: this.serviceDescription,
            languageIndicator: this.languageIndicator
    
            }
    }

}

export class Attachment implements PostingIfo
{

    referenceId: string;
    parentReferenceId: string;
    category: string; 
    url: UrlClass;
    thumbnail: boolean = true;
    userReferenceId: string;
    description: string;
    createdDate: string;

    getPostingData(){

        return {
        referenceId: this.referenceId,
        parentReferenceId: this.parentReferenceId,
        category: this.category,
        url: this.url,
        thumbnail: this.thumbnail,
        userReferenceId: this.userReferenceId,
        description: this.description,
        createdDate: this.createdDate
        }
    }
}


export class StandardLocation implements PostingIfo
{
    longitude: number;
    latitude: number;
    street: string;
    county: string;
    zip: string;
    city: string;
    region: string;
    country: string;

    getPostingData(){

        return {

            longitude: this.longitude,
            latitude: this.latitude,
            street: this.street,
            county: this.county,
            zip: this.zip,
            city: this.city,
            region: this.region,
            country: this.country
        }
    }
}

export class UrlClass implements PostingIfo
{
    url: string;
     
    getPostingData(){

        return {

            url: this.url
        }
    }
   
}

export class PhoneNumber {
   
    phoneNumber: string;
    primary : boolean;
    contactMethod : string  = "CALL";

} 

export class TimeHour {

hour: number;
minute : number;

} 

export class DaysOfTheWeek
{
    Id: string; Name:string;
}
