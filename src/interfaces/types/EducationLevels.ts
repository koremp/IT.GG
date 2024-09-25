const EducationLevels = [
  'Elementary', 'Middle', 'High', 'University',
] as const;

export type EducationLevels = typeof EducationLevels[number];

