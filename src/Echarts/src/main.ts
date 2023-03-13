import { createApp } from 'vue'
import App from './App.vue'
import reg from '../src/components/Echarts/reg'


createApp(App)
    .use(reg)
    .mount('#app')
