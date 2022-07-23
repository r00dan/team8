import classnames from 'classnames';

import style from './Header.module.scss';

export interface IHeaderProps {}

export function Header({}: IHeaderProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.logo}>
        TEAM8
      </div>
    </div>
  );
}