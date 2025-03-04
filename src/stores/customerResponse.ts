import { defineStore } from 'pinia';

export const useCustomerResponseStore = defineStore('customerResponse', {
  state: () => ({
    nbResponseReceived                  : 0,
    nbCustomerWarned                    : 0,
    nbResponsesInLessThanOneHour        : 0,
    nbResponsesInLessThanTwoHours       : 0,
    nbResponsesInLessThanSixHours       : 0,
    nbResponsesInLessThanTwelveHours    : 0,
    nbResponsesInLessThanTwentyFourHours: 0,
    nbResponsesInMoreThanTwentyFourHours: 0
  }),
  actions: {
    update(
      nbResponseReceived                : number,
      nbCustomerWarned                  : number,
      nbResponsesLessThanOneHour        : number,
      nbResponsesLessThanTwoHours       : number,
      nbResponsesLessThanSixHours       : number,
      nbResponsesLessThanTwelveHours    : number,
      nbResponsesLessThanTwentyFourHours: number,
      nbResponsesMoreThanTwentyFourHours: number
    ) {
      this.nbCustomerWarned                     = nbCustomerWarned;
      this.nbResponseReceived                   = nbResponseReceived;
      this.nbResponsesInLessThanOneHour         = nbResponsesLessThanOneHour;
      this.nbResponsesInLessThanTwoHours        = nbResponsesLessThanTwoHours;
      this.nbResponsesInLessThanSixHours        = nbResponsesLessThanSixHours;
      this.nbResponsesInLessThanTwelveHours     = nbResponsesLessThanTwelveHours;
      this.nbResponsesInLessThanTwentyFourHours = nbResponsesLessThanTwentyFourHours;
      this.nbResponsesInMoreThanTwentyFourHours = nbResponsesMoreThanTwentyFourHours;
    }
  }
});
