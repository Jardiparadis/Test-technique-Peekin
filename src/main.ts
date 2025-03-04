import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import { createMemoryHistory, createRouter } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

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
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
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
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

app.use(router).use(pinia).use(vuetify);
app.mount('#app');
