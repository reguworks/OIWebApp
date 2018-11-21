import { Component, OnInit } from '@angular/core';
import { admin } from '../../../models/admin-enum';

@Component({
  selector: 'app-base-admin',
  templateUrl: './base-admin.component.html',
  styleUrls: ['./base-admin.component.css']
})
export class BaseAdminComponent implements OnInit {
  private currentSelection: admin = admin.orders;
  constructor() { }

  ngOnInit() {
  }

  listGroupSelect(selection: admin){
    this.currentSelection = selection;
  }

}
