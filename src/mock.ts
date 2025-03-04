import type {monthStats} from "./stores/returnedObjects.ts";

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
  nbCustomerWarned                  : number,
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

export function getSavedTimeStatsFromAPI() {
  return new Promise<savedTimeStatsAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        savedTime: '16 j 12 h 45 min',
        baseTime: '32 j 18h 21 min'
      });
    }, 2000);
  });
}

export function getReturnedObjectsFromAPI() {
  return new Promise<returnedObjectsAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        totalReturnedObjects: 205,
        totalRegisteredObjects: 234,
        monthlyStats: [
          { nbReturnedObjects: 5, nbLostObjects: 3, month: 'Janvier'},
          { nbReturnedObjects: 7, nbLostObjects: 8, month: 'Février'},
          { nbReturnedObjects: 9, nbLostObjects: 1, month: 'Mars'},
          { nbReturnedObjects: 4, nbLostObjects: 4, month: 'Avril'},
          { nbReturnedObjects: 5, nbLostObjects: 3, month: 'Mai'},
          { nbReturnedObjects: 2, nbLostObjects: 9, month: 'Juin'},
        ]
      });
    }, 2000);
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
    }, 2000);
  });
}

export function getCustomerResponsesFromAPI() {
  return new Promise<customersResponsesAPI>((resolve) => {
    setTimeout(() => {
      resolve({
        nbResponseReceived                : 54,
        nbCustomerWarned                  : 67,
        nbResponsesLessThanOneHour        : 120,
        nbResponsesLessThanTwoHours       : 80,
        nbResponsesLessThanSixHours       : 24,
        nbResponsesLessThanTwelveHours    : 10,
        nbResponsesLessThanTwentyFourHours: 4,
        nbResponsesMoreThanTwentyFourHours: 2
      });
    }, 2000);
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
    }, 2000);
  });
}