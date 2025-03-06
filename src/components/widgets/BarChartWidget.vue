<script setup lang="ts">
import {defineProps} from 'vue';
import {Bar} from 'vue-chartjs';
import type {WidgetOption} from '../../types/widgetOptions.ts';

type BarWidgetData = {
  labels  : string[];
  datasets: BarWidgetDataset[];
}

type BarWidgetDataset = {
  label          : string;
  backgroundColor: string[];
  data           : number[];
}

type BarWidgetProps = {
  title   : string;
  subtitle?: string;
  icon?   : string;
  options : WidgetOption;
  data    : BarWidgetData;
}

const { title, icon, options, data } = defineProps<BarWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text>
      <Bar :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>