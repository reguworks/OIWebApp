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

  public editUser(user: User) {
  }

  public deleteUser(user: User) {
  }
}
