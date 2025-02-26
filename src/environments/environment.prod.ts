import { Environment } from './environment.interface';

export const environment: Environment = {
  production: true,
  auth0: {
    domain: 'dev-r7azta07bz0wuy4c.us.auth0.com', // Replace with your Auth0 domain
    clientId: '7ehjViyNDFEklNGvpNm7kHZezszqz5so', // Replace with your Auth0 client ID
    redirectUri: 'http://localhost:8100/login', // Adjust as necessary
  },
};
