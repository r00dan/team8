import { ChangeEvent } from 'react';

import style from './Select.module.scss';

export interface SelectOption<T = string | number> {
  label: T;
  value: string;
}

export interface ISelectProps {
  id: string;
  value: string;
  options: SelectOption[];
  label?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({
  id,
  value,
  options,
  label,
  onChange,
}: ISelectProps) {
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
      <div className={style.select}>
        <select
          id={id}
          className={style.defaultSelect}
          onChange={onChange}
        >
          <option
            className={style.option}
          >
            {value}
          </option>
          {options.map(({ label, value }) => (
            <option
              key={`${id}-${value}`}
              value={value}
              className={style.option}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}