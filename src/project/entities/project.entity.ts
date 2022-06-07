import { ClientEntity } from '@app/client/entities/client.entity';
import { TeamEntity } from '@app/team/entities/team.entity';
import { TimespanEntity } from '@app/timespan/entities/timespan.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ default: '' })
  notes: string;

  @ManyToOne(() => ClientEntity, (client) => client.projects)
  client: ClientEntity;

  @ManyToMany(() => TeamEntity, (team) => team.projects)
  @JoinTable()
  teams: TeamEntity[];

  @OneToMany(() => TimespanEntity, (timespan) => timespan.project)
  timespans: TimespanEntity[];
}
