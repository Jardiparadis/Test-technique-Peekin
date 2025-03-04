<script setup lang="ts">
import {onBeforeMount} from "vue";
import { useSavedTimeStatsStore } from "./stores/savedTimeStats.ts";

// Mock will be placed here
onBeforeMount(() => {
  const savedTimeStore = useSavedTimeStatsStore();

  savedTimeStore.savedTime = '16 j 12 h 45 min';
  savedTimeStore.baseTime = '32 j 18h 21 min';
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
