import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './config';
import { GqlConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [GqlConfigModule],
      driver: ApolloDriver,
      useClass: GqlConfigService,
    }),
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        GRAPHQL_DEBUG: Joi.boolean().default(false),
        GRAPHQL_PLAYGROUND: Joi.boolean().default(false),
      }),
    }),
  ],
  providers: [ConfigService, GqlConfigService],
  exports: [ConfigService, GqlConfigService],
})
export class GqlConfigModule {}
