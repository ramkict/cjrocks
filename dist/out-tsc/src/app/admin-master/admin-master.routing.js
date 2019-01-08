import * as tslib_1 from "tslib";
import { MasterHomeComponent } from './master-home/master-home.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { RouterModule } from '../../../node_modules/@angular/router';
import { AdminMasterComponent } from './admin-master.component';
var routes = [
    {
        path: '', component: AdminMasterComponent, children: [
            { path: '', component: MasterHomeComponent },
            { path: 'master', component: GridViewComponent },
            { path: 'master/:m', component: GridViewComponent }
        ]
    },
];
var AdminMasterRouter = /** @class */ (function () {
    function AdminMasterRouter() {
    }
    AdminMasterRouter = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], AdminMasterRouter);
    return AdminMasterRouter;
}());
export { AdminMasterRouter };
//# sourceMappingURL=admin-master.routing.js.map