import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TodosEntity } from './todos.entity';

@Entity()
export default class UsersEntity {
  @PrimaryGeneratedColumn('increment')
  ID: number;

  @Column({ type: 'varchar', length: '64', unique: true })
  username: string;

  @Column({ type: 'varchar', length: '512' })
  password: string;

  @Column({ type: 'varchar', length: '64' })
  salt: string;

  @OneToMany(() => TodosEntity, (table) => table.user)
  todos: TodosEntity[];
}
