import { Role } from '#common/enums/role.enum';

export interface IUser {
  id: string;
  roles: Role[];
  username: string;
  password: string;
}
