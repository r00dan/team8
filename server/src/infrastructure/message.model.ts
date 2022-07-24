import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { User, PrivateRoom, PublicRoom } from './index';

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

  @Column({ nullable: true })
  publicRoomId?: string;

  @Column({ nullable: true })
  privateRoomId?: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.id)
  author: User;

  @Field(() => PrivateRoom)
  @ManyToOne(() => PrivateRoom, (room) => room.id)
  privateRoom: PrivateRoom;

  @Field(() => PublicRoom)
  @ManyToOne(() => PublicRoom, (room) => room.id)
  publicRoom: PublicRoom;
}
