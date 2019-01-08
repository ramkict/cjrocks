import * as tslib_1 from "tslib";
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
var AdminMasterModule = /** @class */ (function () {
    function AdminMasterModule() {
    }
    AdminMasterModule = tslib_1.__decorate([
        NgModule({
            declarations: [AdminMasterComponent, SidebarComponent, GridViewComponent, MasterHomeComponent],
            imports: [
                CommonModule, AdminMasterRouter, NgxDatatableModule, ReactiveFormsModule, NgSelectModule, FormsModule, OwlDateTimeModule,
                OwlNativeDateTimeModule,
            ],
            providers: [AdminService]
        })
    ], AdminMasterModule);
    return AdminMasterModule;
}());
export { AdminMasterModule };
//# sourceMappingURL=admin-master.module.js.map