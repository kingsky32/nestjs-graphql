import { LoginResponseDto } from '#authentication/dto/login.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthConfigService } from '#config/authentication/config.service';
import { UsersService } from '#models/users/users.service';
import { UserEntity } from '#models/users/serializers/users.serializer';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: UsersService,
    private jwtService: JwtService,
    private authConfigService: AuthConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    return await this.accountsService.login(username, password);
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
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
