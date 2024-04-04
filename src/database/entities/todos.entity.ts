import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UsersEntity from './users.entity';

@Entity()
export class TodosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('datetime')
  createdAt: Date;

  @Column({ type: 'varchar', length: 16 })
  prefix: string;

  @Column({ type: 'varchar', length: 512 })
  contenu: string;

  @Column('bit')
  completed: boolean;

  @ManyToOne(() => UsersEntity, (user) => user.todos)
  @JoinColumn({ name: 'userid' })
  user: UsersEntity;
}
