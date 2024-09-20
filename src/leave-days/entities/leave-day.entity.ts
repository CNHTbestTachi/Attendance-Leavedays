import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity('leave_days')
export class LeaveDays {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'APPROVED', 'REJECT'], // LeaveDayStatuses
  })
  status: string;

  @Column({
    type: 'enum',
    enum: [
      'ANNUAL_LEAVE',
      'CHILDCARE_LEAVE',
      'MEDICAL_LEAVE',
      'HOSPITALIZATION_LEAVE',
    ], // TypeOfLeaveDay
  })
  type: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.leaveDays)
  user: User; 
}
