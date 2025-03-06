<script setup lang="ts">
import { defineProps } from 'vue';
import { Line } from 'vue-chartjs';
import type { WidgetChartProps } from '../../types/widgetChartProps.ts';

type lineWidgetData = {
  labels: string[];
  datasets: lineWidgetDataset[];
};

type lineWidgetDataset = {
  label: string;
  backgroundColor: string;
  data: number[];
};

type lineWidgetProps = WidgetChartProps & {
  data: lineWidgetData;
};

/**
 * Display a line chart, using values given in props
 * @prop title - Title that will be displayed in the widget header
 * @prop icon - icon that will be displayed in the top left of the widget, in the header
 * @prop options - chart options, see Chart.js option object
 * @prop data - data that will be displayed by the chart, using Chart.js data structure
 */
const { title, icon, options, data } = defineProps<lineWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text>
      <Line :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>