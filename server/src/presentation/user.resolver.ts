import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { UserUseCase } from 'src/domain';
import { PublicRoom, User, PrivateRoom } from 'src/infrastructure';
import { CreateUserInput } from './input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userUseCase: UserUseCase) {}

  @Query(() => User)
  public async getUser(@Args('id') id: string) {
    return this.userUseCase.getUser(id);
  }

  @Query(() => [User])
  public async getUsers() {
    return this.userUseCase.getUsers();
  }

  @Query(() => [PublicRoom])
  public async getUserPublicRooms(@Args('id') id: string) {
    return this.userUseCase.getUserPublicRooms(id);
  }

  @Query(() => [PrivateRoom])
  public async getUserCompanions(@Args('id') id: string) {
    return this.userUseCase.getUserCompanions(id);
  }

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userUseCase.createUser(createUserInput);
  }
}
