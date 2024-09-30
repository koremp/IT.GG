export type HireSupportTypes = '고령자'|
  '중증 장애인'|
  '장애인'|
  '여성 가장'|
  '장기 구직'|
  '청년취업대상자'|
  '여성근로자'|
  '농어업인'|
  '';

export type DisableRates = '경증'|
  '중증'|
  '장애1급'|
  '장애2급'|
  '장애3급'|
  '장애4급'|
  '장애5급'|
  '장애6급'|
  '장애7급'|
  '장애8급'|
  '장애9급'|
  '장애10급';

export interface HireSupport {
  supportType: HireSupportTypes;
  disableRate?: DisableRates
};