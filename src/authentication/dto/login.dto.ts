import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ArgsType()
export class LoginRequestDto {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class LoginResponseDto {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;
}
