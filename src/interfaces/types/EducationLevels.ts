const EducationLevels = {
  ElementarySchool: 'Elementary',
  MiddleSchool: 'Middle',
  HighSchool: 'High',
  University: 'University',
} as const;

export type EducationLevels = typeof EducationLevels[keyof typeof EducationLevels];

