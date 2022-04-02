import { ModelEntity } from '#common/serializers/model.serializer';
import { IUser } from '#models/users/interfaces/users.interface';
import { Field, ObjectType } from '@nestjs/graphql';
import { Exclude, Expose } from 'class-transformer';
import { Role } from '#common/enums/role.enum';

export const defaultUserGroupsForSerializing: string[] = ['user.timestamps'];

export const allUserGroupsForSerializing: string[] = [
  ...defaultUserGroupsForSerializing,
];

@ObjectType()
export class UserEntity extends ModelEntity implements IUser {
  @Field(() => String)
  id: string;

  @Field(() => String)
  role: Role[];

  @Field(() => String)
  username: string;

  @Field(() => String)
  @Exclude()
  password: string;

  @Field(() => Date)
  @Expose({ groups: ['account.timestamps'] })
  createdAt: Date;

  @Field(() => Date)
  @Expose({ groups: ['account.timestamps'] })
  updatedAt: Date;
}
