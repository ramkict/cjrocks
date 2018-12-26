import { NgModule } from '../../../node_modules/@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { AdminMasterComponent } from './admin-master.component';
import { ClientAddressMasterComponent } from './client-address-master/client-address-master.component';
import { ClientMasterComponent } from './client-master/client-master.component';
import { LocationMasterComponent } from './location-master/location-master.component';
import { OrderMasterComponent } from './order-master/order-master.component';

const routes: Routes = [
    {
        path: "", component: AdminMasterComponent, children: [
            { path: "address", component: ClientAddressMasterComponent },
            { path: "client", component: ClientMasterComponent },
            { path: "location", component: LocationMasterComponent },
            { path: "order", component: OrderMasterComponent },

        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminMasterRouter { }
