import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VARIABLES } from 'var';
import { User } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private variables: any = VARIABLES;

  constructor( private httpClient: HttpClient) { }

  singup(user: User, path: String) {
    const body: Object = user;
    body['path'] = path;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post((this.variables.api + 'user'), body, httpOptions);
  }

  confirmEmail(userId: String) {
    const body = { userId: userId };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post((this.variables.api + 'user/confirm-email'), body, httpOptions);
  }

  checkEmailFree(email: String) {
    const body = {email: email};
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post((this.variables.api + 'user/check-email'), body, httpOptions);
  }

  checkEmailValid(email: string) {
    // tslint:disable-next-line:max-line-length
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(email);
  }

  login(user: User) {
    const body: Object = user;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<{token: string, userId: string, userRole: string}>(this.variables.api + 'user/login', body, httpOptions);
  }

  logout() {
    localStorage.clear();
  }

  IsLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
