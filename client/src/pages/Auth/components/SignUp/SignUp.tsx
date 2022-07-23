import classnames from 'classnames';
import { Button, ButtonThemes, Input } from 'components';
import { ChangeEvent } from 'react';

import style from './SignUp.module.scss';

export interface ISignUpProps {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  handleFirstNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSignUpClick: () => void;
}

export function SignUp({
  firstName,
  lastName,
  username,
  password,
  handleFirstNameChange,
  handleLastNameChange,
  handleUsernameChange,
  handlePasswordChange,
  handleSignUpClick,
}: ISignUpProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.inputGroup}>
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
            value={lastName}
            label='Last Name'
            onChange={handleLastNameChange}
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
        <div className={style.input}>
          <Button
            value='Sign Up'
            theme={ButtonThemes.GRADIENT}
            onClick={handleSignUpClick}
          />
        </div>
      </div>
    </div>
  );
}