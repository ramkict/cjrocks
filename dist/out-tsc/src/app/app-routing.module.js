import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeightComponent } from './weight/weight.component';
import { LoginSessionGaurd, LazyGaurd } from './auth.gaurd';
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [LoginSessionGaurd] },
    { path: 'weight', component: WeightComponent, canActivate: [LoginSessionGaurd] },
    { path: 'admin', loadChildren: './admin-master/admin-master.module#AdminMasterModule', canLoad: [LazyGaurd] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map