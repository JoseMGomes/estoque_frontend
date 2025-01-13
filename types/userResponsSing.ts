export interface User {
    id?: number;
    name: string;
    email: string;
  }
  
export interface TokenResponse {
    user: User;
    token: string;
  }