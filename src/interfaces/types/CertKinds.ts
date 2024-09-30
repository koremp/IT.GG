const CertKinds = {
  Certification: '자격증/면허증',
  LanganguageExam: '어학시험',
  Award: '공모전/수상내역',
} as const;

export type CertKinds = typeof CertKinds[keyof typeof CertKinds];