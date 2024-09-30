import { Activities } from "@/interfaces/types/Activities";
import { Duration } from "@/interfaces/types/Duration";
import { ForeignRegions } from "@/interfaces/types/Regions";

export interface Experience {
  activity: Activities;
  isForeign: boolean;
  name?: string; // when foreign is false, activity is not foreign
  foreignRegion?: ForeignRegions; // when foreign is true, activity is foreign
  isMonth: boolean;
  duration: Duration;
  desc: string;
}