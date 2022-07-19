import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './presentation/user.controller';
import { RoomController } from './presentation/room.controller';
import { UserUseCase } from './domain/user.use-case';
import { RoomUseCase } from './domain/room.use-case';

import * as model from './infrastructure/model';

const entities = [model.User, model.Room, model.Message];

const controllers = [UserController, RoomController];

const domains = [UserUseCase, RoomUseCase];

const providers = [...entities, ...controllers, ...domains];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database',
      synchronize: true,
      entities,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  controllers,
  providers,
})
export class AppModule {}
