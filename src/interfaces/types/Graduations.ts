const Graduations = {
  Graduated: 'Graduated', // 졸업
  Enrolled: 'Enrolled', // 재학
  LeaveOfAbsence: 'LeaveOfAbsence', // 휴학
  Completion: 'Completion', // 수료
  LeaveHalfway: 'LeaveHalfway', // 중퇴
  DropOutted: 'DropOutted', // 자퇴
  Graduand: 'Graduand', // 졸업 예정
} as const;

export type Graduations = typeof Graduations[keyof typeof Graduations];