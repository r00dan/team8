import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

import style from './Input.module.scss';

export interface IInputProps {
  id: string;
  value: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  value,
  label,
  type = 'text',
  placeholder,
  onChange,
}: IInputProps) {
  return (
    <div
      className={style.root}
    >
      {label && (
        <label
          htmlFor={id}
          className={style.label}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={style.input}
        value={value}
        type={type}
        placeholder={placeholder ?? ''}
        onChange={onChange}
      />
    </div>
  );
}