// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// import * as model from 'src/infrastructure';
// import { plainToClass } from 'class-transformer';
// import { CreateRoomInput } from 'src/presentation/input';

// @Injectable()
// export class RoomUseCase {
//   constructor(
//     @InjectRepository(model.Room)
//     private readonly roomRepository: Repository<model.Room>,
//     @InjectRepository(model.User)
//     private readonly userRepository: Repository<model.User>,
//   ) {}

//   public async getRoom(id: string) {
//     const room = await this.roomRepository.findOne({
//       where: {
//         id,
//       },
//     });

//     const roomUsers = await this.getRoomUsers(id);

//     if (room) {
//       return {
//         room,
//         roomUsers,
//       };
//     }
//   }

//   public getRooms() {
//     return this.roomRepository.find();
//   }

//   public async getRoomUsers(roomId: string) {
//     const room = await this.roomRepository.findOne({
//       where: { id: roomId },
//       relations: ['users'],
//     });

//     return room.users;
//   }

//   public async createPrivateRoom(createRoomInput: CreateRoomInput) {
//     const user = await this.userRepository.findOne({
//       where: {
//         id: createRoomInput.ownerId,
//       },
//       relations: ['rooms'],
//     });

//     if (user) {
//       const room = plainToClass(model.Room, createRoomInput);
//       room.users = [user];
//       await this.roomRepository.save(room);
//     }
//   }
// }
