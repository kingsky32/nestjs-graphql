import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '#models/users/interfaces/users.interface';
import { Role } from '#common/enums/role.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  @Field(() => String)
  roles: Role[];

  @Column({ type: 'text', unique: true, nullable: false })
  @Field(() => String)
  username: string;

  @Column({ type: 'text', nullable: false })
  @Field(() => String)
  password: string;

  @Column({ type: 'text', unique: true, nullable: false })
  @Field(() => String)
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date;
}
