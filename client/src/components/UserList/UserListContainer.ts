import { userApi } from 'api';
import { createElement, useState, useEffect, ChangeEvent } from 'react';

import { UserList } from './UserList';

export interface IUser {
  id: string;
  username: string;
}

export function UserListContainer() {
  const [query, setQuery] = useState<string>('');
  const [result, setSearchResult] = useState<IUser[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    userApi.getUserCompanions('be4Vnuw7sMFDOptHnUDD8')
      .then((data) => data.forEach((user: any) => updateUsers(user.id, user.username)))
  }, []);

  const updateUsers = (id: string, username: string) => setUsers((prev) => ([...prev, { id, username }]));

  const handleSearchChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  return createElement(UserList, {
    query,
    users,
    result,
    handleSearchChange,
  });
}
