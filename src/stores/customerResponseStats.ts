import { defineStore } from 'pinia';

export const useCustomerResponseStatsStore = defineStore('customerResponseStats', {
  state: () => ({
    nbResponseReceived: 0,
    nbCustomersNotified: 0,
    nbResponsesInLessThanOneHour: 0,
    nbResponsesInLessThanTwoHours: 0,
    nbResponsesInLessThanSixHours: 0,
    nbResponsesInLessThanTwelveHours: 0,
    nbResponsesInLessThanTwentyFourHours: 0,
    nbResponsesInMoreThanTwentyFourHours: 0
  }),
  getters: {
    /**
     * Get response rate in percent
     */
    getResponseRate(): number {
      if (this.nbResponseReceived === 0) {
        return 0;
      }
      return Math.round((this.nbResponseReceived / this.nbCustomersNotified) * 100);
    }
  },
  actions: {
    update(
      nbResponseReceived: number,
      nbCustomersNotified: number,
      nbResponsesLessThanOneHour: number,
      nbResponsesLessThanTwoHours: number,
      nbResponsesLessThanSixHours: number,
      nbResponsesLessThanTwelveHours: number,
      nbResponsesLessThanTwentyFourHours: number,
      nbResponsesMoreThanTwentyFourHours: number
    ) {
      this.nbCustomersNotified = nbCustomersNotified;
      this.nbResponseReceived = nbResponseReceived;
      this.nbResponsesInLessThanOneHour = nbResponsesLessThanOneHour;
      this.nbResponsesInLessThanTwoHours = nbResponsesLessThanTwoHours;
      this.nbResponsesInLessThanSixHours = nbResponsesLessThanSixHours;
      this.nbResponsesInLessThanTwelveHours = nbResponsesLessThanTwelveHours;
      this.nbResponsesInLessThanTwentyFourHours = nbResponsesLessThanTwentyFourHours;
      this.nbResponsesInMoreThanTwentyFourHours = nbResponsesMoreThanTwentyFourHours;
    }
  }
});
