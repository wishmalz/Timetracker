import { Test, TestingModule } from '@nestjs/testing';
import { TimespanController } from './timespan.controller';
import { TimespanService } from './timespan.service';

describe('TimespanController', () => {
  let controller: TimespanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimespanController],
      providers: [TimespanService],
    }).compile();

    controller = module.get<TimespanController>(TimespanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
