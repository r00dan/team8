import { ReactNode } from 'react';
import classNames from 'classnames';

import { Header, Rooms, UserList } from 'components';

import style from './PageLayout.module.scss';

export interface IPageLayoutProps {
  children: ReactNode;
  isAuth: boolean;
}

export function PageLayout({
  children,
  isAuth,
}: IPageLayoutProps) {
  return (
    <div
      className={style.root}
    >
      <Header />
      {!isAuth && (<Rooms />)}
      <div className={classNames([
        style.content,
        isAuth && style.authPage,
      ])}>
        {!isAuth && (<UserList />)}
        {children}
      </div>
    </div>
  );
}