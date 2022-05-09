import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class Project {
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

  //   client_id
}
