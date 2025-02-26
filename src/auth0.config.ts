// src/auth0.config.ts
import { InjectionToken } from '@angular/core';

export interface Auth0Config {
  domain: string;
  clientId: string;
  authorizationParams: {
    redirect_uri: string;
  };
}

export const AUTH0_CONFIG = new InjectionToken<Auth0Config>('auth0.client');

export function provideAuth0Config(config: Auth0Config) {
  return { provide: AUTH0_CONFIG, useValue: config };
}