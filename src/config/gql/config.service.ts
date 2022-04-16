import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'path';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}

  get debug(): boolean {
    return JSON.parse(this.configService.get<string>('graphql.debug'));
  }

  get playground(): boolean {
    return JSON.parse(this.configService.get<string>('graphql.playground'));
  }

  createGqlOptions(): ApolloDriverConfig {
    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      debug: this.debug,
      playground: this.playground,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    };
  }
}
