const Graduations = [
  'Graduated', // 졸업
  'Enrolled', // 재학
  'LeaveOfAbsence', // 휴학
  'Completion', // 수료
  'LeaveHalfway', // 중퇴
  'DropOutted', // 자퇴
  'Graduand', // 졸업 예정
] as const;

export type Graduations = typeof Graduations[number];