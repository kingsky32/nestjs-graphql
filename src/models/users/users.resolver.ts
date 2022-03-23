import { CreateUserDto } from '#models/users/dtos/users.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '#models/users/users.service';
import { UserEntity } from '#models/users/serializers/users.serializer';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => UserEntity)
  async getUser(@Args('id') id: string): Promise<UserEntity> {
    return this.usersService.get(id);
  }

  @Mutation(() => UserEntity)
  async createUser(@Args() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.usersService.create(createUserDto);
  }
}
