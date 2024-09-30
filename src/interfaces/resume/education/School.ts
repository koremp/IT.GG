import { Duration } from '@/interfaces/types/Duration';
import { Graduations } from '@/interfaces/types/Graduations';
import { HighSchoolMajors } from '@/interfaces/types/HighSchoolMajors';
import { Regions } from '@/interfaces/types/Regions';

export interface School {
  name: string;
  isGraduated: Graduations;
  duration: Duration;
};

export interface ElementarySchool extends School {
  region: Regions;
};

export interface MiddleSchool extends School {
  region: Regions;
};

export interface HighSchool extends School {
  isTransfer: boolean;
  major: HighSchoolMajors;
};

export interface University extends School {
  isTransfer: boolean;
  major: string;
  grade?: number;
  additionalMajor?: string;
  isDay?: boolean; // 주간 혹은 야간
  region: Regions;
};