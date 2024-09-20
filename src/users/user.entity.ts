import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LeaveDays } from 'src/leave-days/entities/leave-day.entity';
import { AttendanceRecord } from 'src/attendance-records/entities/attendance-record.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => LeaveDays, (leaveDays) => leaveDays.user)
  leaveDays: LeaveDays[];

  @OneToMany(
    () => AttendanceRecord,
    (attendanceRecord) => attendanceRecord.user,
  )
  attendanceRecords: AttendanceRecord[];
}
