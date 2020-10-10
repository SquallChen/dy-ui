<template>
  <div class=" dy-container">
    <h1>Dialog 示例</h1>
    <hr />
  </div>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Dialog1Demo from './dialogSourceCode/Dialog1.demo.vue'
import Dialog2Demo from './dialogSourceCode/Dialog2.demo.vue'
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Dialog1Demo,
      Dialog2Demo
    };
  },
};
</script>