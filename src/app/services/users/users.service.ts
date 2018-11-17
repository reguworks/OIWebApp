import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';
import url from '../../settings/db-connection';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${url}/users`);
  }

  insertUser(user: User) {
    return this.http.post(`${url}/users` , user);
  }

  // getUserById(id: number) {
  //   return this.http.get<User>(`${this.url}/contact` + '/' + id);
  // }

  updateContact(user: User) {
    return this.http.put(`${url}/users` + user._id, user);
  }

  deleteContact(id: string) {
     
    var obj = this.http.delete(`${url}/users` + id);

    return obj;
  }

}