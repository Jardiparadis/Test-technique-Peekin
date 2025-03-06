<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useSavedTimeStatsStore } from "./stores/savedTimeStats.ts";
import { useReturnedObjectsStatsStore } from "./stores/returnedObjectsStats.ts";
import { useObjectsTypesStatsStore } from "./stores/objectsTypesStats.ts";
import { useCustomerResponseStatsStore } from "./stores/customerResponseStats.ts";
import { useCustomerReviewStatsStore } from "./stores/customerReviewStats.ts";

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
  const returnedObjectsStore = useReturnedObjectsStatsStore();
  const objectsTypesStore = useObjectsTypesStatsStore();
  const customerResponseStore = useCustomerResponseStatsStore();
  const customerReviewStore = useCustomerReviewStatsStore();

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
