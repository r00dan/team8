import { RoomTypes } from '../model';

export class CreateRoomDto {
  public id!: string;

  public name!: string;

  public type!: RoomTypes;
}
