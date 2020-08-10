<template>
  <div>
    button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button><slot/></Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/button.vue';

export default {
  components:{Button}
}
</script>