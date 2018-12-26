import { Component } from '@angular/core';
import { ApplicationSession } from './app.session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yedai';
  constructor(public session: ApplicationSession){
    
  }
}
