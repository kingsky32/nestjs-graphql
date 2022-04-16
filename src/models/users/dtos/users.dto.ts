import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserDto {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  email: string;
}
