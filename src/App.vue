<script setup lang="ts">
import {onBeforeMount} from "vue";
import {useSavedTimeStatsStore} from "./stores/savedTimeStats.ts";
import {useReturnedObjectsStore} from "./stores/returnedObjects.ts";
import {useObjectsTypesStore} from "./stores/objectsTypes.ts";
import {useCustomerResponseStore} from "./stores/customerResponse.ts";
import {useCustomerReviewStore} from "./stores/customerReview.ts";

// TODO Widget Mixin

// Mock will be placed here
onBeforeMount(() => {
  setTimeout(() => {
    const savedTimeStore = useSavedTimeStatsStore();
    savedTimeStore.update('16 j 12 h 45 min', '32 j 18h 21 min');

    const returnedObjectsStore = useReturnedObjectsStore();
    returnedObjectsStore.update(205, 234, [
      { month: 'Janvier', nbLostObjects: 52, nbReturnedObjects: 34 },
      { month: 'Février', nbLostObjects: 32, nbReturnedObjects: 28 },
      { month: 'Mars', nbLostObjects: 41, nbReturnedObjects: 16 }
    ]);

    const objectsTypesStore = useObjectsTypesStore();
    objectsTypesStore.update(12, 24, 16, 4);

    const customerResponseStore = useCustomerResponseStore();
    customerResponseStore.update(54, 67);

    const customerReviewStore = useCustomerReviewStore();
    customerReviewStore.update(2, 5, 8, 17, 24);
  }, 2000)
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
