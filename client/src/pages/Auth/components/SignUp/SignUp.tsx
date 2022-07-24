import { ChangeEvent } from 'react';

import { Button, ButtonThemes, Input, Select, SelectOption } from 'components';
import { CreateUserMutationData } from 'types';

import style from './SignUp.module.scss';

export interface ISignUpProps {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  color: string;
  icon: string;
  createdUser?: CreateUserMutationData | null;
  createUserLoading: boolean;
  options: SelectOption<string>[];
  handleFirstNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleIconChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleSignUpClick: () => void;
}

export function SignUp({
  firstName,
  lastName,
  username,
  password,
  color,
  icon,
  createdUser,
  createUserLoading,
  options,
  handleFirstNameChange,
  handleLastNameChange,
  handleUsernameChange,
  handlePasswordChange,
  handleColorChange,
  handleIconChange,
  handleSignUpClick,
}: ISignUpProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.inputGroup}>
        <div className={style.input}>
          <Input
            id='signup-lastName'
            value={lastName}
            label='Last Name'
            onChange={handleLastNameChange}
          />
        </div>
        <div className={style.input}>
          <Input
            id='signup-firstName'
            value={firstName}
            label='First Name'
            onChange={handleFirstNameChange}
          />
        </div>
        <div className={style.input}>
          <Input
            id='signup-username'
            value={username}
            label='Username'
            onChange={handleUsernameChange}
          />
        </div>
        <div className={style.input}>
          <Input
            id='signup-password'
            value={password}
            label='Password'
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        <div className={style.inputGroupHorizontal}>
          <Select
            id='sign-up-icon'
            value={icon}
            label='Icon'
            options={options}
            onChange={handleIconChange}
          />
          <Input
            id='signup-color'
            value={color}
            label='Color'
            type="color"
            onChange={handleColorChange}
          />
        </div>
        <div className={style.input}>
          <Button
            value={createUserLoading ? 'Loading...' : 'Sign Up'}
            theme={ButtonThemes.PRIMARY}
            onClick={handleSignUpClick}
          />
        </div>
        {createdUser && (
          <div style={{ color: createdUser.createUser.color! }}>User {createdUser.createUser.username} created with ID: {createdUser.createUser.id}</div>
        )}
      </div>
    </div>
  );
}