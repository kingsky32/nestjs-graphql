import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConfigService } from '#config/authentication/config.service';
import { UsersService } from '#models/users/users.service';

@Injectable()
export class GqlStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authConfigService: AuthConfigService,
    private readonly accountsService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfigService.access_token_secret,
      signOptions: {
        expriesIn: authConfigService.access_token_expiration_time,
      },
    });
  }

  async validate(payload: any) {
    console.log(payload);
    return this.accountsService.get(payload.sub);
  }
}
