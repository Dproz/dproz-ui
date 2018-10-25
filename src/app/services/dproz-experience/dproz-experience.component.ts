import { Attachment, UrlClass } from './../../shared/domain/common_data';
import { ClientDetails, Consent, Project } from './../../shared/domain/experience';
import { ProjectsService } from './../../shared/services/projects.service';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { StandardLocation } from '../../shared/domain/common_data';
import { PageEvent } from '@angular/material';
import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';
import { startDateValidator, endDateValidator } from '../../shared/validators/professional-profile';



export interface FileReaderEventTarget extends EventTarget {
  result: string;
}

export interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}





export class MyFile {
  url: string;
  caption: string;
  file;
}




@Component({
  selector: 'dproz-experience',
  templateUrl: './dproz-experience.component.html',
  styleUrls: ['./dproz-experience.component.scss']
})
export class DprozExperienceComponent implements OnInit {

  experienceForm: FormGroup;
  hide = true;
  editForm: boolean = false;
  add: boolean = false;
  edit: boolean = false;
  index: number = 0;
  photos: FormArray;
  projects: Project[] = [];
  startDateValue: Date = new Date();





  public files = [];
  public urls: MyFile[] = [];




  removeImage(img) {

    this.photos = this.experienceForm.get('photos') as FormArray;

    this.photos.removeAt(img);

  }
  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  pageChange(event) {
    console.log(event);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  constructor(private fb: FormBuilder, private projectService: ProjectsService) {

    this.setNewForm();

  }

  setNewForm() {
    this.experienceForm = this.fb.group({
      'projectDetails': this.fb.group({
        'projectName': ['', Validators.required],
        'projectDescription': ['', Validators.required],
        'startDate': ['', Validators.compose([Validators.required, startDateValidator])],
        'endDate': ['', Validators.compose([Validators.required])],
      }),
      'clientDetails': this.fb.group({
        'customerNames': ['', Validators.compose([Validators.minLength(4), Validators.required])],
        'phoneNumber': [''],
        'emailAddress': ['', Validators.email],
        'allowContact': [''],
      }),
      photos: this.fb.array([this.createPhoto()])

    });



    //assign value to endDate everytime the startDate changes
    let date = this.experienceForm.get('projectDetails').get('startDate') as FormControl;
    date.valueChanges.pipe(debounce(() => timer(100))).subscribe(x => {
      let u = this.experienceForm.get('projectDetails').get('endDate') as FormControl;
      u.setValidators(endDateValidator(date.value));
      let old = u.value;
      u.setValue(old);
    });


  
    this.photos = this.experienceForm.get('photos') as FormArray;
    this.photos.removeAt(0);

  }

  createPhoto(file = null, url = null, caption = null): FormGroup {
    return this.fb.group({
      file: file,
      url: url,
      caption: caption
    });
  }

  addPhoto(file, url, caption): void {

    this.photos = this.experienceForm.get('photos') as FormArray;


    this.photos.push(this.createPhoto(file, url, caption));
  }

  onFileChanged(event) {

    console.log(event.target.files[0].name);

    if (event.target.files && event.target.files[0]) {

      this.files.push(event.target.files[0]);
      let file = event.target.files[0];
      var reader = new FileReader();
      let caption = event.target.files[0].name;
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        let url = event.target.result;

        this.addPhoto(file, url, caption)
      }
    }

  }

  addExperience() {

    this.setNewForm();

    this.editForm = true;
    this.edit = false;
    this.add = true;
  }

  //get attachments from the form to attachment data structure for submission
  getAttachments(): Attachment[] {

    let attachments: Attachment[] = [];

    this.photos = this.experienceForm.get('photos') as FormArray;

    for (let i = 0; i < this.photos.controls.length; i++) {

      let attachmentForm = this.photos.controls[i] as FormGroup;
      let file = attachmentForm.controls["file"].value;
      let url = attachmentForm.controls["url"].value;
      let caption = attachmentForm.controls["caption"].value;

      let attachment: Attachment = <Attachment>{
        referenceId: "",
        parentReferenceId: "",
        category: "PROJECT",
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

  //get project data from the form to project data structure for submission
  getCurrentProject(attachments: Attachment[]): Project {

    let client: ClientDetails = <ClientDetails>{

      fistName: this.experienceForm.get("clientDetails").get("customerNames").value,
      lastName: this.experienceForm.get("clientDetails").get("customerNames").value,
      phoneNumber: this.experienceForm.get("clientDetails").get("phoneNumber").value,
      emailAddress: this.experienceForm.get("clientDetails").get("emailAddress").value,
    };

    let project = new Project();

    project.projectName = this.experienceForm.get("projectDetails").get("projectName").value;
    project.projectDescription = this.experienceForm.get("projectDetails").get("projectDescription").value;
    project.projectLocation = <StandardLocation>{
      longitude: 0, latitude: 0, street: "", county: "", zip: "", city: "", region: "", country: ""
    };
    project.startDate = this.experienceForm.get("projectDetails").get("startDate").value;
    project.completedDate = this.experienceForm.get("projectDetails").get("endDate").value;
    project.client = client;
    project.consent = <Consent>{ text: "", acknowledged: true, signedOn: "" };
    project.offeredServices = [];
    project.services = [];
    project.attachments = [];
    project.attachments = attachments;

    return project;
  }

  //mostly used when editing, load data into the form
  setCurrentProject(project: Project) {

    this.setNewForm();

    let projetDetails = this.experienceForm.get("projectDetails") as FormGroup;

    projetDetails.get("projectName").setValue(project.projectName);
    projetDetails.get("projectDescription").setValue(project.projectDescription);
    projetDetails.get("startDate").setValue(project.startDate);
    projetDetails.get("endDate").setValue(project.completedDate);

    let clientDetails = this.experienceForm.get("clientDetails") as FormGroup;

    clientDetails.get("customerNames").setValue(project.client.fistName);
    clientDetails.get("phoneNumber").setValue(project.client.phoneNumber);
    clientDetails.get("emailAddress").setValue(project.client.emailAddress);


    for (let i = 0; i < project.attachments.length; i++) {
      let attachement = project.attachments[i];
      this.addPhoto(null, attachement.url.url, attachement.description);
    }
  }

  saveForm() {

    let attachments: Attachment[] = this.getAttachments();
    let project: Project = this.getCurrentProject(attachments);

    if (this.add)
      this.projects.push(project);
    else
      this.projects[this.index] = project;

    console.log(project.getPostingData());

    this
      .projectService
      .postProject(project.getPostingData())
      .subscribe(x => {
        ////
        console.log(x);
      });

    this.editForm = false;
    this.add = false;
    this.edit = false;
  }

  editExperience(project, index) {

    this.setCurrentProject(project);
    this.index = index;
    this.editForm = true;
    this.edit = true;
    this.add = false;
  }



  deleteExperience(index) {

    this.projects.splice(index, 1);
  }

  ngOnInit() {
  }


}



