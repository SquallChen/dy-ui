<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup(props) {
    let width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    const resize = window.addEventListener('resize',()=>{
      width = document.documentElement.clientWidth;
    })
    provide("menuVisible", menuVisible);
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
