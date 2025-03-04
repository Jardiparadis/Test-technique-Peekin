<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue';
import { Pie } from 'vue-chartjs'

type PieWidgetOption = {
  responsive         : boolean;
  maintainAspectRatio: boolean;
};

type PieWidgetData = {
  labels  : string[];
  datasets: PieWidgetDataset[];
}

type PieWidgetDataset = {
  backgroundColor: string[];
  data           : number[];
}

type PieWidgetProps = {
  title   : string;
  icon?   : string;
  options : PieWidgetOption;
  data    : PieWidgetData;
}

const { title, icon, options, data } = defineProps<PieWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-text>
      <Pie :data="data" :options="options" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>