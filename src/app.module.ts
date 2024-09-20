import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LeaveDaysModule } from './leave-days/leave-days.module';
import { LeaveDays } from 'src/leave-days/entities/leave-day.entity';
import { User } from './users/user.entity';
import { AttendanceRecordsModule } from './attendance-records/attendance-records.module';
import { AttendanceRecord } from './attendance-records/entities/attendance-record.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'luongdao',
      username: 'postgres',
      entities: [User, LeaveDays, AttendanceRecord],
      database: 'crud',
      synchronize: true,
      logging: true,
    }),
    AttendanceRecordsModule,
    LeaveDaysModule,
  ],
  controllers: [],
})
export class AppModule {}
