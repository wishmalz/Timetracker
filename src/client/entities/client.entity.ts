import { ProjectEntity } from '@app/project/entities/project.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @OneToMany(() => ProjectEntity, (project) => project.client)
  projects: ProjectEntity[];
}
