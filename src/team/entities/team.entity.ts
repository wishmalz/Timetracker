import { ProjectEntity } from '@app/project/entities/project.entity';
import { RoleEntity } from '@app/role/entities/role.entity';
import { UserEntity } from '@app/user/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'teams' })
export class TeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => ProjectEntity, (project) => project.teams)
  projects: ProjectEntity[];

  @ManyToMany(() => UserEntity, (user) => user.teams)
  users: UserEntity[];

  @OneToMany(() => RoleEntity, (role) => role.team)
  public roles!: RoleEntity[];
}
