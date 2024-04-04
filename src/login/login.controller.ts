import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserLoginDto } from './dto/userlogin.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async login(@Body(new ValidationPipe()) loginDTO: UserLoginDto) {
    return this.loginService.loginUser(loginDTO);
  }
}
