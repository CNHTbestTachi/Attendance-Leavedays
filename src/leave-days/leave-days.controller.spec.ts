import { Test, TestingModule } from '@nestjs/testing';
import { LeaveDaysController } from './leave-days.controller';

describe('LeaveDaysController', () => {
  let controller: LeaveDaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaveDaysController],
    }).compile();

    controller = module.get<LeaveDaysController>(LeaveDaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
