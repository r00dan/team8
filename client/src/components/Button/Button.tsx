import classNames from 'classnames';

import style from './Button.module.scss';

export interface IButtonProps {
  value: string;
  theme?: ButtonThemes;
  onClick: () => void;
}

export enum ButtonThemes {
  // @ts-ignore
  PRIMARY = style.primary,
  // @ts-ignore
  SECONDARY = style.secondary,
  // @ts-ignore
  GRADIENT = style.gradient,
  // @ts-ignore
  TRANSPARENT = style.transparent,
}

export function Button({
  value,
  theme = ButtonThemes.PRIMARY,
  onClick,
}: IButtonProps) {
  return (
    <div
      className={style.root}
    >
      <button
        className={classNames([
          style.button,
          theme,
        ])}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}