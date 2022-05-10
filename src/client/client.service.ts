import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private readonly clientRepository: Repository<ClientEntity>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    const clientByName = await this.clientRepository.findOne({
      name: createClientDto.name,
    });
    if (clientByName) {
      throw new HttpException(
        'Client is already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newClient = new ClientEntity();
    Object.assign(newClient, createClientDto);

    return await this.clientRepository.save(newClient);
  }

  async findAll(): Promise<ClientEntity[]> {
    return await this.clientRepository.find();
  }

  async findOne(id: number) {
    return await this.clientRepository.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.findOne(id);

    if (!client) {
      throw new HttpException('Client does not exist', HttpStatus.NOT_FOUND);
    }
    Object.assign(client, updateClientDto);
    return await this.clientRepository.save(client);
  }

  async remove(id: number) {
    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new HttpException('Client does not exist', HttpStatus.NOT_FOUND);
    }
    return await this.clientRepository.remove(client);
  }
}
