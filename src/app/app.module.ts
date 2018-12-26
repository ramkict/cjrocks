import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationSession } from './app.session';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMasterModule } from './admin-master/admin-master.module';
import { WeightComponent } from './weight/weight.component';
import { HttpModule } from '../../node_modules/@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    WeightComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule, AdminMasterModule, HttpModule
  ],
  providers: [ApplicationSession],
  bootstrap: [AppComponent]
})
export class AppModule { }
