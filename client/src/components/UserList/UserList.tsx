import { ChangeEvent } from 'react';

import style from './UserList.module.scss';
import { IUser } from './UserListContainer';

export interface IUserListProps {
  query: string;
  users: IUser[];
  result: IUser[];
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function UserList({
  users,
}: IUserListProps) {
  return (
    <div
      className={style.root}
    >
      {users && users.map(({ id, username }) => (
        <div key={id}>
          <h3 title={id}>{username}</h3>
        </div>
      ))}
    </div>
  );
}