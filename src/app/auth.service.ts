// src/app/auth.service.ts
import { Injectable, Inject } from '@angular/core';
import { AUTH0_CONFIG, Auth0Config } from '../auth0.config'; // Adjust the path if necessary
import { Auth0Client } from '@auth0/auth0-spa-js'; // Import Auth0Client

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth0Client: Auth0Client; // Define the type for auth0Client

  constructor(@Inject(AUTH0_CONFIG) private config: Auth0Config) {
    // Initialize Auth0 client with config
    this.auth0Client = new Auth0Client(this.config);
  }
}

export interface LogoutOptions {
  returnTo?: string;
  client_id?: string;
  federated?: boolean;
  localOnly?: boolean;
}