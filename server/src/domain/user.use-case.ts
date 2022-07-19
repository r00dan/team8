import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import * as model from 'src/infrastructure/model';
import { CreateUserDto } from 'src/infrastructure/dto';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(model.User)
    private readonly userRepository: Repository<model.User>,
  ) {}

  public async getUser(userId: string) {
    return await this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
  }

  public async getUsers() {
    return await this.userRepository.find();
  }

  public async getUserRooms(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['rooms'],
    });
    return user.rooms;
  }

  public async createUser(createUserDto: CreateUserDto) {
    const candidate = await this.userRepository.findOne({
      where: {
        username: createUserDto.username,
      },
    });

    if (!candidate) {
      const user = await this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
    }
  }
}
