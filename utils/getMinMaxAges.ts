import type { IUser } from '~/typing/IUser';

export default (users: IUser[]): { min: number; max: number } =>
  users.reduce((ages: { min: number; max: number }, user: IUser) => {
    if (user.age < ages.min) { ages.min = user.age }
    if (user.age > ages.max) { ages.max = user.age }
    return ages;
  }, { min: 1000, max: -1 });
