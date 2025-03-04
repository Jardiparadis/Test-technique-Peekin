import { defineStore } from 'pinia';

type LostObjectsByMonth = {
  nbLostObjects: number;
  month: string;
}

export const useLostObjectsByMonthStore = defineStore('lostObjectsByMonth', {
  state: () => ({
    lostObjectsByMonth: [] as LostObjectsByMonth[]
  }),
  getters: {
    getLostObjectsByMonth: (state: {lostObjectsByMonth: LostObjectsByMonth[]}) => state.lostObjectsByMonth,
  },
  actions: {
    update(data: LostObjectsByMonth[]) {
      this.lostObjectsByMonth = data;
    }
  }
});
