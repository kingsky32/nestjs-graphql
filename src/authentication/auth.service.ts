import {
  LoginRequestDto,
  LoginResponseDto,
} from '#authentication/dto/login.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthConfigService } from '#config/authentication/config.service';
import { UsersService } from '#models/users/users.service';
import { User } from '#models/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private authConfigService: AuthConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    return await this.usersService.login(username, password);
  }

  async login(loginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.validateUser(
      loginRequestDto.username,
      loginRequestDto.password,
    );

    const payload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload, {
        secret: this.authConfigService.refresh_token_secret,
        expiresIn: `${this.authConfigService.refresh_token_expiration_time}s`,
      }),
    };
  }
}
