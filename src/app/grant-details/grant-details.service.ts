import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VARIABLES } from 'var';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrantDetailsService {

  private variables = VARIABLES;

  constructor(private httpClient: HttpClient) { }

  getGrantDetails(id: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get((this.variables.api + 'grant/details/' + id), httpOptions)
    .pipe(
      map((response) => {
        const grant = response['obj'];
        return grant;
      })
    );
  }
}
