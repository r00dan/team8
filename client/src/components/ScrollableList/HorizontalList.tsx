import { ReactNode, RefObject, MouseEvent } from 'react';
import { Item } from './components/Item/Item';

import style from './ScrollableList.module.scss';

export interface IHorizontalListProps {
  listRef: RefObject<HTMLDivElement>;
  children: ReactNode[];
  onMouseDown: (event: MouseEvent) => void;
  onMouseUp: () => void;
  onMouseMove: (event: MouseEvent) => void;
}

export function HorizontalList({
  listRef,
  children,
  onMouseDown,
  onMouseMove,
  onMouseUp,
}: IHorizontalListProps) {
  return (
    <div
      ref={listRef}
      className={style.root}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
}