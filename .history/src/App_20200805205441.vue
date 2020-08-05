<template>
  <div> 导航栏 ｜ <router-link to="/">dy1</router-link> <router-link to="/xxx">dy2</router-link></div>
  <hr/>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>
