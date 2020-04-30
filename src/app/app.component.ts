import { Component } from '@angular/core';
import { Environment } from '../environments/environment-variables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-auth0';
  clientId = Environment.clientId;
  auth0Domain = Environment.auth0Domain;
  DONT_EXIST = Environment.DONT_EXIST;
  MYAPP_DEFAULT_SETTING = Environment.MYAPP_DEFAULT_SETTING;
}
