<script setup lang="ts">
import { defineProps } from 'vue';

type TextWidgetProps = {
  title: string;
  icon?: string;
}

/**
 * Display a widget that should contains text that should be displayed in slot,
 * so we have full control on the customization
 * @prop title - Title that will be displayed in the widget header
 * @prop icon - icon that will be displayed in the top left of the widget, in the header
 */
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