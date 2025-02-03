import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue3 } from 'bootstrap-vue-3';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(BootstrapVue3);
app.mount('#app');
