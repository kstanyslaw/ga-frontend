import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import 'rxjs';
import { map } from 'rxjs/operators';

import { Grant } from '../grant.model';
import { VARIABLES } from '../../../var';

@Injectable()
export class GrantsSearchService {

  grants: Grant[] = [];

  private variables: any = VARIABLES;

  constructor(private httpClient: HttpClient) {}

  addGrant(grant: Grant) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Grant>((this.variables.api + 'grant'), grant, httpOptions)
      .pipe(
        map((response) => {
          this.grants.push(response);
        })
      );
      // .catch((error) => Observable.throw(error.json()));
  }

  getGrant(filters?) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams({fromObject: filters})
    };
    return this.httpClient.get<Grant[]>((this.variables.api + 'grant'), httpOptions)
      .pipe(
        map((grants) => this.grants = grants)
      );
      // .catch((error) => Observable.throw(error.json()));
  }

  deleteGrant(grantId: string) {
    // this.grants.splice         NEED TO ADD
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : '';
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json' }),
      params: new HttpParams({ fromObject: {
        // grantId: grantId,
        token: token
      }})
    };
    return this.httpClient.delete((this.variables.api + 'grant/' + grantId), httpOptions);
      // .catch((error) => Observable.throw(error.json()));
  }
}
