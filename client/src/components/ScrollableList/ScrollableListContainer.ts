import { createElement, useState, ReactNode, useRef, MouseEvent } from 'react';

import { Item } from './components/Item/Item';
import { HorizontalList } from './HorizontalList';

enum ListTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

interface IScrollableListContainerProps {
  children: ReactNode[];
  type?: ListTypes;
}

function Container({
  children,
  type = ListTypes.HORIZONTAL,
}: IScrollableListContainerProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setScrolling] = useState<boolean>(false);
  const [clientXState, setClientXState] = useState<number>(0);

  const onMouseDown = ({ clientX }: MouseEvent) => {
    setScrolling(true);
    setClientXState(clientX);
  }

  const onMouseUp = () => {
    setScrolling(false);
  }

  const onMouseMove = ({ clientX }: MouseEvent) => {
    if (isScrolling && listRef.current) {
      setClientXState(clientX);
      listRef.current.scrollLeft = clientXState;
    }
  }

  return type === ListTypes.HORIZONTAL ?
    createElement(HorizontalList, {
      children,
      listRef,
      onMouseDown,
      onMouseUp,
      onMouseMove,
    })
    :
    createElement(HorizontalList, {
      children,
      listRef,
      onMouseDown,
      onMouseUp,
      onMouseMove,
    });
}

export const ScrollableListContainer = Object.assign(Container, {
  Item,
})
