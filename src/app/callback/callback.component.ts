import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `
    <ion-content>
      <div class="loading-container">
        <ion-spinner name="crescent"></ion-spinner>
        <p>Authenticating...</p>
      </div>
    </ion-content>
  `
})
export class CallbackComponent {
  constructor(private auth: AuthService, private router: Router) {
    this.auth.handleRedirectCallback().subscribe({
      next: () => this.router.navigate(['/approval']),
      error: (err) => {
        console.error('Authentication error:', err);
        this.router.navigate(['/']);
      }
    });
  }
}