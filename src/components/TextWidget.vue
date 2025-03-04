<script setup lang="ts">
import { defineProps } from 'vue';

type TextWidgetProps = {
  title: string;
  icon?: string;
}

const { title, icon } = defineProps<TextWidgetProps>();
</script>

<template>
  <v-card elevation="2" :title="title" :prepend-icon="icon">
    <v-divider></v-divider>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>