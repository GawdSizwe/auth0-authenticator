import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.page.html',
  styleUrls: ['./approval.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ApprovalPage implements OnInit {
  deviceId: string = '';
  authError: string = '';
  isLoading: boolean = true;

  constructor(private auth: AuthService, private router: Router) {}

  async ngOnInit() {
    this.isLoading = true;
    const url = new URL(window.location.href);
    if (url.searchParams.has('code') && url.searchParams.has('state')) {
      this.auth.handleRedirectCallback().subscribe({
        next: (result) => {
          console.log('Auth callback success', result);
          this.getDeviceId();
          window.location.href = 'https://www.e4.co.za';
        },
        error: (error) => {
          console.error('Auth callback error:', error);
          this.authError = 'Authentication failed. Please try again.';
          this.isLoading = false;
        }
      });
    } else {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.getDeviceId();
          this.isLoading = false; // Set isLoading to false to show the content
        } else {
          this.isLoading = false;
        }
      });
    }
  }

  async getDeviceId() {
    try {
      const info = await Device.getId();
      this.deviceId = info.identifier || 'unknown';
      console.log('Device ID:', this.deviceId);
    } catch (error) {
      console.error('Error getting device ID:', error);
      this.deviceId = 'unknown';
    }
  }

  approve() {
    console.log('Login Approved');
    const encodedDeviceId = encodeURIComponent(this.deviceId);
    window.location.href = `https://e4qa.e4.co.za/Login/Auth?DeviceID=${encodedDeviceId}`;
  }

  reject() {
    console.log('Login Rejected');
    this.router.navigate(['/']);
  }

  login() {
    console.log('Login Attempted');
    window.location.href = 'https://www.e4.co.za';
  }

  logout() {
    console.log('Logout Attempted');
    this.router.navigate(['/logout']);
  }
}