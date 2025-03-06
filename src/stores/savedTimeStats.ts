import { defineStore } from 'pinia';

export const useSavedTimeStatsStore = defineStore('savedTimeStats', {
  state: () => ({
    savedTime: '0 j 0 h 0 min',
    baseTime : '0 j 0 h 0 min'
  }),
  actions: {
    update(savedTime: string, baseTime: string) {
      this.savedTime = savedTime;
      this.baseTime = baseTime;
    }
  }
});
