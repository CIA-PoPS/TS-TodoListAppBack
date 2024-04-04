import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
import { JwtModule } from '@nestjs/jwt';
import * as fs from 'fs';

@Module({
  imports: [
    DatabaseModule,
    LoginModule,
    JwtModule.register({
      global: true,
      secret: fs.readFileSync('./secrets/jwt.secret'),
      privateKey: fs.readFileSync('./secrets/jwt.pem'),
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TodosApp {}
