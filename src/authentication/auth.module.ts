import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { AuthService } from '#authentication/auth.service';
import { AuthResolver } from '#authentication/auth.resolver';
import { JwtStrategy } from '#authentication/jwt.strategy';
import { AuthConfigService } from '#config/authentication/config.service';
import { AuthConfigModule } from '#config/authentication/config.module';
import { UsersModule } from '#models/users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    AuthConfigModule,
    JwtModule.registerAsync({
      imports: [AuthConfigModule],
      useFactory: async (authConfigService: AuthConfigService) => ({
        secret: authConfigService.access_token_secret,
        signOptions: {
          expiresIn: authConfigService.access_token_expiration_time,
        },
      }),
      inject: [AuthConfigService],
    } as JwtModuleAsyncOptions),
  ],
  providers: [AuthResolver, AuthService, JwtStrategy],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
