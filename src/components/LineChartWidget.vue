<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue';
import { Line } from 'vue-chartjs'
import type { WidgetOption } from '../types/widgetOptions.ts';

type lineWidgetData = {
  labels: string[];
  datasets: lineWidgetDataset[];
};

type lineWidgetDataset = {
  label: string;
  backgroundColor: string;
  data: number[];
};

type lineWidgetProps = {
  title   : string;
  icon?   : string;
  options : WidgetOption;
  data    : lineWidgetData;
};

const { title, icon, options, data } = defineProps<lineWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-text>
      <Line :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>