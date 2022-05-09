import { Test, TestingModule } from '@nestjs/testing';
import { TimespanService } from './timespan.service';

describe('TimespanService', () => {
  let service: TimespanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimespanService],
    }).compile();

    service = module.get<TimespanService>(TimespanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
