export class UpdateLeaveDayDto {
  status?: 'PENDING' | 'APPROVED' | 'REJECT';
  type?:
    | 'ANNUAL_LEAVE'
    | 'CHILDCARE_LEAVE'
    | 'MEDICAL_LEAVE'
    | 'HOSPITALIZATION_LEAVE';
}
