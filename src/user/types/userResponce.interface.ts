import { UserType } from './user.types';

export interface UserResponceInterface {
  user: UserType & { token: string };
}
