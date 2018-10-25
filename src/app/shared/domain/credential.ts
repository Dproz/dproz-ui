import { Attachment } from './common_data';
import { PostingIfo } from '../interfaces/domainData';


export class CredentialType {
    Id: string;
    Name: string;
}

export class CredentialClass implements PostingIfo {
    type: string;
    description: string;
    identificationNumber: string;
    issuedBy: string;
    effectiveDate: string;
    expiringDate: string;
    referenceId: string;
    attachment: Attachment;



    getList(jsonData: string):CredentialClass[] 
    {
        let data: CredentialClass[] = [];
        let inputData = JSON.parse(jsonData);


        for (let i:number = 0; i< inputData.length; i++) {
            let cred = inputData[i];
            let credential: CredentialClass = new CredentialClass();
            console.log(cred);
            credential.description = cred.description;
            credential.type = cred.type;
            credential.identificationNumber = cred.identificationNumber;
            credential.issuedBy = cred.issuedBy;
            credential.effectiveDate = cred.effectiveDate;
            credential.expiringDate = cred.expiringDate;
            credential.referenceId = cred.referenceId;
            credential.attachment = cred.attachment;

            data.push(credential);


        }

        return data;

    }


    getPostingData(): any {

        return {

            type: this.type,
            description: this.description,
            identificationNumber: this.identificationNumber,
            issuedBy: this.issuedBy,
            effectiveDate: this.effectiveDate,
            expiringDate: this.expiringDate,
            referenceId: this.referenceId

        }
    }
}