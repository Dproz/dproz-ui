import { DocumentService } from './../../shared/services/document.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Attachment, UrlClass } from '../../shared/domain/common_data';
import { CredentialClass, CredentialType } from '../../shared/domain/credential';
import { CredentialsService } from '../../shared/services/credentials.service';
import { timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { endDateValidator, startDateValidator } from '../../shared/validators/professional-profile';
import { PageEvent } from '@angular/material';




@Component({
  selector: 'dproz-credentials',
  templateUrl: './dproz-credentials.component.html',
  styleUrls: ['./dproz-credentials.component.scss']
})
export class DprozCredentialsComponent implements OnInit {

  editForm: boolean = false;
  credentialForm: FormGroup;
  credentials: CredentialType[];
  credentialData: CredentialClass[] = [];
  credentialDataChunk: CredentialClass[] = [];
  hasAttachment: boolean = false;
  viewOnly: boolean = false;
  viewAll: boolean = true;
  currentCred: CredentialClass;
  currentIndex: number = -1;
  credentialRefId: string;
  newAttachment: boolean = false;

  attachments: FormArray;

  length = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentPage = 0;

  // MatPaginator Output
  pageEvent: PageEvent;

  pageChange(event) {
    console.log(event);
    this.credentialDataChunk = 
    this.credentialData
    .slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
 //   this.length = 0;
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  
  constructor(private fb: FormBuilder, private credentialService: CredentialsService, private documentService: DocumentService) {

    this.credentials = credentialService.getCredentiaTypes();
    let cred = JSON.parse(localStorage.getItem("pro_details")).credentials;
    this.initializeCredViewAll(cred);

    this.setNewForm();

  }

  setCurrentCred(cred: CredentialClass) {

    this.setNewForm();

    let credentialForm = this.credentialForm;

    credentialForm.get("credentialType").setValue(cred.type);
    credentialForm.get("credentialDescription").setValue(cred.description);
    credentialForm.get("startDate").setValue(cred.effectiveDate);
    credentialForm.get("endDate").setValue(cred.expiringDate);



    credentialForm.get("CredentialId").setValue(cred.identificationNumber);
    credentialForm.get("authorityName").setValue(cred.issuedBy);



    let attachement = cred.attachment;
    this.hasAttachment = true;
    if (attachement != null) {
      this.hasAttachment = true;
      this.addPhoto(null, attachement.url.url, attachement.description);
    }

  }

  setNewForm(): any {

    this.credentialForm = this.fb.group({

      'credentialType': ['', Validators.required],
      'credentialDescription': ['', Validators.required],
      'startDate': ['', Validators.compose([Validators.required, startDateValidator])],
      'endDate': ['', Validators.required],


      'CredentialId': ['', Validators.minLength(4)],
      'authorityName': [''],


      attachments: this.fb.array([this.createAttachment()])

    });

    //assign value to endDate everytime the startDate changes
    let date = this.credentialForm.get('startDate') as FormControl;
    date.valueChanges.pipe(debounce(() => timer(100))).subscribe(x => {
      let u = this.credentialForm.get('endDate') as FormControl;
      u.setValidators(endDateValidator(date.value));
      let old = u.value;
      u.setValue(old);
    });

    this.attachments = this.credentialForm.get('attachments') as FormArray;

    this.newAttachment = false;
    this.attachments.removeAt(0);
  }


  createAttachment(file = null, url = null, caption = null): FormGroup {
    return this.fb.group({
      file: file,
      url: url,
      caption: caption
    });
  }

  ngOnInit() {
  }

  removeImage(img) {

    this.attachments = this.credentialForm.get('attachments') as FormArray;

    this.attachments.removeAt(img);
    this.hasAttachment = false;
    this.newAttachment = false;

  }

  addPhoto(file, url, caption): void {

    this.attachments = this.credentialForm.get('attachments') as FormArray;


    this.attachments.push(this.createAttachment(file, url, caption));
    this.hasAttachment = true;

  }

  onFileChanged(event) {

    console.log(event.target.files[0].name);

    if (event.target.files && event.target.files[0]) {

      // this.files.push(event.target.files[0]);
      let file = event.target.files[0];
      var reader = new FileReader();
      let caption = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        let url = event.target.result;

        this.addPhoto(file, url, caption);
        this.newAttachment = true;

      }
    } else {

      this.newAttachment = false;
    }

  }

  addCredential() {
    this.editForm = true;
    this.viewOnly = false;
    this.viewAll = false;

  }

  getAttachments(): Attachment[] {

    let attachments: Attachment[] = [];

    this.attachments = this.credentialForm.get('attachments') as FormArray;

    for (let i = 0; i < this.attachments.controls.length; i++) {

      let attachmentForm = this.attachments.controls[i] as FormGroup;
      let file = attachmentForm.controls["file"].value;
      let url = attachmentForm.controls["url"].value;
      let caption = attachmentForm.controls["caption"].value;

      let attachment: Attachment = <Attachment>{
        referenceId: "",
        parentReferenceId: "",
        category: "CREDENTIAL",
        url: <UrlClass>{ url: url },
        thumbnail: true,
        userReferenceId: "",
        description: caption,
        createdDate: (new Date()).toDateString()
      };


      attachments.push(attachment);

    }
    return attachments;
  }

  getCurrentCredential(attachment: Attachment): CredentialClass {


    let credential = new CredentialClass();

    credential.type = this.credentialForm.get("credentialType").value;
    credential.description = this.credentialForm.get("credentialDescription").value;
    credential.identificationNumber = this.credentialForm.get("CredentialId").value;
    credential.referenceId = "";
    credential.issuedBy = this.credentialForm.get("authorityName").value;
    credential.effectiveDate = this.credentialForm.get("startDate").value;
    credential.expiringDate = this.credentialForm.get("endDate").value;

    credential.attachment = attachment;

    return credential;
  }

  saveForm() {

    let attachment: Attachment = null;
    if (this.getAttachments().length > 0) {
      attachment = this.getAttachments()[0];
      console.log("attach");
    }


    let credential: CredentialClass = this.getCurrentCredential(attachment);

    if (this.currentIndex == -1) {
      this.credentialData.push(credential);
      this.currentIndex = this.credentialData.length - 1;
    }

    else
      this.credentialData[this.currentIndex] = credential;

    this.currentCred = credential;
    console.log(credential);
  

    this.credentialService
      .insertCredential(credential.getPostingData())
      .subscribe(cred => {
      //  this.credentialRefId = credId;
     
      this.initializeCredViewAll(cred);

      this.viewOnly = false;
      this.viewAll = true;
      this.editForm = false;
      }, error => {
        console.log(error);
      });


  }

  editAttachment(cred: CredentialClass, i: number) {
    this.currentCred = cred;
    this.currentIndex = i;
    this.viewOnly = true;
    this.viewAll = false;
    this.editForm = false;
  }

  editCredential(cred: CredentialClass, i: number) {
    if (i != -1)
      this.currentIndex = i;

    this.currentCred = cred;
    this.setCurrentCred(this.currentCred)
    this.editForm = true;
    this.viewOnly = false;
    this.viewAll = false;
  }

  closeView() {
    this.editForm = false;
    this.viewOnly = false;
    this.viewAll = true;
  }

  deleteCredential(i: number) {
    this.credentialData.splice(i, 1);
    this.closeView();
  }





  saveAttachment() {

    if (!this.newAttachment)
      return;

    let attachment: Attachment = null;
    this.hasAttachment = false;

    if (this.getAttachments().length > 0) {
      attachment = this.getAttachments()[0];
      this.hasAttachment = true;
      this.attachments = this.credentialForm.get('attachments') as FormArray;

      

      this.documentService
        .postDocument(this.attachments.controls[0].get("file").value,
          this.currentCred.referenceId, this.currentCred.type, this.attachments.controls[0].get("caption").value, false)
        .subscribe(doc => {
          console.log(doc);
        }, error => {
          console.log(error);
        });

    }

    this.currentCred.attachment = attachment;
    this.credentialData[this.currentIndex] = this.currentCred;

    this.closeView();

  }

  initializeCredViewAll(cred)
  {
      let creds:CredentialClass = new CredentialClass();
      this.credentialData = creds.getList(JSON.stringify(cred));
      this.length = this.credentialData.length;
      this.credentialDataChunk = 
      this.credentialData
      .slice(0, this.pageSize);
  }




}
