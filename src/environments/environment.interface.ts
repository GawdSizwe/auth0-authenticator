export interface Auth0Config {
    domain: string;
    clientId: string;
    redirectUri: string;
  }
  
  export interface Environment {
    production: boolean;
    auth0: Auth0Config;
  }