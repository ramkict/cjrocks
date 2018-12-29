import { ADMIN_CONSTANTS } from './../admin.constant';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departmentList: any[];
  constructor(public adminService: AdminService) {
    this.departmentList = [];
  }

  ngOnInit() {
    this.adminService.getRequest(ADMIN_CONSTANTS.department.get).subscribe(
      (data) => {
        if (data && JSON.parse(data)) {
          this.departmentList = data;
        }
      }, (error) => {
        console.log(error);
      }
    );
  }

}
