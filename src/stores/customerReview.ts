import { defineStore } from 'pinia';

export const useCustomerReviewStore = defineStore('customerReview', {
  state: () => ({
    nbOneStar   : 0,
    nbTwoStars  : 0,
    nbThreeStars: 0,
    nbFourStars : 0,
    nbFiveStars : 0
  }),
  getters: {
    getAverageNote(): number {
      const totalNote: number = this.nbOneStar + this.nbTwoStars*2 + this.nbThreeStars*3 + this.nbFourStars*4 + this.nbFiveStars*5;
      return (totalNote / (this.nbOneStar + this.nbTwoStars + this.nbThreeStars + this.nbFourStars + this.nbFiveStars));
    }
  },
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
