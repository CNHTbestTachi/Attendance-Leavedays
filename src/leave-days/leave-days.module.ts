import { Module } from '@nestjs/common';
import { LeaveDaysService } from './leave-days.service';
import { LeaveDaysController } from './leave-days.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveDays } from 'src/leave-days/entities/leave-day.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveDays])],
  providers: [LeaveDaysService],
  controllers: [LeaveDaysController],
})
export class LeaveDaysModule {}
