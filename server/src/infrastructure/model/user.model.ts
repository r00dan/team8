import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';

import { Room } from './room.model';

@Entity()
export class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @ManyToMany(() => Room)
  @JoinTable({ name: 'user_rooms' })
  public rooms!: Room[];
}
