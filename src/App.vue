<script setup lang="ts">
import {onBeforeMount} from "vue";
import { useSavedTimeStatsStore } from "./stores/savedTimeStats.ts";
import {useReturnedObjectsStore} from "./stores/returnedObjects.ts";

// Mock will be placed here
onBeforeMount(() => {
  const savedTimeStore = useSavedTimeStatsStore();
  savedTimeStore.update('16 j 12 h 45 min', '32 j 18h 21 min');

  const returnedObjectsStore = useReturnedObjectsStore();
  returnedObjectsStore.update(205, 234, [
    { month: 'Janvier', nbLostObjects: 52, nbReturnedObjects: 34 },
    { month: 'Février', nbLostObjects: 32, nbReturnedObjects: 28 },
    { month: 'Mars', nbLostObjects: 41, nbReturnedObjects: 16 }
  ]);
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
