import { User } from '#models/users/entities/users.entity';
import { CreateUserDto } from '#models/users/dtos/users.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '#models/users/users.service';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args('id') id: string): Promise<User> {
    return this.usersService.get(id);
  }

  @Mutation(() => User)
  createUser(@Args() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
