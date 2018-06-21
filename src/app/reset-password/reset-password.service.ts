import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VARIABLES } from 'var';

@Injectable()
export class ResetPasswordService {

  private variables = VARIABLES;

  constructor(private httpClient: HttpClient) { }

  changePassword(newPassword: string, repeatPassword: string, token: string) {
    const body = {
      newPassword: newPassword,
      repeatPassword: repeatPassword,
      token: token
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.patch(this.variables.api + 'user/change-password', body, httpOptions);
  }
}
