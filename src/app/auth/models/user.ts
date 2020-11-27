import { Role } from './role';
export interface User {
  id: number;
  userName: string;
  role: Role;
  email?: string;
}
