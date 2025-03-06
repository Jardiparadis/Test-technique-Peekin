<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import type { WidgetChartProps } from '../../types/widgetChartProps.ts';

type PieWidgetData = {
  labels: string[];
  datasets: PieWidgetDataset[];
};

type PieWidgetDataset = {
  backgroundColor: string[];
  data: number[];
};

type PieWidgetProps = WidgetChartProps & {
  data: PieWidgetData;
};

/**
 * Display a pie chart, using values given in props
 * @prop title - Title that will be displayed in the widget header
 * @prop subtitle - Title
 * @prop icon - icon that will be displayed in the top left of the widget, in the header
 * @prop options - chart options, see Chart.js option object
 * @prop data - data that will be displayed by the chart, using Chart.js data structure
 */
const { title, subtitle, icon, options, data } = defineProps<PieWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text>
      <Pie :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>