const EducationLevels = [
  'Elementary', 'Middle', 'High', 'Bachelor', 'Master', 'Doctor',
] as const;

export type EducationLevels = typeof EducationLevels[number];

export interface Education {
  level: EducationLevels,
  name: string,
}

export interface IPublicEducation {
  educations: []
}