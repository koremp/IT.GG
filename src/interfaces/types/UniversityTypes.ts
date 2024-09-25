const UniversityTypes = [
  'JuniorCollege',
  'University',
  'Master',
  'Doctor',
] as const;

export type UniversityTypes = typeof UniversityTypes[number];