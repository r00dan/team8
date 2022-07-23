import { createElement, useState, ChangeEvent } from 'react';

import { SignUp } from './SignUp'

export function SignUpContainer() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFirstNameChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setFirstName(value);
  };

  const handleLastNameChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setLastName(value);
  };

  const handleUsernameChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setUsername(value);
  };

  const handlePasswordChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setPassword(value);
  };

  const handleSignUpClick = () => {

  }

  return createElement(SignUp, {
    firstName,
    lastName,
    username,
    password,
    handleFirstNameChange,
    handleLastNameChange,
    handleUsernameChange,
    handlePasswordChange,
    handleSignUpClick,
  });
}
