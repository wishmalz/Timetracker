import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TimespanService } from './timespan.service';
import { CreateTimespanDto } from './dto/create-timespan.dto';
import { UpdateTimespanDto } from './dto/update-timespan.dto';

@Controller('/timespans')
export class TimespanController {
  constructor(private readonly timespanService: TimespanService) {}

  @Post()
  async create(@Body(ValidationPipe) createTimespanDto: CreateTimespanDto) {
    return await this.timespanService.create(createTimespanDto);
  }

  @Get()
  async findAll() {
    return await this.timespanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.timespanService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateTimespanDto: UpdateTimespanDto,
  ) {
    return await this.timespanService.update(id, updateTimespanDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.timespanService.remove(id);
  }
}
