import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveDays } from 'src/leave-days/entities/leave-day.entity';

@Injectable()
export class LeaveDaysService {
  constructor(
    @InjectRepository(LeaveDays)
    private leaveDaysRepository: Repository<LeaveDays>,
  ) {}

  create(createLeaveDayDto: any): Promise<LeaveDays[]> {
    const leaveDay = this.leaveDaysRepository.create(createLeaveDayDto);
    return this.leaveDaysRepository.save(leaveDay);
  }

  findAll(): Promise<LeaveDays[]> {
    return this.leaveDaysRepository.find();
  }

  findOne(id: string): Promise<LeaveDays> {
    return this.leaveDaysRepository.findOneBy({ id });
  }

  async update(id: string, updateLeaveDayDto: any): Promise<LeaveDays> {
    await this.leaveDaysRepository.update(id, updateLeaveDayDto);
    return this.findOne(id);
  }

  remove(id: string): Promise<void> {
    return this.leaveDaysRepository.delete(id).then(() => {});
  }
}
