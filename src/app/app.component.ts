import { Component } from '@angular/core';
import { Environment } from '../environments/environment-variables';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-auth0';
  clientId = Environment.MYAPP_clientId;
  auth0Domain = Environment.MYAPP_auth0Domain;
}
