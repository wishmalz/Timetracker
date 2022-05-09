import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimespanService } from './timespan.service';
import { CreateTimespanDto } from './dto/create-timespan.dto';
import { UpdateTimespanDto } from './dto/update-timespan.dto';

@Controller('timespan')
export class TimespanController {
  constructor(private readonly timespanService: TimespanService) {}

  @Post()
  create(@Body() createTimespanDto: CreateTimespanDto) {
    return this.timespanService.create(createTimespanDto);
  }

  @Get()
  findAll() {
    return this.timespanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timespanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimespanDto: UpdateTimespanDto) {
    return this.timespanService.update(+id, updateTimespanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timespanService.remove(+id);
  }
}
