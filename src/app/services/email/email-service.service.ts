import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from '../../models/message';
import url from '../../../../settings/db-connection';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http: HttpClient) { }

  public sendEmail(message: Message) {
    return this.http.post(`${url}/email`, message);
  }
}
