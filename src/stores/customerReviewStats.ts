import { defineStore } from 'pinia';

export const useCustomerReviewStatsStore = defineStore('customerReviewStats', {
  state: () => ({
    nbOneStar: 0,
    nbTwoStars: 0,
    nbThreeStars: 0,
    nbFourStars: 0,
    nbFiveStars: 0
  }),
  getters: {
    /**
     * Get average note
     */
    getAverageNote(): number {
      const totalNote: number = this.nbOneStar + this.nbTwoStars*2 + this.nbThreeStars*3 + this.nbFourStars*4 + this.nbFiveStars*5;
      if (totalNote === 0) {
        return 0;
      }
      return (totalNote / (this.nbOneStar + this.nbTwoStars + this.nbThreeStars + this.nbFourStars + this.nbFiveStars));
    },
    /**
     * Get the total number of reviews
     */
    getNbReviews(): number {
      return this.nbOneStar + this.nbTwoStars + this.nbThreeStars + this.nbFourStars + this.nbFiveStars;
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
