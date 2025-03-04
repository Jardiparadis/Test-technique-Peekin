import { defineStore } from 'pinia';

export const useCustomerResponseStore = defineStore('customerResponse', {
  state: () => ({
    nbResponseReceived: 0,
    nbCustomerWarned  : 0
  }),
  actions: {
    update(nbResponseReceived: number, nbCustomerWarned: number) {
     this.nbCustomerWarned = nbCustomerWarned;
     this.nbResponseReceived = nbResponseReceived;
    }
  }
});
