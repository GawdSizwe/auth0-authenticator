// src/auth.config.ts
export const authConfig = {
  domain: 'dev-r7azta07bz0wuy4c.us.auth0.com', // Replace with your Auth0 domain
  clientId: '7ehjViyNDFEklNGvpNm7kHZezszqz5so', // Replace with your Auth0 client ID
  authorizationParams: {
    redirect_uri: 'http://localhost:8100/callback' // Must match exactly
  }
};