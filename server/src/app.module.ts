import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { UserUseCase } from 'src/domain';
import { UserResolver } from 'src/presentation';
import * as model from 'src/infrastructure';

const entities = [
  model.User,
  model.PrivateRoom,
  model.PublicRoom,
  model.Message,
];

const resolvers = [UserResolver];

const domains = [UserUseCase];

const providers = [...entities, ...resolvers, ...domains];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      synchronize: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers,
})
export class AppModule {}
