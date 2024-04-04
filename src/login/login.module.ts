import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LoginController],
  providers: [LoginService],
  imports: [DatabaseModule],
})
export class LoginModule {}
