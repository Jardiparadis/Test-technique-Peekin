<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue';
import { Pie } from 'vue-chartjs'
import type { WidgetOption } from '../types/widgetOptions.ts';

type PieWidgetData = {
  labels  : string[];
  datasets: PieWidgetDataset[];
};

type PieWidgetDataset = {
  backgroundColor: string[];
  data           : number[];
};

type PieWidgetProps = {
  title    : string;
  subtitle?: string;
  icon?    : string;
  options  : WidgetOption;
  data     : PieWidgetData;
};

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