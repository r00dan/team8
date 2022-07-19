import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserUseCase } from 'src/domain/user.use-case';
import { CreateUserDto } from 'src/infrastructure/dto';

@Controller('user')
export class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  @Get()
  public getUser(@Body('userId') userId: string) {
    return this.userUseCase.getUser(userId);
  }

  @Get(':id/room')
  public getUserRooms(@Param('id') id: string) {
    return this.userUseCase.getUserRooms(id);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    return this.userUseCase.createUser(createUserDto);
  }
}
