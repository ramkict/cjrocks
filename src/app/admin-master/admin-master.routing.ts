import { MasterHomeComponent } from './master-home/master-home.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { NgModule } from '../../../node_modules/@angular/core';
import { RouterModule, Routes } from '../../../node_modules/@angular/router';
import { AdminMasterComponent } from './admin-master.component';


const routes: Routes = [
    {
        path: '', component: AdminMasterComponent, children: [
            { path: '', component: MasterHomeComponent },
            { path: 'master', component: GridViewComponent },
            { path: 'master/:m', component: GridViewComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminMasterRouter { }
