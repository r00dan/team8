import { createElement, useState, ChangeEvent } from 'react';
import { nanoid } from 'nanoid';
import { useMutation } from '@apollo/client';

import { SelectOption } from 'components';

import { SignUp } from './SignUp';
import { CREATE_USER } from 'gql';

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

  const [createUser, { data: createdUserData }] = useMutation(CREATE_USER);

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
    console.log({
      firstName,
      lastName,
      username,
      password,
      color,
      icon,
    });

    createUser({
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

    if (createdUserData) {
      console.log(`User ${createdUserData.username} created!`)
    }
  }

  return createElement(SignUp, {
    firstName,
    lastName,
    username,
    password,
    color,
    options,
    icon,
    handleFirstNameChange,
    handleLastNameChange,
    handleUsernameChange,
    handlePasswordChange,
    handleColorChange,
    handleSignUpClick,
    handleIconChange,
  });
}
