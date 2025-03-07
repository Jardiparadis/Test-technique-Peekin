import type { monthStats } from './stores/returnedObjectsStats.ts';

/**
 * These functions are called to mock API calls
 */

type savedTimeStatsAPI = {
  savedTime: string;
  baseTime: string;
};

type returnedObjectsAPI = {
  totalReturnedObjects: number;
  totalRegisteredObjects: number;
  monthlyStats: monthStats[];
};

type objectsTypesAPI = {
  light  : number;
  medium : number;
  heavy  : number;
  fragile: number;
};

type customersResponsesAPI = {
  nbResponseReceived                : number,
  nbCustomersNotified                  : number,
  nbResponsesLessThanOneHour        : number,
  nbResponsesLessThanTwoHours       : number,
  nbResponsesLessThanSixHours       : number,
  nbResponsesLessThanTwelveHours    : number,
  nbResponsesLessThanTwentyFourHours: number,
  nbResponsesMoreThanTwentyFourHours: number
};

type customersReviewsAPI = {
  nbOneStar   : number,
  nbTwoStars  : number,
  nbThreeStars: number,
  nbFourStars : number,
  nbFiveStars : number
};

// Mocks timeout in ms
const timeout = 2000;

export function getSavedTimeStatsFromAPI() {
  return new Promise<savedTimeStatsAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        savedTime: '16 j 12 h 45 min',
        baseTime: '32 j 18h 21 min'
      });
    }, timeout);
  });
}

export function getReturnedObjectsFromAPI() {
  return new Promise<returnedObjectsAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        totalReturnedObjects: 205,
        totalRegisteredObjects: 234,
        monthlyStats: [
          { nbReturnedObjects: 5, nbLostObjects: 3, month: 1},
          { nbReturnedObjects: 7, nbLostObjects: 8, month: 2},
          { nbReturnedObjects: 9, nbLostObjects: 1, month: 3},
          { nbReturnedObjects: 4, nbLostObjects: 4, month: 4},
          { nbReturnedObjects: 5, nbLostObjects: 3, month: 5},
          { nbReturnedObjects: 2, nbLostObjects: 9, month: 6},
        ]
      });
    }, timeout);
  });
}

export function getObjectsTypesFromAPI() {
  return new Promise<objectsTypesAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        light: 12,
        medium: 24,
        heavy: 16,
        fragile: 4
      });
    }, timeout);
  });
}

export function getCustomerResponsesFromAPI() {
  return new Promise<customersResponsesAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        nbResponseReceived                : 54,
        nbCustomersNotified               : 67,
        nbResponsesLessThanOneHour        : 120,
        nbResponsesLessThanTwoHours       : 80,
        nbResponsesLessThanSixHours       : 24,
        nbResponsesLessThanTwelveHours    : 10,
        nbResponsesLessThanTwentyFourHours: 4,
        nbResponsesMoreThanTwentyFourHours: 2
      });
    }, timeout);
  });
}

export function getCustomersReviewsFromAPI() {
  return new Promise<customersReviewsAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        nbOneStar   : 2,
        nbTwoStars  : 5,
        nbThreeStars: 8,
        nbFourStars : 17,
        nbFiveStars : 24
      });
    }, timeout);
  });
}
