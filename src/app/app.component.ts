import { Component } from '@angular/core';
import { ApplicationSession } from './app.session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yedai';
  apiCall: boolean;
  constructor(public session: ApplicationSession) {

  }
}
