import { defineStore } from 'pinia';

type LostAndReturnedObjectsByMonth = {
  nbLostObjects: number;
  nbReturnedObjects: number;
  month: string;
}

export const useLostAndReturnedObjectsByMonthStore = defineStore('lostAndReturnedObjectsByMonth', {
  state: () => ({
    lostAndReturnedObjectsByMonth: [] as LostAndReturnedObjectsByMonth[]
  }),
  actions: {
    update(data: LostAndReturnedObjectsByMonth[]) {
      this.lostAndReturnedObjectsByMonth = data;
    }
  }
});
