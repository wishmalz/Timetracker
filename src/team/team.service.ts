import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamEntity } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamRepository: Repository<TeamEntity>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const teamByName = await this.teamRepository.findOne({
      name: createTeamDto.name,
    });
    if (teamByName) {
      throw new HttpException(
        'Team is already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newTeam = new TeamEntity();
    Object.assign(newTeam, createTeamDto);

    return await this.teamRepository.save(newTeam);
  }

  async findAll(): Promise<TeamEntity[]> {
    return await this.teamRepository.find();
  }

  async findOne(id: number): Promise<TeamEntity> {
    return await this.teamRepository.findOne(id);
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.findOne(id);
    if (!team) {
      throw new HttpException('Team does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(team, updateTeamDto);
    return await this.teamRepository.save(team);
  }

  async remove(id: number) {
    const team = await this.findOne(id);
    if (!team) {
      throw new HttpException('Team does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.teamRepository.remove(team);
  }
}
