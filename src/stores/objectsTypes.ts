import { defineStore } from 'pinia';

export const useObjectsTypesStore = defineStore('objectsTypes', {
  state: () => ({
    light: 0,
    medium: 0,
    heavy: 0,
    fragile: 0
  }),
  actions: {
    update(light: number, medium: number, heavy: number, fragile: number) {
      this.light = light;
      this.medium = medium;
      this.heavy = heavy;
      this.fragile = fragile;
    }
  }
});
