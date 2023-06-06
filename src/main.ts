import { createApp } from 'vue';
import { createPinia } from 'pinia';

import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';
import { genesisIcons } from '@formkit/icons';
// @ts-ignore
import genesis from '@formkit/themes/tailwindcss/genesis';

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  plugin,
  defaultConfig({
    icons: {
      ...genesisIcons
    },
    config: {
      classes: generateClasses(genesis)
    }
  })
);

app.mount('#app');
