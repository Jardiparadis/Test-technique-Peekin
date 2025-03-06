import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import resize_observer_polyfill from 'resize-observer-polyfill';
import BarChartWidget from '../../src/components/widgets/BarChartWidget.vue';
import 'vitest-canvas-mock';

const vuetify = createVuetify({
  components,
  directives,
});

global.ResizeObserver = resize_observer_polyfill;

describe('BarChartWidget', () => {
  test('Test title prop', () => {
    const wrapper = mount({
      template: '<v-layout><bar-chart-widget title="testTitle" :data="dataset" :options="{}"></bar-chart-widget></v-layout>'
    }, {
      data() {
        return {
          dataset: {
            labels: ['Test1', 'Test2'],
            datasets: [
              { backgroundColor: ['#41B883', '#E46651'], data: [40, 20] }
            ]
          }
        };
      },
      global: {
        components: {
          BarChartWidget,
        },
        plugins: [vuetify],
      }
    });

    expect(wrapper.text()).toContain('testTitle');
  });

  test('Test subtitle prop', () => {
    const wrapper = mount({
      template: '<v-layout><bar-chart-widget title="testTitle" subtitle="testSubtitle" :data="dataset" :options="{}"></bar-chart-widget></v-layout>'
    }, {
      data() {
        return {
          dataset: {
            labels: ['Test1', 'Test2'],
            datasets: [
              { backgroundColor: ['#41B883', '#E46651'], data: [40, 20] }
            ]
          }
        };
      },
      global: {
        components: {
          BarChartWidget,
        },
        plugins: [vuetify],
      }
    });

    expect(wrapper.text()).toContain('testSubtitle');
  });

  test('Test icon prop', () => {
    const wrapper = mount({
      template: '<v-layout><bar-chart-widget title="testTitle" :data="dataset" :options="{}" icon="mdi-message-alert-outline"></bar-chart-widget></v-layout>'
    }, {
      data() {
        return {
          dataset: {
            labels: ['Test1', 'Test2'],
            datasets: [
              { backgroundColor: ['#41B883', '#E46651'], data: [40, 20] }
            ]
          }
        };
      },
      global: {
        components: {
          BarChartWidget,
        },
        plugins: [vuetify],
      }
    });

    assert.exists(wrapper.find('i.mdi-message-alert-outline'), 'icon exists');
  });

  test('Test chart drawn', () => {
    const wrapper = mount({
      template: '<v-layout><bar-chart-widget title="testTitle" :data="dataset" :options="{}" icon="mdi-message-alert-outline"></bar-chart-widget></v-layout>'
    }, {
      data() {
        return {
          dataset: {
            labels: ['Test1', 'Test2'],
            datasets: [
              { backgroundColor: ['#41B883', '#E46651'], data: [40, 20] }
            ]
          }
        };
      },
      global: {
        components: {
          BarChartWidget,
        },
        plugins: [vuetify],
      }
    });

    assert.exists(wrapper.find('canvas'), 'canvas exists');
  });
});
