import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SharedModule } from './shared/shared.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());

  const configService = app.select(SharedModule).get(ApiConfigService);

  const port = configService.appConfig.port;

  await app.listen(port);

  console.info(`server running on ${await app.getUrl()}`);
  return app;
}
bootstrap();
