// src/app/login/login.page.ts
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class LoginPage {
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/approval' },
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  }
}