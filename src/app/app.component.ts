import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
  ],
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    App.addListener('appUrlOpen', (data: { url: string }) => {
      console.log('App opened with URL:', data.url);
      
      if (data.url.includes('/callback')) {
        console.log('Handling redirect callback');
        this.auth.handleRedirectCallback(data.url).subscribe({
          next: () => {
            console.log('Redirect callback handled successfully');
            this.router.navigate(['/approval']);
          },
          error: (err) => {
            console.error('Auth redirect error:', err);
            this.router.navigate(['/']);
          }
        });
      }
    });
  }
}