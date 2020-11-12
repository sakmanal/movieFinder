import { User } from './user';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  user: User;
}

export interface AvailableUserResponse {
  isAvailable: boolean;
  username: string;
}
