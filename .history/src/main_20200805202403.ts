import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router';
import dy from 'module';
const history = createWebHashHistory()
const router = createRouter({
  history,
  router:[
    {path:'/',component:dy}
  ]
})
createApp(App).mount('#app')