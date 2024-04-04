import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UserLoginDto } from './dto/userlogin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private database: DatabaseService) {}

  loginUser = async (data: UserLoginDto) => {
    const user = await this.database.fetchUser(data.username);
    if (user === null) return { error: 'User not found' };

    if (await bcrypt.compare(data.password, user.password)) {
      return {};
    }
    return { error: 'Invalid Password' };
  };

  createUser = async () => {
    return;
  };
}
