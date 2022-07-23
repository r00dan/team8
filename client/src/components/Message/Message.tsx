import classnames from 'classnames';

import style from './Message.module.scss';

export interface IMessageProps {
  value: string;
  date: string;
  username: string;
}

export function Message({
  value,
  date,
  username,
}: IMessageProps) {
  return (
    <div
      className={style.root}
    >
      <div className={style.info}>
        <div className={style.username}>@{username}</div>
        <div className={style.date}>{date}</div>
      </div>
      <div className={style.message}>{value}</div>
    </div>
  );
}