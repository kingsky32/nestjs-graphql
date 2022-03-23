import { Module } from '@nestjs/common';
import { UsersService } from 'models/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from 'models/users/users.repository';
import { UsersResolver } from '#models/users/users.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
