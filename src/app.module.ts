import { APP_GUARD } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { ThrottlerConfigModule } from '#config/throttler/config.module';
import { GqlConfigModule } from '#config/gql/config.module';
import { AppConfigModule } from '#config/app/config.module';
import { PostgreDatabaseProviderModule } from '#providers/database/postgres/provider.module';
import { AuthModule } from '#authentication/auth.module';
import { UsersModule } from '#models/users/users.module';
import { GqlAuthGuard } from '#common/guards/gql-auth.guard';
import { RolesGuard } from "#common/guards/roles.guard";

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [
    AppConfigModule,
    PostgreDatabaseProviderModule,
    ThrottlerConfigModule,
    GqlConfigModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: GqlAuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: GqlThrottlerGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
