import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosEntity } from './entities/todos.entity';
import UsersEntity from './entities/users.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'todociapwd',
      database: 'todocia',
      entities: [TodosEntity, UsersEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
