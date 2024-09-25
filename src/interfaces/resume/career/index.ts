import { Duration } from '@/interfaces/types/Duration';
import { Regions } from '@/interfaces/types/Regions';

export interface Career {
  name: string;
  isInOffice: boolean;
  duration: Duration;
  department: string;
  position?: {
    name: string;
    year: number;
  } // 직급
  AssignmentTask: string;
  isHiddenName: boolean;
  annualIncome?: number;
  region?: Regions;
}