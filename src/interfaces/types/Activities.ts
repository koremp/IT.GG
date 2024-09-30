const Activities = {
  School: '교내활동',
  Intern: '인턴',
  Volunteer: '자원봉사',
  Club: '동아리',
  PartTime: '아르바이트',
  Assignment: '과제수행',
  Foreign: '해외연수',
  Education: '교육이수',
} as const;

export type Activities = typeof Activities[keyof typeof Activities];
