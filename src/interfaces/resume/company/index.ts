import { Duration } from '@/interfaces/types/Duration';
import { Regions } from '@/interfaces/types/Regions';

export interface Duty {
  duty: string;
};

export interface Position {
  position: string;
};

export interface Company {
  name: string;
  isInOffice: boolean;
  duration: Duration;
  duty: Duty;
  department?: string;
  position?: {
    name: Position;
    year: number;
  } // 직급
  AssignmentTask?: string;
  isHiddenName: boolean;
  annualIncome?: number;
  region?: Regions;
}