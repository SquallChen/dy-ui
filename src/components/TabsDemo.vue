<template>
  <div class=" dy-container">
    <h1>tabs 示例</h1>
    <hr />
    <Demo :component="tab1Demo" />
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import tab1Demo from './tabsSourceCode/tab1.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      tab1Demo
    };
  },
};
</script>