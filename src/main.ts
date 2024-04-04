import { NestFactory } from '@nestjs/core';
import { TodosApp } from './todosapp.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodosApp);
  app.use(cookieParser(fs.readFileSync('./secrets/cookie.secret').join()));
  await app.listen(3000);
}
bootstrap();
