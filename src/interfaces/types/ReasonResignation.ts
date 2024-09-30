const ReasonResignation = {
  Change: '업직종 전환',
  Condition: '근무 조건',
  Deterioration: '경영 악화',
  Expiry: '계약 만료',
  Child: '출산/육아',
  School: '학업',
  StudyAbroad: '유학',
  Personal: '개인사정',
  Etcetera: '직접 입력',
} as const;

export type ReasonResignation = typeof ReasonResignation[keyof typeof ReasonResignation];