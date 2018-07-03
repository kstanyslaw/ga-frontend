import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VARIABLES } from 'var';

@Injectable()
export class ProfileService {

  variables = VARIABLES;

  constructor(private http: HttpClient) { }

  addImage(image: File) {
    const postData = new FormData();
    postData.append('image', image);
    return this.http.post(this.variables.api + 'grant/file', postData);
  }

}
