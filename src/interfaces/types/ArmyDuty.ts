export const ArmyDuties = {
  None: '대상 아님',
  Fullfilled: '군필',
  Unfullfilled: '미필',
  ExEmpted: '면제',
  InOffice: '복무중',
};

export type ArmyDuties = typeof ArmyDuties[keyof typeof ArmyDuties];