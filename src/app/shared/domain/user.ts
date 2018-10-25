import { PhoneNumber, StandardLocation } from "./common_data";


export interface user {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    userType: string;
    suserReferenceId: string

}

export class userClass implements user {

    firstName: string;    lastName: string;
    emailAddress: string;
    password: string;
    userType: string;
    suserReferenceId: string;
    phone: PhoneNumber;
    address: StandardLocation;
    registrationDate: Date;
    profilePictureUrl: string;
    verificationDate: Date;
    businesses : string[]

}

