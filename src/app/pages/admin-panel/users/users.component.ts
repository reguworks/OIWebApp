import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user';
import { UsersService } from '../../../services/users/users.service';
import { PagerService } from '../../../services/pager/pager.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public new: boolean = false;
  public alertShow: boolean = false;
  public user: User = new User();
  public users: any;
  public erroMessage: string;
  public visible: boolean = false;
  public pager: any = {};
  public pagedItems: any[];

  constructor(private userService: UsersService, private pagerService: PagerService) { }

  ngOnInit() {
    this.getUsers();

  }

  public setPage(page: number) {
    this.pager = this.pagerService.getPager(this.users.length, page);

    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  private getUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data[0];
      this.visible = true;
      this.setPage(this.pager.currentPage);
    }, err => this.showError(err));
  }

  public createUser(user: User) {
    this.alertShow = false;
    this.userService.insertUser(user).subscribe((data: User) => {
      this.new = false;
      this.getUsers();
    }, err => this.showError(err));
  }

  public editUser(user: User) {
    this.alertShow = false;
    this.userService.updateUser(user).subscribe((data: User) => {
      this.getUsers()
    }, err => {
      this.showError(err)
      this.getUsers()
    }
    ,
    );

  }

  public deleteUser(user: User) {
    this.alertShow = false;
    this.userService.deleteUser(user.id).subscribe((data: User) => {
      this.getUsers()
    }, err => this.showError(err));

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