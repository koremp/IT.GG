import { Education } from "@/interfaces/resume/education";
import { Company } from "@/interfaces/resume/company";
import { Experience } from "@/interfaces/resume/experience";

import { Certification } from '@/interfaces/resume/license/Certification';
import { Language } from '@/interfaces/resume/license/Language';
import { Award } from '@/interfaces/resume/license/Award';

import { HireSupport } from "../hireSupport";
import { ArmyDuties } from "@/interfaces/types/ArmyDuty";

export type Suggestion = ''|
  ''|
  '';

export interface Saramin {
  education: Education;
  experiences: Array<Experience>;
  companies?: Array<Company>;
  skills?: Array<string>;
  licenses?: {
    certifications: Array<Certification>;
    languages: Array<Language>;
    awards: Array<Award>;
  };
  files?: Array<string>; // 포트폴리오 및 기타 문서
  experienceDesc?: string; // 경력 기술서
  selfIntro?: {
    name: string;
    desc: string;
  };
  preference?: {
    veteran?: string;
    armyDuty?: ArmyDuties;
    hireSupport?: HireSupport;
  };
  suggestion?: Suggestion;
};

export type Education = '초등학교'|
  '중학교'|
  '초등학교'|
  '고등학교'|
  '대학교(2,3년)'|
  '대학교(4년)'|
  '대학원(석사)'|
  '대학원(박사)';
export interface SaraminURL {
  isFreshman: boolean;
  url: {
    link: string;
    name: string;
    desc?: string;
  };
  education: Education;
  experience?: Date; // when isFreshman is true, experience is not undefined
  suggestion: Suggestion;
};

export interface SaraminFile {
  education: Education;
};