import {
  LoginRequestDto,
  LoginResponseDto,
} from '#authentication/dto/login.dto';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '#authentication/auth.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '#common/guards/gql-auth.guard';
import { CurrentUser } from '#common/decorators/current-user.decorator';
import { UsersService } from '#models/users/users.service';
import { User } from '#models/users/entities/users.entity';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => LoginResponseDto)
  async login(
    @Context() context,
    @Args() loginRequestDto: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return this.authService.login(loginRequestDto);
  }

  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.usersService.get(user.id);
  }
}
