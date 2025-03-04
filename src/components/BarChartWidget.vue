<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue';
import { Bar } from 'vue-chartjs'

type BarWidgetOption = {
  responsive         : boolean;
  maintainAspectRatio: boolean;
};

type BarWidgetData = {
  labels  : string[];
  datasets: BarWidgetDataset[];
}

type BarWidgetDataset = {
  label          : string;
  backgroundColor: string;
  data           : number[];
}

type BarWidgetProps = {
  title   : string;
  icon?   : string;
  options : BarWidgetOption;
  data    : BarWidgetData;
}

const { title, icon, options, data } = defineProps<BarWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-text>
      <Bar :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>