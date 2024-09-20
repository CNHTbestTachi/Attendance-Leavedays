import { Test, TestingModule } from '@nestjs/testing';
import { LeaveDaysService } from './leave-days.service';

describe('LeaveDaysService', () => {
  let service: LeaveDaysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeaveDaysService],
    }).compile();

    service = module.get<LeaveDaysService>(LeaveDaysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
