import { createApp } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import App from './App.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);

// close debug mode in production
const isDebugMode = process.env.VUE_APP_ENV !== 'production';
app.config.debug = isDebugMode;
app.config.devtools = isDebugMode;

app.mount('#app');
