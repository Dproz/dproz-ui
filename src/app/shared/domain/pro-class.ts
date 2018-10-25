import { userClass } from './user';
import { CredentialClass } from './credential';
import { PostingIfo } from "../interfaces/domainData";
import { StandardLocation, TimeHour, PhoneNumber } from "./common_data";



export class ProBusinessHours {

    dayOfWeek: string;
    startingHour: TimeHour;
    endingHour: TimeHour;

}

export class AreaOfService {

    location: StandardLocation;
    radius: number;
}

export class ProClass implements PostingIfo {

    proReferenceId: string;
    registrationDate: Date;
    proName: string;
    proAvatarUrl: string;
    proIntro: string;
    proPhoneNumber: PhoneNumber;
    proEmailAddress: string;
    proWebsite: string;
    proAddress: AreaOfService;
    proBusinessHours: ProBusinessHours[] = [];
    proAreaOfService: StandardLocation[] = [];
    proVerified: boolean = false;
    proActive: boolean = false
    credentials: CredentialClass[] = [];
    proPointOfContact: userClass;
    proServices: [];


    getPostingData() {

         return {
            proReferenceId: this.proReferenceId,
            registrationDate: this.registrationDate,
            proName: this.proName,
            proAvatarUrl: this.proAvatarUrl,
            proIntro: this.proIntro,
            proPhoneNumber: this.proPhoneNumber,
            proEmailAddress: this.proEmailAddress,
            proWebsite: this.proWebsite,
            proAddress: this.proAddress,
            proBusinessHours: this.proBusinessHours,
            proAreaOfService: this.proAreaOfService,
            proVerified: this.proVerified,
            proActive: this.proActive,
            credentials: this.credentials,
            proPointOfContact: this.proPointOfContact,
            proServices: this.proServices,
         }
    }

    getAnObject(proData:string):ProClass
    {
        let pro = JSON.parse(proData);
        let proObject = new ProClass();

        proObject.proReferenceId = pro.proReferenceId;
        proObject.registrationDate = pro.registrationDate;
        proObject.proName =  pro.proName;
        proObject.proAvatarUrl = pro.proAvatarUrl;
        proObject.proIntro = pro.proIntro;
        proObject.proPhoneNumber = pro.proPhoneNumber;
        proObject.proEmailAddress = pro.proEmailAddress;
        proObject.proWebsite = pro.proWebsite;
        proObject.proAddress = pro.proAddress;
        proObject.proBusinessHours = pro.proBusinessHours;
        proObject.proAreaOfService = pro.proAreaOfService;
        proObject.proVerified = pro.proVerified;
        proObject.proActive = pro.proActive;
        proObject.credentials = pro.credentials;
        proObject.proPointOfContact = pro.proPointOfContact;
        proObject.proServices = pro.proServices;

        return proObject;

    }


}

