<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import TextWidget from './TextWidget.vue';
  import LineChartWidget from './LineChartWidget.vue';
  import { useLostObjectsByMonthStore } from '../stores/lostObjectsByMonth';
  import PieChartWidget from "./PieChartWidget.vue";
  import BarChartWidget from "./BarChartWidget.vue";
  import {useSavedTimeStatsStore} from "../stores/savedTimeStats.ts";

  const savedTime = ref('');
  const baseTime = ref('');
  const store = useLostObjectsByMonthStore();


  onMounted(() => {
    savedTime.value = '16 j 12 h 45 min';
    store.update([
      {month: 'Janvier', nbLostObjects: 23},
      {month: 'Février', nbLostObjects: 12},
      {month: 'Mars'   , nbLostObjects: 9}
    ]);

    const savedTimeStore = useSavedTimeStatsStore();
    savedTime.value = savedTimeStore.savedTime;
    baseTime.value = savedTimeStore.baseTime;

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
          {{ baseTime }}
        </div>
      </div>
    </TextWidget>

    <LineChartWidget title="Objets perdus et restitués par mois" icon="mdi-hand-extended-outline" class="lost-objects-widget">
    </LineChartWidget>

    <TextWidget title="-" class="buttons-widget">
      <v-btn>Voir les dernières nouveautés</v-btn>
      <v-btn>Voir les derniers avis</v-btn>
    </TextWidget>

    <PieChartWidget title="Objets restitués" :options="pieOptions" :data="pieData" icon="mdi-handshake-outline" class="returned-objects-widget">
    </PieChartWidget>

    <LineChartWidget title="Délai de réponse du client" icon="mdi-clock-time-eight-outline" class="response-time-widget">
    </LineChartWidget>

    <BarChartWidget title="Avis laissés" :data="barData" :options="barOptions" icon="mdi-star-outline" class="reviews-widget">
    </BarChartWidget>

    <PieChartWidget title="Taux de réponses" :options="pieOptions" :data="pieData" icon="mdi-message-alert-outline" class="response-rate-widget">
    </PieChartWidget>

    <PieChartWidget title="Types d'objets oubliés" :options="pieOptions" :data="pieData" icon="mdi-briefcase-outline" class="object-types-widget">
    </PieChartWidget>

  </div>
</template>

<style scoped>
.grid {
  margin: 20px;
  display: grid;
  gap: 12px;
  grid-template-areas:
    "TimeSaved LostObjects LostObjects Buttons"
    "ReturnedObjects ResponseTime ResponseTime Reviews"
    "ResponseRate ObjectTypes . .";
}

.time-saved-widget {
  grid-area: TimeSaved;
}

.lost-objects-widget {
  grid-area: LostObjects;
}

.buttons-widget {
  grid-area: Buttons;
}

.returned-objects-widget {
  grid-area: ReturnedObjects;
}

.response-time-widget {
  grid-area: ResponseTime;
}

.reviews-widget {
  grid-area: Reviews;
}

.response-rate-widget {
  grid-area: ResponseRate;
}

.object-types-widget {
  grid-area: ObjectTypes;
}
</style>
