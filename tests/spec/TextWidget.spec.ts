import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import resize_observer_polyfill from 'resize-observer-polyfill';
import TextWidget from '../../src/components/widgets/TextWidget.vue';

const vuetify = createVuetify({
    components,
    directives,
});

global.ResizeObserver = resize_observer_polyfill;

describe('TextWidget', () => {
    test('Test title prop', () => {
        const wrapper = mount({
            template: '<v-layout><text-widget title="testTitle"></text-widget></v-layout>'
        }, {
            props: {},
            global: {
                components: {
                    TextWidget,
                },
                plugins: [vuetify],
            }
        });

        expect(wrapper.text()).toContain('testTitle');
    });

    test('Test icon prop', () => {
        const wrapper = mount({
            template: '<v-layout><text-widget title="title" icon="mdi-message-alert-outline"></text-widget></v-layout>'
        }, {
            props: {},
            global: {
                components: {
                    TextWidget,
                },
                plugins: [vuetify],
            }
        });

        assert.exists(wrapper.find('i.mdi-message-alert-outline'), 'icon exists');
    });

    test('Test slot display', () => {
        const slotContent = 'Test slot';
        const wrapper = mount({
            template: `<v-layout><text-widget title="title">${slotContent}</text-widget></v-layout>`
        }, {
            props: {},
            global: {
                components: {
                    TextWidget,
                },
                plugins: [vuetify],
            }
        });

        expect(wrapper.text()).toContain(slotContent);
    });
});
