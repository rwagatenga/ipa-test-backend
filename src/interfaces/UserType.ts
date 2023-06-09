import { UserRoles } from '../enums/UserRoles';

export interface UserType {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  role: typeof UserRoles;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
