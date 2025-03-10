import { defineStore } from 'pinia';

export type monthStats = {
  month: number;
  nbLostObjects: number;
  nbReturnedObjects: number;
};

export const useReturnedObjectsStatsStore = defineStore('returnedObjectsStats', {
  state: () => ({
    totalReturnedObjects: 0,
    totalRegisteredObjects: 0,
    monthlyStats: [] as monthStats[]
  }),
  actions: {
    update(totalReturnedObjects: number, totalRegisteredObjects: number, monthlyStats: monthStats[]) {
      this.totalReturnedObjects = totalReturnedObjects;
      this.totalRegisteredObjects = totalRegisteredObjects;
      this.monthlyStats = monthlyStats;
    }
  }
});
