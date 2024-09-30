const KoreanRegions = {
  Seoul: 'Seoul',
  Gyeonggi: 'Gyeonggi',
  Gwangju: 'Gwangju',
  Daegu: 'Daegu',
  Daejeon: 'Daejeon',
  Busan: 'Busan',
  Ulsan: 'Ulsan',
  Incheon: 'Incheon',
  Gyeongnam: 'Gyeongnam',
  Gyeongbuk: 'Gyeongbuk',
  Jeonnam: 'Jeonnam',
  Jeonbuk: 'Jeonbuk',
  Chungnam: 'Chungnam',
  Chungbuk: 'Chungbuk',
  Jeju: 'Jeju',
  Gangwon: 'Gangwon',
  RepublicOfKorea: 'RepublicOfKorea',
  Sejong: 'Sejong',
};

export type KoreanRegions = typeof KoreanRegions[keyof typeof KoreanRegions];

const ForeignRegions = {
  Asia: 'Asia', MiddleEast: 'MiddleEast',
  NorthAmerica: 'NorthAmerica', MiddleAmerica: 'MiddleAmerica',
  SouthAmerica: 'SouthAmerica',
  Oceania: 'Oceania',
  Africa: 'Africa',
  Atalantica: 'Atalantica',
  Etcetera: 'Etcetera',
} as const;

export type ForeignRegions = typeof ForeignRegions[keyof typeof ForeignRegions];

const Regions = { ...KoreanRegions, ...ForeignRegions };
export type Regions = typeof Regions[keyof typeof Regions];