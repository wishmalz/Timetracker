import { TeamEntity } from '@app/team/entities/team.entity';
import { UserEntity } from '@app/user/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'roles' })
export class RoleEntity {
  @PrimaryGeneratedColumn()
  public userToTeamId!: number;

  @Column({ unique: true })
  name: string;

  @Column()
  rate_inside: number;

  @Column()
  rate_outside: number;

  @Column()
  public userId!: number;

  @Column()
  public teamId!: number;

  @ManyToOne(() => UserEntity, (user) => user.roles)
  public user!: UserEntity;

  @ManyToOne(() => TeamEntity, (team) => team.roles)
  public team!: TeamEntity;
}
