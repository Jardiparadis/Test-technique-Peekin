import { defineStore } from 'pinia';

export const useCustomerReviewStore = defineStore('customerReview', {
  state: () => ({
    nbOneStar   : 0,
    nbTwoStars  : 0,
    nbThreeStars: 0,
    nbFourStars : 0,
    nbFiveStars : 0
  }),
  actions: {
    update(nbOneStar: number, nbTwoStars: number, nbThreeStars: number, nbFourStars: number, nbFiveStars: number) {
      this.nbOneStar = nbOneStar;
      this.nbTwoStars = nbTwoStars;
      this.nbThreeStars = nbThreeStars;
      this.nbFourStars = nbFourStars;
      this.nbFiveStars = nbFiveStars;
    }
  }
});
