import { defineStore } from 'pinia';

export const useSavedTimeStatsStore = defineStore('savedTimeStats', {
  state: () => ({
    savedTime: '',
    baseTime : ''
  }),
  actions: {
    update(savedTime: string, baseTime: string) {
      this.savedTime = savedTime;
      this.baseTime = baseTime;
    }
  }
});
