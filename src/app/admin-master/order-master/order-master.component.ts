import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    //this.adminService.getRequest("");
  }

}
