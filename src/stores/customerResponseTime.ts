import { defineStore } from 'pinia';

export const useCustomerResponseTimeStore = defineStore('customerResponseTime', {
  state: () => ({
    nbResponsesLessThanOneHour        : 0,
    nbResponsesLessThanTwoHours       : 0,
    nbResponsesLessThanSixHours       : 0,
    nbResponsesLessThanTwelveHours    : 0,
    nbResponsesLessThanTwentyFourHours: 0,
    nbResponsesMoreThanTwentyFourHours: 0
  }),
  actions: {
    update(nbResponsesLessThanOneHour        : number,
           nbResponsesLessThanTwoHours       : number,
           nbResponsesLessThanSixHours       : number,
           nbResponsesLessThanTwelveHours    : number,
           nbResponsesLessThanTwentyFourHours: number,
           nbResponsesMoreThanTwentyFourHours: number
    ) {
      this.nbResponsesLessThanOneHour         = nbResponsesLessThanOneHour;
      this.nbResponsesLessThanTwoHours        = nbResponsesLessThanTwoHours;
      this.nbResponsesLessThanSixHours        = nbResponsesLessThanSixHours;
      this.nbResponsesLessThanTwelveHours     = nbResponsesLessThanTwelveHours;
      this.nbResponsesLessThanTwentyFourHours = nbResponsesLessThanTwentyFourHours;
      this.nbResponsesMoreThanTwentyFourHours = nbResponsesMoreThanTwentyFourHours;
    }
  }
});
