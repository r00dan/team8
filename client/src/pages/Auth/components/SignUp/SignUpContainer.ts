import { createElement, useState, ChangeEvent } from 'react';
import { nanoid } from 'nanoid';

import { SelectOption } from 'components';
import { useCreateUserMutation } from 'types';

import { SignUp } from './SignUp';

const options: SelectOption<string>[] = [
  {
    label: '😄',
    value: '😄',
  },
  {
    label: '😋',
    value: '😋',
  },
  {
    label: '😎',
    value: '😎',
  },
  {
    label: '😏',
    value: '😏',
  },
  {
    label: '😴',
    value: '😴',
  },
];

export function SignUpContainer() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [icon, setIcon] = useState<string>('');

  const [createUserMutation, { data: createdUser, loading: createUserLoading }] = useCreateUserMutation();

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

  const handleColorChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setColor(value);
  };

  const handleIconChange = ({ target: { value} }: ChangeEvent<HTMLSelectElement>) => {
    setIcon(value);
  };

  const handleSignUpClick = () => {
    createUserMutation({
      variables: {
        createUserInput: {
          id: nanoid(),
          firstName,
          lastName,
          username,
          password,
          color,
          icon,
        },
      },
    });
  }

  return createElement(SignUp, {
    firstName,
    lastName,
    username,
    password,
    color,
    options,
    icon,
    createUserLoading,
    createdUser,
    handleFirstNameChange,
    handleLastNameChange,
    handleUsernameChange,
    handlePasswordChange,
    handleColorChange,
    handleSignUpClick,
    handleIconChange,
  });
}
