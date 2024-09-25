import { Duration } from '@/interfaces/resume/Duration';
import { Graduations } from '@/interfaces/types/Graduations';
import { Regions } from '@/interfaces/types/Regions';

export interface School {
  name: string;
  isGraduated: Graduations;
  duration: Duration;
  region: Regions;
};