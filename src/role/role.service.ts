import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const roleByName = await this.roleRepository.findOne({
      name: createRoleDto.name,
    });
    if (roleByName) {
      throw new HttpException(
        'Role is already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newRole = new RoleEntity();
    Object.assign(newRole, createRoleDto);

    return await this.roleRepository.save(newRole);
  }

  async findAll() {
    return await this.roleRepository.find();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOne(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.findOne(id);
    if (!role) {
      throw new HttpException('Role does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(role, updateRoleDto);
    return await this.roleRepository.save(role);
  }

  async remove(id: number) {
    const role = await this.roleRepository.findOne(id);
    if (!role) {
      throw new HttpException('Role does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.roleRepository.remove(role);
  }
}
