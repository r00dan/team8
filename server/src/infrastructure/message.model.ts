import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from './index';

@ObjectType()
@Entity()
export class Message {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  createTime: Date;

  @Field()
  @Column()
  updateTime: Date;

  @Field()
  @Column()
  data: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.id)
  author: User;

  // @Field(() => Room)
  // @ManyToOne(() => Room, (room) => room.id)
  // room: Room;
}
