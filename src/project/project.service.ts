import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const projectByName = await this.projectRepository.findOne({
      name: createProjectDto.name,
    });
    const projectByCode = await this.projectRepository.findOne({
      name: createProjectDto.code,
    });
    if (projectByName || projectByCode) {
      throw new HttpException(
        'Project is already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newProject = new ProjectEntity();
    Object.assign(newProject, createProjectDto);

    return await this.projectRepository.save(newProject);
  }

  async findAll(): Promise<ProjectEntity[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<ProjectEntity> {
    return await this.projectRepository.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    const project = await this.findOne(id);
    if (!project) {
      throw new HttpException('Project does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(project, updateProjectDto);
    return await this.projectRepository.save(project);
  }

  async remove(id: number) {
    const project = await this.projectRepository.findOne(id);
    if (!project) {
      throw new HttpException('Project does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.projectRepository.remove(project);
  }
}
