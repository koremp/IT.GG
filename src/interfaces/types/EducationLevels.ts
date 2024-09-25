const EducationLevels = [
  'Elementary', 'Middle', 'High', 'Bachelor', 'Master', 'Doctor',
] as const;

export type EducationLevels = typeof EducationLevels[number];

