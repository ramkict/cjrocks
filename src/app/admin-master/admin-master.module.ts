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
import { DepartmentComponent } from './department/department.component';
import { MaterialComponent } from './material/material.component';
import { MaterialClassComponent } from './material-class/material-class.component';
import { MaterialSubClassComponent } from './material-sub-class/material-sub-class.component';
import { BayMasterComponent } from './bay-master/bay-master.component';
import { TaxComponent } from './tax/tax.component';
import { TaxUnitComponent } from './tax-unit/tax-unit.component';
import { TaxMapperComponent } from './tax-mapper/tax-mapper.component';
import { BidAllotmentComponent } from './bid-allotment/bid-allotment.component';
import { MstcComponent } from './mstc/mstc.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesOrderTaxComponent } from './sales-order-tax/sales-order-tax.component';
import { FolioComponent } from './folio/folio.component';
import { WeightBridgeComponent } from './weight-bridge/weight-bridge.component';

@NgModule({
  declarations: [AdminMasterComponent, SidebarComponent, GridViewComponent,
    OrderMasterComponent, ClientMasterComponent, ClientAddressMasterComponent, LocationMasterComponent, DepartmentComponent, MaterialComponent, MaterialClassComponent, MaterialSubClassComponent, BayMasterComponent, TaxComponent, TaxUnitComponent, TaxMapperComponent, BidAllotmentComponent, MstcComponent, SalesOrderComponent, SalesOrderTaxComponent, FolioComponent, WeightBridgeComponent],
  imports: [
    CommonModule, AdminMasterRouter, NgxDatatableModule, ReactiveFormsModule, FormsModule
  ],
  providers: [AdminService]
})
export class AdminMasterModule { }
