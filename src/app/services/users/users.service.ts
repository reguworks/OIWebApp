import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';
import url from '../../../../settings/db-connection';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  public getUsers() {
    return this.http.get(`${url}/users`);
  }

  public insertUser(user: User) {
    return this.http.post(`${url}/users`, user);
  }

  // getUserById(id: number) {
  //   return this.http.get<User>(`${this.url}/contact` + '/' + id);
  // }

  public updateUser(user: User) {
    return this.http.put(`${url}/users`, user);
  }

  public deleteUser(id: number) {

    var obj = this.http.delete(`${url}/users/` + id);

    return obj;
  }
}
