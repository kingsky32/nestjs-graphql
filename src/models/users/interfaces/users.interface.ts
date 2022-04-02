import { Role } from '#common/enums/role.enum';

export interface IUser {
  id: string;
  role: Role[];
  username: string;
  password: string;
}
