<template>
  <div> 导航栏 ｜ <router-link to="/"></router-link> </div>
  <hr/>
  <router-view></router-view>
</template>

<script>
import dy from './components/dy.vue'

export default {
  name: 'App',
}
</script>
