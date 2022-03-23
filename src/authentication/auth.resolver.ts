import {
  LoginRequestDto,
  LoginResponseDto,
} from '#authentication/dto/login.dto';
import { CurrentUser } from '#common/decorators/current-user.decorator';
import { GqlAuthGuard } from '#common/guards/graphql-auth.guard';
import { LocalAuthGuard } from '#common/guards/local-auth.guard';
import { UserEntity } from '#models/users/serializers/users.serializer';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '#authentication/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => UserEntity)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() user: UserEntity): Promise<UserEntity> {
    return user;
  }

  @Mutation(() => LoginResponseDto)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args() loginRequestDto: LoginRequestDto,
    @CurrentUser() user: UserEntity,
  ): Promise<LoginResponseDto> {
    return this.authService.login(user);
  }
}
