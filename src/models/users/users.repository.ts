import { ModelRepository } from '#models/model.repository';
import { User } from '#models/users/entities/users.entity';
import { UserEntity } from '#models/users/serializers/users.serializer';
import { EntityRepository } from 'typeorm';

@EntityRepository(User)
export class UsersRepository extends ModelRepository<
  User,
  UserEntity
> {}
