import { Module } from '@nestjs/common';
import { TimespanService } from './timespan.service';
import { TimespanController } from './timespan.controller';

@Module({
  controllers: [TimespanController],
  providers: [TimespanService]
})
export class TimespanModule {}
