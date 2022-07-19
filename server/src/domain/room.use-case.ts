import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as model from 'src/infrastructure/model';
import { CreateRoomDto } from 'src/infrastructure/dto';

@Injectable()
export class RoomUseCase {
  constructor(
    @InjectRepository(model.Room)
    private readonly roomRepository: Repository<model.Room>,
  ) {}

  public async getRoom(id: string) {
    const room = await this.roomRepository.findOne({
      where: {
        id,
      },
    });

    const roomUsers = await this.getRoomUsers(id);

    if (room) {
      return {
        room,
        roomUsers,
      };
    }
  }

  public getRooms() {
    return this.roomRepository.find();
  }

  public async getRoomUsers(roomId: string) {
    const room = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['users'],
    });

    return room.users;
  }

  public async createRoom(createUserDto: CreateRoomDto) {
    const room = await this.roomRepository.create(createUserDto);
    await this.roomRepository.save(room);
  }
}
