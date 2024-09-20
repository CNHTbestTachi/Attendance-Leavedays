import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LeaveDaysService } from './leave-days.service';
import { ApiTags } from '@nestjs/swagger';
import { LeaveDays } from './entities/leave-day.entity';

@ApiTags('Leave-days')
@Controller('leave-days')
export class LeaveDaysController {
  constructor(private readonly leaveDaysService: LeaveDaysService) {}

  @Post('create')
  async create(@Body() createLeaveDayDto: LeaveDays) {
    try {
      const leaveDay = await this.leaveDaysService.create(createLeaveDayDto);
      return leaveDay;
    } catch (error) {
      throw new HttpException(
        'Failed to create leave day',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('list')
  async findAll() {
    try {
      const leaveDays = await this.leaveDaysService.findAll();
      return leaveDays;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve leave days',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('get/:id')
  async findOne(@Param('id') id: string) {
    try {
      const leaveDay = await this.leaveDaysService.findOne(id);
      if (!leaveDay) {
        throw new HttpException('Leave day not found', HttpStatus.NOT_FOUND);
      }
      return leaveDay;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateLeaveDayDto: any) {
    try {
      const updatedLeaveDay = await this.leaveDaysService.update(
        id,
        updateLeaveDayDto,
      );
      return updatedLeaveDay;
    } catch (error) {
      throw new HttpException(
        'Failed to update leave day',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.leaveDaysService.remove(id);
      return { message: 'Leave day successfully deleted' };
    } catch (error) {
      throw new HttpException(
        'Failed to delete leave day',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
