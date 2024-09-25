const UniversityTypes = {
  JuniorCollege: 'JuniorCollege',
  University: 'University',
  Master: 'Master',
  Doctor: 'Doctor',
} as const;

export type UniversityTypes = typeof UniversityTypes[keyof typeof UniversityTypes];