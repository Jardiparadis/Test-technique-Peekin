<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import TextWidget from './TextWidget.vue';
  import LineChartWidget from './LineChartWidget.vue';
  import PieChartWidget from "./PieChartWidget.vue";
  import BarChartWidget from "./BarChartWidget.vue";
  import {useSavedTimeStatsStore} from "../stores/savedTimeStats.ts";
  import {useReturnedObjectsStore} from "../stores/returnedObjects.ts";
  import {useObjectsTypesStore} from "../stores/objectsTypes.ts";
  import {useCustomerResponseStore} from "../stores/customerResponse.ts";
  import {useCustomerReviewStore} from "../stores/customerReview.ts";
  import {useLostAndReturnedObjectsByMonthStore} from "../stores/lostAndReturnedObjectsByMonth.ts";

  //
  const savedTimeStatsStore = useSavedTimeStatsStore();

  //
  const returnedObjectsStore = useReturnedObjectsStore();
  const returnedObjectsPieChartData = computed(() => {
    return {
      labels: ['Objets restitués', 'Objets non réclamés'],
      datasets: [
        {
          backgroundColor: ['#8cc640', '#d52027'],
          data: [returnedObjectsStore.totalReturnedObjects, returnedObjectsStore.totalRegisteredObjects - returnedObjectsStore.totalReturnedObjects]
        }
      ]
    }
  });

  //
  const objectTypesStore = useObjectsTypesStore();
  const objectsTypesPieChartData = computed(() => {
    return {
      labels: ['Léger', 'Moyen', 'Lourd', 'Fragile'],
      datasets: [
        {
          backgroundColor: ['#2357bc', '#8cc640', '#fbb40f', '#d52027'],
          data: [objectTypesStore.light, objectTypesStore.medium, objectTypesStore.heavy, objectTypesStore.fragile]
        }
      ]
    }
  });

  //
  const customerResponseStore = useCustomerResponseStore();
  const responseRatePieChartData = computed(() => {
    return {
      labels: ['Réponses reçues', 'Clients avertis mais n\'ayant pas répondu'],
      datasets: [
        {
          backgroundColor: ['#8cc640', '#d52027'],
          data: [customerResponseStore.nbResponseReceived, customerResponseStore.nbCustomerWarned - customerResponseStore.nbResponseReceived]
        }
      ]
    }
  });

  //
  const customerReviewStore = useCustomerReviewStore();
  const customerReviewBarChartData = computed(() => {
    return {
      labels: [
        '5 étoile',
        '4 étoiles',
        '3 étoiles',
        '2 étoiles',
        '1 étoiles',
      ],
      datasets: [
        {
          label: '',
          backgroundColor: ['#07b151', '#8cc640', '#fbb40f', '#f36621', '#d52027'],
          data: [
            customerReviewStore.nbFiveStars,
            customerReviewStore.nbFourStars,
            customerReviewStore.nbThreeStars,
            customerReviewStore.nbTwoStars,
            customerReviewStore.nbOneStar
          ]
        },
      ]
    }
  });

  //
  const lostObjectsByMonth = useLostAndReturnedObjectsByMonthStore();
  const lostObjectsByMonthChartData = computed(() => {
    const chartData = {
      labels: [] as string[],
      datasets: [
        {
          label: 'Objets oubliés',
          backgroundColor: '#d52027',
          data: [] as number[]
        },
        {
          label: 'Objets restitués',
          backgroundColor: '#07b151',
          data: [] as number[]
        }
      ]
    };

    for (const info of lostObjectsByMonth.lostAndReturnedObjectsByMonth) {
      chartData.labels.push(info.month);
      chartData.datasets[0].data.push(info.nbLostObjects);
      chartData.datasets[1].data.push(info.nbReturnedObjects);
    }

    return chartData;
  });

  //
  const customerResponseTimeStore = useCustomerResponseStore();
  const customerResponseTimeChartData = computed(() => {
    const chartData = {
      labels: ['< 1h', '< 2h', '< 6h', '< 12h', '< 24h', '> 24h'],
      datasets: [
        {
          label: 'Temps de réponse des clients',
          backgroundColor: '#07b151',
          data: [] as number[]
        }
      ]
    };
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInLessThanOneHour);
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInLessThanTwoHours);
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInLessThanSixHours);
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInLessThanTwelveHours);
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInLessThanTwentyFourHours);
    chartData.datasets[0].data.push(customerResponseTimeStore.nbResponsesInMoreThanTwentyFourHours);

    return chartData;
  });


  const widgetOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 } // Animation is removed to avoid stuttering when mounting
  };

  const barWidgetOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 }, // Animation is removed to avoid stuttering when mounting
    plugins: {
      legend: {
        display: false
      }
    }
  };
</script>

<template>
  <div class="grid">

    <TextWidget title="Temps gagné" icon="mdi-timer-check-outline" class="time-saved-widget">
      <div class="font-weight-bold text-h5 mt-4">
        {{ savedTimeStatsStore.savedTime }}
      </div>
      <div class="mt-8">
        Temps de traitement estimé sans Keep'in:
        <div class="font-weight-bold text-h6">
          {{ savedTimeStatsStore.baseTime }}
        </div>
      </div>
    </TextWidget>

    <LineChartWidget
        title="Objets perdus et restitués par mois"
        icon="mdi-hand-extended-outline"
        :data="lostObjectsByMonthChartData"
        :options="widgetOptions"
        class="lost-objects-widget" >
    </LineChartWidget>

    <TextWidget title="-" class="buttons-widget">
      <v-btn>Voir les dernières nouveautés</v-btn>
      <v-btn>Voir les derniers avis</v-btn>
    </TextWidget>

    <PieChartWidget
        title="Objets restitués"
        :subtitle="returnedObjectsStore.totalRegisteredObjects + ' objets enregistrés'"
        :options="widgetOptions"
        :data="returnedObjectsPieChartData"
        icon="mdi-handshake-outline"
        class="returned-objects-widget">
    </PieChartWidget>

    <LineChartWidget title="Délai de réponse du client" icon="mdi-clock-time-eight-outline" :data="customerResponseTimeChartData" :options="widgetOptions" class="response-time-widget" >
    </LineChartWidget>

    <BarChartWidget
        title="Avis laissés par les clients"
        :data="customerReviewBarChartData"
        :options="barWidgetOptions"
        icon="mdi-star-outline"
        class="reviews-widget">
    </BarChartWidget>

    <PieChartWidget
        title="Taux de réponses"
        :options="widgetOptions"
        :data="responseRatePieChartData"
        icon="mdi-message-alert-outline"
        class="response-rate-widget">
    </PieChartWidget>

    <PieChartWidget
        title="Catégories d'objets oubliés"
        :options="widgetOptions"
        :data="objectsTypesPieChartData"
        icon="mdi-briefcase-outline"
        class="object-types-widget">
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
