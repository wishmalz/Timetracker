import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagEntity } from './entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tagByName = await this.tagRepository.findOne({
      name: createTagDto.name,
    });
    if (tagByName) {
      throw new HttpException(
        'Tag is already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newTag = new TagEntity();
    Object.assign(newTag, createTagDto);

    return await this.tagRepository.save(newTag);
  }

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }

  async findOne(id: number): Promise<TagEntity> {
    return await this.tagRepository.findOne(id);
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    const tag = await this.findOne(id);
    if (!tag) {
      throw new HttpException('Tag does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(tag, updateTagDto);
    return await this.tagRepository.save(tag);
  }

  async remove(id: number) {
    const tag = await this.tagRepository.findOne(id);
    if (!tag) {
      throw new HttpException('Tag does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.tagRepository.remove(tag);
  }
}
