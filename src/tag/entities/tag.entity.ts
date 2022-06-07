import { TimespanEntity } from '@app/timespan/entities/timespan.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => TimespanEntity, (timespan) => timespan.tags)
  @JoinTable()
  timespans: TimespanEntity[];
}
