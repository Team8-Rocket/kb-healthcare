export interface ITagList {
  tagId: string
  tag1: string
  tag2: string
  tag3: string
}[]

export interface IScoreList {
  SCORE: string
  TYPE_CD: string
  SUBMIT_DATE: string
  CNTNS: string
}[]

export interface IUserInfo {
  healthScript: string
  healthScore: string
  healthDate: string
}

export interface IResultMap {
  maxHis: string
  medi_peer: string
  wHage: string
  wMymaxHscoreDy: string
  mediGapSum: string
  diabmlRate: string
  ihd_peer: string
  totalRate: string
  his: string
  contribution: IContribution
  age: number;
}

export interface IContribution {
  bloodPressure: {};
  medical: {
      resUrinaryProtein: string
  };
  bloodSugar: {
      resFastingBloodSuger: string
  };
  weight: {
      resBMI: string;
  };
  cholesterol: {
      resHDLCholesterol: string
      resTotalCholesterol: string
      resLDLCholesterol: string
  };
  life: ILife
}

export interface ILife {
  exerciQty: string
}