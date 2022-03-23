import { GqlThrottlerGuard } from '#common/guards/graphql-throttler.guard';
import { ThrottlerConfigModule } from '#config/throttler/config.module';
import { Module } from '@nestjs/common';
import { GqlConfigModule } from '#config/graphql/config.module';
import { AppConfigModule } from '#config/app/config.module';
import { PostgreDatabaseProviderModule } from '#providers/database/postgres/provider.module';
import { AuthModule } from '#authentication/auth.module';
import { UsersModule } from '#models/users/users.module';
import { APP_GUARD } from '@nestjs/core';

/**
 * Import and provide app related classes.
 *
 * @module
 */
@Module({
  imports: [
    ThrottlerConfigModule,
    GqlConfigModule,
    AppConfigModule,
    PostgreDatabaseProviderModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: GqlThrottlerGuard,
    },
  ],
})
export class AppModule {}
