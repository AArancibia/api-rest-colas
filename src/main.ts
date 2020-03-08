import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as config from 'config';
//import { Logger } from '@nestjs/common';

//const logger = new Logger('App Initialized');
const { port } = config.get('server');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}
bootstrap();
