import classnames from 'classnames';

import style from './Item.module.scss';

export interface IItemProps {}

export function Item({}: IItemProps) {
  return (
    <div
      className={style.root}
    >
      Item
    </div>
  );
}