import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { LoginSessionGaurd, LazyGaurd } from './auth.gaurd';
import { UnauthorizedComponent } from './utils/unauthorized/unauthorized.component';
import { ErrorComponent } from './utils/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    WeightComponent,
    UnauthorizedComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, FormsModule,
    AppRoutingModule, AdminMasterModule, HttpClientModule
  ],
  providers: [ApplicationSession, LoginSessionGaurd, LazyGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
