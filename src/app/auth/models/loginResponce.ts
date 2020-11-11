import { User } from './user';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}


