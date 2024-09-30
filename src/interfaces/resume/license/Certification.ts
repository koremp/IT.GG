export const PassDivs = {
  first: '1차 합격',
  second: '2차 합격',
  written: '필기 합격',
  performance: '실기 합격',
  Final: '최종 합격',
} as const;

export type PassDivs = typeof PassDivs[keyof typeof PassDivs];

export interface Certification {
  name: string; // 자격증명
  organization: string; // 발행처, 기관
  passDiv: PassDivs; // 합격 구분
  passDate: Date; // 합격 일자
};