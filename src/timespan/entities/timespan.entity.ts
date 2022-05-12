import {
  BeforeUpdate,
  Column,
  Double,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'timespans' })
export class TimespanEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task_name: string;

  @Column({ default: '' })
  description: string;

  @Column()
  duration: number;

  @Column()
  task_id: number;

  @Column({ type: 'timestamp' })
  start_time: Date;

  @Column({ type: 'timestamp' })
  end_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated_at = new Date();
  }
  //   user_id
  // project_id
}
