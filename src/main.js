import { createApp } from 'vue'
import App from './App.vue'
import Tres from '@tresjs/core';

import './registerServiceWorker'
import './index.css'
import './assets/css/animation.css'

createApp(App).use(Tres).mount('#app')
