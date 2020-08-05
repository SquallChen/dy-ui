import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router';
const history = createWebHashHistory()
const touter = createWebHashHistory()
createApp(App).mount('#app')
