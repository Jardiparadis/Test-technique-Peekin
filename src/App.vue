<script setup lang="ts">
import {onBeforeMount} from "vue";
import {useSavedTimeStatsStore} from "./stores/savedTimeStats.ts";
import {useReturnedObjectsStore} from "./stores/returnedObjects.ts";
import {useObjectsTypesStore} from "./stores/objectsTypes.ts";
import {useCustomerResponseStore} from "./stores/customerResponse.ts";
import {useCustomerReviewStore} from "./stores/customerReview.ts";

import {
  getSavedTimeStatsFromAPI,
  getReturnedObjectsFromAPI,
  getObjectsTypesFromAPI,
  getCustomerResponsesFromAPI,
  getCustomersReviewsFromAPI
} from "./mock.ts";

// Call mock functions
onBeforeMount(() => {
  const savedTimeStore = useSavedTimeStatsStore();
  const returnedObjectsStore = useReturnedObjectsStore();
  const objectsTypesStore = useObjectsTypesStore();
  const customerResponseStore = useCustomerResponseStore();
  const customerReviewStore = useCustomerReviewStore();

  getSavedTimeStatsFromAPI().then((data) => {
    savedTimeStore.update(data.savedTime, data.baseTime);
  });

  getReturnedObjectsFromAPI().then((data) => {
    returnedObjectsStore.update(data.totalReturnedObjects, data.totalRegisteredObjects, data.monthlyStats);
  });

  getObjectsTypesFromAPI().then((data) => {
    objectsTypesStore.update(data.light, data.medium, data.heavy, data.fragile);
  });

  getCustomerResponsesFromAPI().then((data) => {
    customerResponseStore.update(
        data.nbResponseReceived,
        data.nbCustomerWarned,
        data.nbResponsesLessThanOneHour,
        data.nbResponsesLessThanTwoHours,
        data.nbResponsesLessThanSixHours,
        data.nbResponsesLessThanTwelveHours,
        data.nbResponsesLessThanTwentyFourHours,
        data.nbResponsesMoreThanTwentyFourHours
    );
  });

  getCustomersReviewsFromAPI().then((data) => {
    customerReviewStore.update(data.nbOneStar, data.nbTwoStars, data.nbThreeStars, data.nbFourStars, data.nbFiveStars);
  });
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
