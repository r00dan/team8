import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { RoomUseCase } from 'src/domain/room.use-case';
import { CreateRoomDto } from 'src/infrastructure/dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomUseCase: RoomUseCase) {}

  @Get(':id')
  public getRoom(@Param('id') id: string) {
    return this.roomUseCase.getRoom(id);
  }

  @Post()
  public createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomUseCase.createRoom(createRoomDto);
  }
}
