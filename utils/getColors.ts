import type { IUser } from '~/typing/IUser';

export default (users: IUser[]): string[] => Array.from(new Set(users.map((user: IUser) => user.color)));
