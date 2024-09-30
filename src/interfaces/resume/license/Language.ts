export const LangType = {
  English: '영어',
  Jap: '일본어',
  Chinese: '중국어',
  German: '독일어',
  French: '불어',
  Spanish: '스페인어',
  Russian: '러시아어',
  Italian: '이탈리아어',
  Korean: '한국어',
  Etc: '기타',
} as const;

export type LangType = typeof LangType[keyof typeof LangType];

export interface Language {
  langType: LangType;
  name: string;
  passDate: Date;
  score?: number;
  rate?: string;
  isPassed?: boolean;
};