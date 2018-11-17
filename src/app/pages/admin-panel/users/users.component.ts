import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = new User();
  users: User[];  

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  public createUser(user: User) {
    this.userService.insertUser(user).subscribe((data: User) => {
      this.getUsers();
    });
  }

  public editUser(user: User) {
    this.userService.updateUser(user).subscribe((data: User) => { 
      this.getUsers() 
    });
  }

  public deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe((data: User) => {
       this.getUsers() 
      });
  }
}