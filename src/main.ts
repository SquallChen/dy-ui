import "./lib/dy.scss";
import "./index.scss";
import { router } from './router';
import { createApp } from 'vue'
import App from './App.vue'
import './lib/svg.js'

const app = createApp(App);
app.use(router)
app.mount('#app')
