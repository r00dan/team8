import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from 'src/infrastructure';

@ObjectType()
@Entity()
export class PrivateRoom {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  ownerId: string;

  @Field(() => [User])
  @ManyToOne(() => User, (user) => user.privateRooms)
  user: User;
}
