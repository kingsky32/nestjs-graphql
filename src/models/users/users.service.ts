import bcrypt from '#common/utils/bcrypt';
import { CreateUserDto } from '#models/users/dtos/users.dto';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'models/users/users.repository';
import { User } from '#models/users/entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { username: createUserDto.username },
    });

    if (!!user) {
      throw new ForbiddenException('account already exists.');
    }

    createUserDto.password = await bcrypt.generate(createUserDto.password);
    return this.usersRepository.save(createUserDto);
  }

  async get(id: string): Promise<User | null> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async login(username: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException('Unregistered User');
    }

    const isCompare = await bcrypt.compare(password, user.password);

    if (isCompare === false) {
      throw new UnauthorizedException('Incorrect Password');
    }

    return user;
  }
}
