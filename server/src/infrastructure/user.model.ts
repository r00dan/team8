import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { PrivateRoom, PublicRoom } from './';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon?: string;

  @Field(() => [PrivateRoom])
  @OneToMany(() => PrivateRoom, (room) => room.user)
  privateRooms: PrivateRoom[];

  @Field(() => [PublicRoom])
  @ManyToMany(() => PublicRoom)
  @JoinTable({ name: 'user_public_rooms' })
  publicRooms: PublicRoom[];
}
