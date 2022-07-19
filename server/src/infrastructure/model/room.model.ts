import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.model';

export enum RoomTypes {
  PRIVATE = 'private',
  PUBLIC = 'public',
}

@Entity()
export class Room {
  @PrimaryColumn()
  public id: string;

  @Column()
  public type: RoomTypes;

  @Column()
  public name: string;

  @ManyToMany(() => User, { cascade: true })
  @JoinTable({ name: 'user_rooms' })
  public users!: User[];
}
