import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceRecord } from 'src/attendance-records/entities/attendance-record.entity';

@Injectable()
export class AttendanceRecordsService {
  constructor(
    @InjectRepository(AttendanceRecord)
    private attendanceRecordRepository: Repository<AttendanceRecord>,
  ) {}

  async create(
    attendanceData: Partial<AttendanceRecord>,
  ): Promise<AttendanceRecord> {
    const attendanceRecord =
      this.attendanceRecordRepository.create(attendanceData);
    return this.attendanceRecordRepository.save(attendanceRecord);
  }

  async findAll(): Promise<AttendanceRecord[]> {
    return this.attendanceRecordRepository.find({ relations: ['user'] });
  }

  async findOne(id: string): Promise<AttendanceRecord> {
    return this.attendanceRecordRepository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  async update(
    id: string,
    updateData: Partial<AttendanceRecord>,
  ): Promise<AttendanceRecord> {
    await this.attendanceRecordRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.attendanceRecordRepository.delete(id);
  }
}
