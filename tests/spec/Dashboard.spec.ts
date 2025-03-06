import { mount } from '@vue/test-utils';
import { beforeEach, expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import Dashboard from '../../src/components/Dashboard.vue';
import Empty from '../../src/components/Empty.vue';
import { createRouter, createWebHistory, Router } from 'vue-router';
import resize_observer_polyfill from 'resize-observer-polyfill';
import { createTestingPinia } from '@pinia/testing';
import 'vitest-canvas-mock';

global.ResizeObserver = resize_observer_polyfill;

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: '/', component: Dashboard },
  { path: '/news', component: Empty },
  { path: '/reviews', component: Empty }
];

let router: Router;

describe('Dashboard', () => {
  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes
    });
  });

  test('Test news button redirection', async () => {
    const wrapper = mount({
      template: '<v-layout><dashboard></dashboard></v-layout>'
    }, {
      props: {},
      global: {
        components: {
          Dashboard
        },
        plugins: [vuetify, router, createTestingPinia()],
      }
    });
    await wrapper.find('#news-button').trigger('click');
    await router.isReady();

    expect(router.currentRoute.value.path).toBe('/news');
  });

  test('Test reviews button redirection', async () => {
    const wrapper = mount({
      template: '<v-layout><dashboard></dashboard></v-layout>'
    }, {
      props: {},
      global: {
        components: {
          Dashboard
        },
        plugins: [vuetify, router, createTestingPinia()],
      }
    });
    await wrapper.find('#reviews-button').trigger('click');
    await router.isReady();

    expect(router.currentRoute.value.path).toBe('/reviews');
  });
});


