import { Company } from "@/interfaces/resume/company";
import { Education } from "@/interfaces/resume/education";

export interface Saramin {
  education: Education;
  companies: Array<Company>;
}