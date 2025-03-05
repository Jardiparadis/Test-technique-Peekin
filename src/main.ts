import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import Empty from './components/Empty.vue';

// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// ChartJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const pinia = createPinia();

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

// Vue router configuration
const routes = [
  { path: '/', component: Dashboard },
  { path: '/news', component: Empty },
  { path: '/reviews', component: Empty }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router).use(pinia).use(vuetify);
app.mount('#app');
