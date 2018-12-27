import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Client } from './client.model';
import { address } from '../client-address-master/address.model';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.css']
})
export class ClientMasterComponent implements OnInit {

  clientData: Client[];
  client: Client;
  address: address;
  constructor(public adminService: AdminService) {
    this.clientData = [];
    this.address = new address('', '', '', '', '', '', '', 0, '', 0)
    this.client = new Client('', '', '', '', '', '', 0, '', 0, this.address);
  }

  ngOnInit() {
    this.adminService.getRequest('assets/data/client-master.json').subscribe(
      (data) => {
        console.log(data);
        if (data && data != '') {
          try {
            this.clientData = data;
          } catch (e) {

          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  edit(event, index) {
    console.log(event, index);
  }

  addClient() {

  }

}
