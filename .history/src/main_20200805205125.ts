import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router';
import dy from './components/dy.vue';
const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes:[
    {path:'/',component:dy},
    {path:'/xxx',component:dy},
  ]
})
const app = createApp(App);
app.use(router)
app.mount('#app')
