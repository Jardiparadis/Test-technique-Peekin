<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import TextWidget from './TextWidget.vue';
  import LineChartWidget from './LineChartWidget.vue';
  import { useLostObjectsByMonthStore } from '../stores/lostObjectsByMonth';
  import PieChartWidget from "./PieChartWidget.vue";
  import BarChartWidget from "./BarChartWidget.vue";

  const savedTime = ref('');
  const store = useLostObjectsByMonthStore();

  onMounted(() => {
    savedTime.value = '16 j 12 h 45 min';
    store.update([
      {month: 'Janvier', nbLostObjects: 23},
      {month: 'Février', nbLostObjects: 12},
      {month: 'Mars'   , nbLostObjects: 9}
    ]);
  });

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 } // Animation is removed to avoid stuttering when mounting
  };
  const pieData = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 }
  };
  const barData = {
    labels: [
      '1 étoile',
      '2 étoiles',
      '3 étoiles',
      '4 étoiles',
      '5 étoiles',
    ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }
    ]
  }

</script>

<template>
  <div class="grid">

    <TextWidget title="Temps gagné" icon="mdi-timer-check-outline" class="time-saved-widget">
      <span class="font-weight-bold text-h5">
        {{ savedTime }}
      </span>
      <div style="margin-top: 1rem;">
        Temps de traitement estimé sans Keep'in:
        <div class="font-weight-bold text-h6">
          32j 18h 20 min
        </div>
      </div>
    </TextWidget>

    <LineChartWidget title="Objets perdus et restitués par mois" icon="mdi-timer-check-outline" class="lost-objects-widget">

    </LineChartWidget>

    <TextWidget title="Temps gagné" class="c">
      <div style="font-weight: bold">
        {{ savedTime }}
      </div>
      <div>
        Temps de traitement estimé sans Keep'in: 32j 18h 20 min
      </div>
    </TextWidget>

    <PieChartWidget title="Test" :options="pieOptions" :data="pieData" class="d"></PieChartWidget>

    <BarChartWidget title="Test Bar" :data="barData" :options="barOptions" class="e"></BarChartWidget>

  </div>
</template>

<style scoped>
.grid {
  margin: 20px;
  display: grid;
  gap: 12px;
  grid-template-areas:
    "TimeSaved LostObjects LostObjects Buttons"
    "RestituedObjects ResponseDelay ResponseDelay Reviews"
    "Responses Types . .";
}

.time-saved-widget {
  grid-area: TimeSaved;
}

.lost-objects-widget {
  grid-area: LostObjects;
}

.c {
  grid-area: Buttons;
}

.d {
  grid-area: RestituedObjects;
}

.e {
  grid-area: Reviews;
}
</style>