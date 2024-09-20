import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AttendanceRecordsService } from './attendance-records.service';
import { AttendanceRecord } from 'src/attendance-records/entities/attendance-record.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Attendance-records')
@Controller('attendance-records')
export class AttendanceRecordsController {
  constructor(
    private readonly attendanceRecordsService: AttendanceRecordsService,
  ) {}

  @Post('/create')
  async create(
    @Body() attendanceData: AttendanceRecord,
  ): Promise<AttendanceRecord> {
    try {
      return await this.attendanceRecordsService.create(attendanceData);
    } catch (error) {
      throw new HttpException(
        'Failed to create attendance record',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/list')
  async findAll(): Promise<AttendanceRecord[]> {
    try {
      return await this.attendanceRecordsService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve attendance records',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('/get/:id')
  async findOne(@Param('id') id: string): Promise<AttendanceRecord> {
    try {
      const record = await this.attendanceRecordsService.findOne(id);
      if (!record) {
        throw new HttpException(
          'Attendance record not found',
          HttpStatus.NOT_FOUND,
        );
      }
      return record;
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to retrieve attendance record',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<AttendanceRecord>,
  ): Promise<AttendanceRecord> {
    try {
      return await this.attendanceRecordsService.update(id, updateData);
    } catch (error) {
      throw new HttpException(
        'Failed to update attendance record',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.attendanceRecordsService.remove(id);
      return;
    } catch (error) {
      throw new HttpException(
        'Failed to delete attendance record',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
