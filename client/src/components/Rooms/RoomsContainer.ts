import { userApi } from 'api';
import { createElement, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Rooms } from './Rooms';


enum RoomTypes {
  PRIVATE = 'private',
  PUBLIC = 'public',
} 

export interface IRoom {
  id: string;
  name: string;
  value: string;
}

export function RoomsContainer() {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const updateRooms = (room: IRoom) => {
    setRooms((prev) => ([...prev, room]));
  }

  const handleItemClick = (id: string) => {
    navigate(`/chat/${id}`);
  }

  useEffect(() => {
    userApi.getUserRooms('be4Vnuw7sMFDOptHnUDD8/room')
      .then((data) => {
        data.forEach(({ id, type, name }: any) => {
          if (type === RoomTypes.PUBLIC) {
            updateRooms({
              id,
              name,
              value: name[0].toUpperCase(),
            });
          }
        })
      });
  }, []);
  return createElement(Rooms, {
    rooms,
    handleItemClick,
  });
}
