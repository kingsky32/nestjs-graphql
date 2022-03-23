import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { AppConfigService } from '#config/app/config.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import '#common/utils/env';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn'],
  });
  // Get app config for cors settings and starting the app.
  const appConfig = app.get<AppConfigService>(AppConfigService);
  app.enableCors();
  app.use(helmet());
  app.use(cookieParser());
  app.setGlobalPrefix('v1');
  await app.listen(appConfig.port);
}
bootstrap();
