import { Module } from '@nestjs/common';
import { TimespanService } from './timespan.service';
import { TimespanController } from './timespan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimespanEntity } from './entities/timespan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimespanEntity])],
  controllers: [TimespanController],
  providers: [TimespanService],
})
export class TimespanModule {}
