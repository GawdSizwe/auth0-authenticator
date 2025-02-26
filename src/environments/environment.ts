import { Environment } from './environment.interface';
// src/environments/environment.ts
export const environment: Environment = {
  production: false,
  auth0: {
    domain: 'dev-r7azta07bz0wuy4c.us.auth0.com', // Replace with your Auth0 domain
    clientId: '7ehjViyNDFEklNGvpNm7kHZezszqz5so', // Replace with your Auth0 client ID
    redirectUri: 'http://localhost:8100/logout', // Redirect to the Logout component after login
  },
};