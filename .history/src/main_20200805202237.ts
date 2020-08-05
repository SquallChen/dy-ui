import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router';
const history = createWebHashHistory()
const router = createRouter({history,})
createApp(App).mount('#app')
