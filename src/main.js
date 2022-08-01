import { createApp } from 'vue';
import { Quasar } from 'quasar';
import Router from './router.js';
import App from './App.vue';

import 'quasar/src/css/index.sass';
import './style/index.sass';
import '@quasar/extras/material-icons/material-icons.css';

const app = createApp(App);

app.use(Quasar, {
    plugins: {},
}).use(Router);

app.mount('#app');
