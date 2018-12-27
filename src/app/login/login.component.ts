import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationSession } from '../app.session';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public router: Router, public session: ApplicationSession) { }

  ngOnInit() {
  }

  login() {
    this.session.isLogged = true;
    this.router.navigate(['home']);
  }

}
