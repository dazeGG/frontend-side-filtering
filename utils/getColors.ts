import type { IUser } from '~/typing/IUser';

export default (users: IUser[]): Set<string> => {
  return new Set(users.map((user: IUser) => user.color));
};
