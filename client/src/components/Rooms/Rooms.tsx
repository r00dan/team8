import { IRoom } from './RoomsContainer';

import style from './Rooms.module.scss';
import { ScrollableList } from 'components';

export interface IRoomsProps {
  rooms: IRoom[];
  handleItemClick: (id: string) => void;
}

export function Rooms({
  rooms,
  handleItemClick,
}: IRoomsProps) {
  return (
    <div
      className={style.root}
    >
      <ScrollableList>
          <ScrollableList.Item
            tooltip='Add new chat'
            value='+'
            showText={false}
          />
        {rooms.map(({ id, name, value }) => (
          <ScrollableList.Item
            key={id}
            value={value}
            tooltip={name}
            onClick={() => handleItemClick(id)}
          />
        ))}
      </ScrollableList>
    </div>
  );
}