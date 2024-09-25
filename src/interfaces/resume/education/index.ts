import { EducationLevels } from "@/interfaces/types/EducationLevels";
import { Exam } from "./Exam";
import { School } from "./School";

export interface Education {
  level: EducationLevels;
  isExam: boolean;
  exam?: Exam;
  school?: School;
}