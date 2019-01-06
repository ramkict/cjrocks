import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMasterComponent } from './admin-master.component';
import { AdminMasterRouter } from './admin-master.routing';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdminService } from './admin.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MasterHomeComponent } from './master-home/master-home.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [AdminMasterComponent, SidebarComponent, GridViewComponent, MasterHomeComponent],
  imports: [
    CommonModule, AdminMasterRouter, NgxDatatableModule, ReactiveFormsModule, NgSelectModule, FormsModule, OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [AdminService]
})
export class AdminMasterModule { }
