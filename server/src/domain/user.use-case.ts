import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import * as model from 'src/infrastructure';
import { CreateUserInput } from 'src/presentation/input';

@Injectable()
export class UserUseCase {
  constructor(
    @InjectRepository(model.User)
    private readonly userRepository: Repository<model.User>,
  ) {}

  public async getUser(id: string) {
    const user = await this.userRepository.findOne({
      select: {},
      where: {
        id,
      },
    });

    if (user) {
      return user;
    } else {
      throw new NotFoundException(id);
    }
  }

  public async getUsers() {
    return this.userRepository.find();
  }

  public async getUserPublicRooms(userId: string) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['publicRooms'],
    });

    return user.publicRooms;
  }

  public async getUserCompanions(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['privateRooms'],
    });

    return user.privateRooms;
  }

  public async createUser(createUserInput: CreateUserInput) {
    const candidate = await this.userRepository.findOne({
      where: {
        username: createUserInput.username,
      },
    });

    if (!candidate) {
      const { password, ...input } = createUserInput;
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);
      const user = await this.userRepository.create({
        ...input,
        password: hash,
      });
      await this.userRepository.save(user);
      return user;
    }
  }
}
