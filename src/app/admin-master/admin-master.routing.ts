import { GridViewComponent } from './grid-view/grid-view.component';
import { BayMasterComponent } from './bay-master/bay-master.component';
import { MaterialSubClassComponent } from './material-sub-class/material-sub-class.component';
import { MaterialClassComponent } from './material-class/material-class.component';
import { MaterialComponent } from './material/material.component';
import { WeightBridgeComponent } from './weight-bridge/weight-bridge.component';
import { DepartmentComponent } from './department/department.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { AdminMasterComponent } from './admin-master.component';
import { ClientAddressMasterComponent } from './client-address-master/client-address-master.component';
import { ClientMasterComponent } from './client-master/client-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { OrderMasterComponent } from './order-master/order-master.component';

const routes: Routes = [
    {
        path: '', component: AdminMasterComponent, children: [
            { path: 'department', component: DepartmentComponent },
            { path: 'location', component: LocationMasterComponent },
            { path: 'Weightbridge', component: WeightBridgeComponent },
            { path: 'material', component: MaterialComponent },
            { path: 'materialClass', component: MaterialClassComponent },
            { path: 'materialSubClass', component: MaterialSubClassComponent },
            { path: 'client', component: ClientMasterComponent },
            { path: 'address', component: ClientAddressMasterComponent },
            { path: 'baymaster', component: BayMasterComponent },
            { path: 'master' , component: GridViewComponent },
            { path: 'master/:m' , component: GridViewComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminMasterRouter { }
