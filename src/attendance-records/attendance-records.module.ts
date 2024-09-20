import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceRecordsService } from './attendance-records.service';
import { AttendanceRecordsController } from './attendance-records.controller';
import { AttendanceRecord } from 'src/attendance-records/entities/attendance-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceRecord])],
  providers: [AttendanceRecordsService],
  controllers: [AttendanceRecordsController],
})
export class AttendanceRecordsModule {}
