import { Duration } from "@/interfaces/types/Duration";

export type MilitaryKinds = '육군'|
  '해군'|
  '공군'|
  '해병'|
  '의경'|
  '전경'|
  '기타'|
  '사회복무요원'|
  '의무소방';

export type MilitaryClasses = '이병'|
  '일병'|
  '상병'|
  '병장'|
  '하사'|
  '중사'|
  '상사'|
  '원사'|
  '준위'|
  '소위'|
  '중위'|
  '대위'|
  '준장'|
  '소장'|
  '소령'|
  '준령'|
  '대령'|
  '소장'|
  '중장'|
  '대장'|
  '기타';

export type QuitReasons = '만기전역'|
  '의가사전역'|
  '의병전역'|
  '소집해제'|
  '불명예전역'|
  '상이전역'|
  '기타';

export interface ArmyDuty {
  duration: Duration;
  kind: MilitaryKinds;
  class: MilitaryClasses;
  quitReason: QuitReasons;
};