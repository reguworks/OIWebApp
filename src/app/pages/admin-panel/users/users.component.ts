import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { UsersService } from '../../../services/users/users.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  new: boolean = false;
  alertShow: boolean = false;
  user: User = new User();
  users: any;  
  erroMessage: string;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data[0] ;
    }, err => this.showError(err),);
  }

  public createUser(user: User) {
    this.alertShow = false;
    this.userService.insertUser(user).subscribe((data: User) => {
      this.new = false;
      this.getUsers();
    }, err => this.showError(err),);
  }

  public editUser(user: User) {
    this.alertShow = false;
    this.userService.updateUser(user).subscribe((data: User) => { 
      this.getUsers()
    }, err => {
      this.showError(err) 
      this.getUsers()}
    ,
    );
    
  }

  public deleteUser(user: User) {
    this.alertShow = false;
    this.userService.deleteUser(user.id).subscribe((data: User) => {
      this.getUsers() 
      }, err => this.showError(err),);
      
  }

  public newClick(isNew: boolean) {
    this.alertShow = false;
    this.user = new User();
    this.new = isNew;
  }

  private showError(err: any): void {
    this.alertShow = true;
    this.erroMessage = err.error.message.substring(err.error.message.indexOf(':') + 2, err.error.message.length);

  }
}