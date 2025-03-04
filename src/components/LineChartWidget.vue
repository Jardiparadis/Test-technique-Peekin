<script setup lang="ts">
import { defineProps, ref, onMounted, computed } from 'vue';
import { Line } from 'vue-chartjs'
import { useLostObjectsByMonthStore } from '../stores/lostObjectsByMonth';

type TextWidgetProps = {
  title: string;
  icon?: string;
}

type lineChartData = {
  label: string;
  backgroundColor: string;
  data: number[];
}

const store = useLostObjectsByMonthStore();
const { title, icon } = defineProps<TextWidgetProps>();
const barLabels = ref<string[]>();
const dataset = ref<lineChartData[]>([]);

const data = computed(() => {
  const barData = {
    labels  : [] as string[],
    datasets: [
      {
        label: 'Objets trouvés',
        backgroundColor: '#f87979',
        data: [] as number[]
      },
      {
        label: 'Objets restitués',
        backgroundColor: '#89ac76',
        data: [] as number[]
      }
    ]
  };

  for (const lostObject of store.getLostObjectsByMonth) {
    if (barData.labels.find(elem => lostObject.month === elem) === undefined) {
      barData.labels.push(lostObject.month);
      barData.datasets[0].data.push(lostObject.nbLostObjects);
    }
  }

  return barData;
})

onMounted(() => {
  barLabels.value = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];
  dataset.value = [
    {
      label: 'Objets trouvés',
      backgroundColor: '#f87979',
      data: [12, 9, 16, 24, 18, 19, 11]
    },
    {
      label: 'Objets restitués',
      backgroundColor: '#89ac76',
      data: [10, 9, 8, 21, 17, 15, 7]
    }
  ];
})

</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-subtitle>
      Objets perdus en stock: 11
    </v-card-subtitle>
    <v-card-text>
      <Line :data="data" :options="{responsive: true, maintainAspectRatio: false }" />
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>