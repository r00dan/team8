import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { User } from 'src/infrastructure';

@ObjectType()
@Entity()
export class PublicRoom {
  @Field()
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon?: string;

  @Field()
  @Column()
  ownerId: string;

  @Field(() => [User])
  @ManyToMany(() => User, { cascade: true })
  @JoinTable({ name: 'user_public_rooms' })
  users: User[];
}
