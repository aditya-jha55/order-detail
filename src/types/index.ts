export * from "./common";

export interface SearchParams {
  common: {
    searchParamsForProduction: string;
    searchParamsForEpisode: string;
  };
}

export interface ProductionListApiData {
  productionCount: number;
  episodeCount: number;
  productions: ProductionListData[];
  total: any;
  setCount: number;
}
export interface Schedule {
  endDate: number;
  scheduleType: string;
  startDate: number;
  _id: number;
}
export interface ProductionListData {
  _id: number;
  name: string;
  type: string;
  memberType: string;
  schedule: Schedule[];
}

export interface ProductionListSelector {
  client: {
    productionTableList: ProductionListApiData;
  };
}
