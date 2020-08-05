import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router';
import dy from './components/dy.vue';
import dy2 from './components/dy2.vue';
const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes:[
    {path:'/',component:dy},
    {path:'/xxx',component:dy2},
  ]
})
const app = createApp(App);
app.use(router)
app.mount('#app')
