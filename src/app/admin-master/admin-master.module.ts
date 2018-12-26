import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMasterComponent } from './admin-master.component';
import { AdminMasterRouter } from './admin-master.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { OrderMasterComponent } from './order-master/order-master.component';
import { ClientMasterComponent } from './client-master/client-master.component';
import { ClientAddressMasterComponent } from './client-address-master/client-address-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdminService } from './admin.service';
import { ReactiveFormsModule, FormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [AdminMasterComponent, SidebarComponent, GridViewComponent,
    OrderMasterComponent, ClientMasterComponent, ClientAddressMasterComponent, LocationMasterComponent],
  imports: [
    CommonModule, AdminMasterRouter, NgxDatatableModule, ReactiveFormsModule, FormsModule
  ],
  providers: [AdminService]
})
export class AdminMasterModule { }
