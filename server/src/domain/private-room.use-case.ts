import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as model from 'src/infrastructure';

@Injectable()
export class PrivateRoomUseCase {
  constructor(
    @InjectRepository(model.PrivateRoom)
    private readonly privateRoomUseCase: Repository<model.PrivateRoom>,
  ) {}

  public async getMessages(id: string) {
    const room = await this.privateRoomUseCase.findOne({
      where: {
        id,
      },
      relations: ['messages'],
    });

    if (room) {
      // return room;
    }
  }
}
