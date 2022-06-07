import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { TeamEntity } from '@app/team/entities/team.entity';
import { RoleEntity } from '@app/role/entities/role.entity';
import { TimespanEntity } from '@app/timespan/entities/timespan.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 12);
  }

  @ManyToMany(() => TeamEntity, (team) => team.users)
  @JoinTable()
  teams: TeamEntity[];

  @OneToMany(() => RoleEntity, (role) => role.user)
  public roles!: RoleEntity[];

  @OneToMany(() => TimespanEntity, (timespan) => timespan.user)
  timespans: TimespanEntity[];
}
