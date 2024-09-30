const HighSchoolMajors = {
  LiberalArts: '문과',
  NaturalSchience: '이과',
  Academic: '전문계',
  EntertainmentAndSports: '예체능',
  SpecializedOrMeister: '특성화/마이스터',
  SpecialPurpose: '특수목적고',
} as const;

export type HighSchoolMajors = typeof HighSchoolMajors[keyof typeof HighSchoolMajors];