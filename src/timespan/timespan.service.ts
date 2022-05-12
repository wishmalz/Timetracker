import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimespanDto } from './dto/create-timespan.dto';
import { UpdateTimespanDto } from './dto/update-timespan.dto';
import { TimespanEntity } from './entities/timespan.entity';

@Injectable()
export class TimespanService {
  constructor(
    @InjectRepository(TimespanEntity)
    private readonly timespanRepository: Repository<TimespanEntity>,
  ) {}

  async create(createTimespanDto: CreateTimespanDto) {
    const newTimespan = new TimespanEntity();
    Object.assign(newTimespan, createTimespanDto);

    return await this.timespanRepository.save(newTimespan);
  }

  async findAll(): Promise<TimespanEntity[]> {
    return await this.timespanRepository.find();
  }

  async findOne(id: number): Promise<TimespanEntity> {
    return await this.timespanRepository.findOne(id);
  }

  async update(id: number, updateTimespanDto: UpdateTimespanDto) {
    const timespan = await this.findOne(id);
    if (!timespan) {
      throw new HttpException('Timespan does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(timespan, updateTimespanDto);
    return await this.timespanRepository.save(timespan);
  }

  async remove(id: number) {
    const timespan = await this.timespanRepository.findOne(id);
    if (!timespan) {
      throw new HttpException('Timespan does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.timespanRepository.remove(timespan);
  }
}
