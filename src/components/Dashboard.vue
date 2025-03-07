<script setup lang="ts">
  import { computed } from 'vue';
  import TextWidget from './widgets/TextWidget.vue';
  import LineChartWidget from './widgets/LineChartWidget.vue';
  import PieChartWidget from './widgets/PieChartWidget.vue';
  import BarChartWidget from './widgets/BarChartWidget.vue';
  import { useSavedTimeStatsStore } from '../stores/savedTimeStats.ts';
  import { useReturnedObjectsStatsStore } from '../stores/returnedObjectsStats.ts';
  import { useObjectsTypesStatsStore } from '../stores/objectsTypesStats.ts';
  import { useCustomerResponseStatsStore } from '../stores/customerResponseStats.ts';
  import { useCustomerReviewStatsStore } from '../stores/customerReviewStats.ts';
  import { useRouter } from 'vue-router';
  import colors from '../colors.ts';
  import { Chart, type ChartDataset } from 'chart.js';

  const router = useRouter();

  /**
   * Convert a month number into its name, translated accord to the local parameter.
   * Ex: 1 -> January...
   * @param monthNumber Number of the month to translate
   * @param locale locale used for translation
   */
  function convertMonthNumberToName(monthNumber: number, locale: string) {
    return Intl.DateTimeFormat(locale, { month: 'long' }).format(new Date('' + monthNumber));
  }

  //
  const savedTimeStatsStore = useSavedTimeStatsStore();

  // Format data to be passed to charts about returned objects
  const returnedObjectsStore = useReturnedObjectsStatsStore();
  const returnedObjectsPieChartData = computed(() => {
    return {
      labels: ['Objets restitués', 'Objets trouvés non réclamés'],
      datasets: [
        {
          backgroundColor: [colors.lightGreen, colors.red],
          data: [returnedObjectsStore.totalReturnedObjects, returnedObjectsStore.totalRegisteredObjects - returnedObjectsStore.totalReturnedObjects]
        }
      ]
    };
  });
  const lostObjectsByMonthChartData = computed(() => {
    const chartData = {
      labels: [] as string[],
      datasets: [
        {
          label: 'Objets oubliés',
          backgroundColor: colors.red,
          data: [] as number[]
        },
        {
          label: 'Objets restitués',
          backgroundColor: colors.lightGreen,
          data: [] as number[]
        }
      ]
    };

    for (const info of returnedObjectsStore.monthlyStats) {
      chartData.labels.push(convertMonthNumberToName(info.month, 'fr'));
      chartData.datasets[0].data.push(info.nbLostObjects);
      chartData.datasets[1].data.push(info.nbReturnedObjects);
    }

    return chartData;
  });

  // Format data to be passed to chart about objects types
  const objectTypesStore = useObjectsTypesStatsStore();
  const objectsTypesPieChartData = computed(() => {
    return {
      labels: ['Légers', 'Moyens', 'Lourds', 'Fragiles'],
      datasets: [
        {
          backgroundColor: [colors.blue, colors.lightGreen, colors.yellow, colors.red],
          data: [objectTypesStore.light, objectTypesStore.medium, objectTypesStore.heavy, objectTypesStore.fragile]
        }
      ]
    };
  });

  // Format data to be passed to charts about customers responses
  const customerResponseStore = useCustomerResponseStatsStore();
  const responseRatePieChartData = computed(() => {
    return {
      labels: ['Clients ayant répondu', 'Clients avertis mais n\'ayant pas répondu'],
      datasets: [
        {
          backgroundColor: [colors.lightGreen, colors.red],
          data: [customerResponseStore.nbResponseReceived, customerResponseStore.nbCustomersNotified - customerResponseStore.nbResponseReceived]
        }
      ]
    };
  });
  const customerResponseTimeChartData = computed(() => {
    const chartData = {
      labels: ['< 1h', '< 2h', '< 6h', '< 12h', '< 24h', '> 24h'],
      datasets: [
        {
          label: 'Délai de réponse des clients',
          backgroundColor: colors.lightGreen,
          data: [] as number[]
        }
      ]
    };
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInLessThanOneHour);
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInLessThanTwoHours);
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInLessThanSixHours);
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInLessThanTwelveHours);
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInLessThanTwentyFourHours);
    chartData.datasets[0].data.push(customerResponseStore.nbResponsesInMoreThanTwentyFourHours);

    return chartData;
  });

  //Format data to be passed to chart about customers reviews
  const customerReviewStore = useCustomerReviewStatsStore();
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
          backgroundColor: [colors.green, colors.lightGreen, colors.yellow,
            colors.orange, colors.red],
          data: [
            customerReviewStore.nbFiveStars,
            customerReviewStore.nbFourStars,
            customerReviewStore.nbThreeStars,
            customerReviewStore.nbTwoStars,
            customerReviewStore.nbOneStar
          ]
        },
      ]
    };
  });

  // Widget base options
  const widgetOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 } // Animation is removed to avoid stuttering when mounting
  };

  // Bar chart specific options
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

  // Pie chart specific options
  const pieWidgetOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 0 }, // Animation is removed to avoid stuttering when mounting
    plugins: {
      legend: {
        labels: {
          generateLabels: (chart: Chart) => { // Customize labels to display the represented number next to it
            const datasets = chart.data.datasets as ChartDataset[];
            return datasets[0].data.map((data, i) => ({
              text: `${data} ${(chart.data.labels as string[])[i]}`,
              fillStyle: (datasets[0].backgroundColor as string[])[i],
            }));
          }
        }
      }
    }
  };

  // Send to the /news route
  function goToNews() {
    router.push('/news');
  }

  // Send to the /reviews route
  function goToReviews() {
    router.push('/reviews');
  }
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

    <div class="d-flex flex-column justify-center buttons-widget">
      <v-btn class="ma-4" prepend-icon="mdi-bullhorn-outline" size="large" @click="goToNews" id="news-button">
        Voir les dernières nouveautés
      </v-btn>
      <v-btn class="ma-4" prepend-icon="mdi-star-check-outline" size="large" @click="goToReviews" id="reviews-button">
        Voir les derniers avis
      </v-btn>
      <v-btn class="ma-4" prepend-icon="mdi-briefcase-plus-outline" size="large" id="reviews-button">
        Enregistrer un objet
      </v-btn>
    </div>

    <PieChartWidget
        title="Objets restitués"
        :subtitle="returnedObjectsStore.totalRegisteredObjects + ' objets enregistrés'"
        :options="pieWidgetOptions"
        :data="returnedObjectsPieChartData"
        icon="mdi-handshake-outline"
        class="returned-objects-widget">
    </PieChartWidget>

    <LineChartWidget
        title="Délai de réponse du client"
        icon="mdi-clock-time-eight-outline"
        :data="customerResponseTimeChartData"
        :options="widgetOptions"
        class="response-time-widget" >
    </LineChartWidget>

    <BarChartWidget
        title="Avis laissés par les clients"
        :subtitle="'Note moyenne: ' + customerReviewStore.getAverageNote + '/5 sur ' + customerReviewStore.getNbReviews + ' avis'"
        :data="customerReviewBarChartData"
        :options="barWidgetOptions"
        icon="mdi-star-outline"
        class="reviews-widget">
    </BarChartWidget>

    <PieChartWidget
        title="Taux de réponses"
        :subtitle="'Taux de réponse: ' + customerResponseStore.getResponseRate + '%'"
        :options="pieWidgetOptions"
        :data="responseRatePieChartData"
        icon="mdi-message-alert-outline"
        class="response-rate-widget">
    </PieChartWidget>

    <PieChartWidget
        title="Catégories d'objets oubliés"
        :options="pieWidgetOptions"
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
    "TimeSaved LostObjects LostObjects LostObjects Buttons"
    "ReturnedObjects Reviews Reviews ResponseRate ObjectTypes"
    "ResponseTime ResponseTime . . .";
  @media (max-width:801px)  {
    grid-template-areas:
      "TimeSaved"
      "LostObjects"
      "Buttons"
      "ReturnedObjects"
      "Reviews"
      "ResponseRate"
      "ObjectTypes"
      "ResponseTime";
  }
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
