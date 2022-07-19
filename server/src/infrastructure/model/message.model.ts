import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';

import { User, Room } from './index';

@Entity()
export class Message {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public createTime!: Date;

  @Column()
  public updateTime!: Date;

  @Column()
  public data!: string;

  @ManyToOne(() => User, (user) => user.id)
  public user!: User;

  @ManyToOne(() => Room, (room) => room.id)
  public room!: Room;
}
