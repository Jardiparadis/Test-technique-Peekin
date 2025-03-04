<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import TextWidget from './TextWidget.vue';
  const savedTime = ref('');

  onMounted(() => {
    savedTime.value = '16 j 12 h 45 min';
  });
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

    <TextWidget title="Temps gagné" class="b">
      <div style="font-weight: bold">
        {{ savedTime }}
      </div>
      <div>
        Temps de traitement estimé sans Keep'in: 32j 18h 20 min
      </div>
    </TextWidget>
    <TextWidget title="Temps gagné" class="c">
      <div style="font-weight: bold">
        {{ savedTime }}
      </div>
      <div>
        Temps de traitement estimé sans Keep'in: 32j 18h 20 min
      </div>
    </TextWidget>
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

.b {
  grid-area: LostObjects;
}

.c {
  grid-area: Buttons;
}
</style>