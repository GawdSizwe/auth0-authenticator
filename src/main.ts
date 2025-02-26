import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { LoginPage } from './app/login/login.page';
import { ApprovalPage } from './app/approval/approval.page';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'approval', component: ApprovalPage },
  { path: 'login', component: LoginPage }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideAuth0({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: environment.auth0.redirectUri
      }
    }),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));