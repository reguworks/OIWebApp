import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import url from '../../../../settings/db-connection'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(url + '/users/login', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  public logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}