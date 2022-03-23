import { ModelEntity } from '#common/serializers/model.serializer';
import { IUser } from '#models/users/interfaces/users.interface';
import { Field, ObjectType } from '@nestjs/graphql';
import { Expose } from 'class-transformer';

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];

export const allUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];

@ObjectType()
export class UserEntity extends ModelEntity implements IUser {
  @Field(() => String)
  id: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => Date)
  @Expose({ groups: ['account.timestamps'] })
  createdAt: Date;

  @Field(() => Date)
  @Expose({ groups: ['account.timestamps'] })
  updatedAt: Date;
}
