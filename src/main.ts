import { NestFactory } from '@nestjs/core';
import { TodosApp } from './todosapp.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(TodosApp);
  await app.listen(3000);
}
bootstrap();
