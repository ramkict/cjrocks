import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminMasterComponent } from './admin-master/admin-master.component';
import { WeightComponent } from './weight/weight.component';
import { LoginSessionGaurd, LazyGaurd } from './auth.gaurd';

const routes: Routes = [
  { path: "", redirectTo: '/login', pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [LoginSessionGaurd] },
  { path: "weight", component: WeightComponent, canActivate: [LoginSessionGaurd] },
  { path: "master", loadChildren: "./admin-master/admin-master.module#AdminMasterModule", canLoad: [LazyGaurd] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
