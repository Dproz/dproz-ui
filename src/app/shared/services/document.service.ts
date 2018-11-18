import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SERVICING_DOMAIN } from '../constants/constants';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }


  postDocument(file, attachmentParentReferenceId, attachmentCategory, attachmentDescription, thumbnail) {
    const options = {
      params: new HttpParams()
        .set('parentReferenceId', attachmentParentReferenceId)
        .set('category', attachmentCategory)
        .set('description', attachmentDescription)
        .set('thumbnail', thumbnail)

    };
    const uploadData = new FormData();
    uploadData.append('attachment', file);
    console.log(uploadData);

    return this.http.post(`${SERVICING_DOMAIN}/api/dproz/documents`, uploadData, options);
  }

  getDocument(image, userReference) {
    return this.http.get<any>(`${SERVICING_DOMAIN}/api/dproz/documents/${userReference}`);
  }
}
