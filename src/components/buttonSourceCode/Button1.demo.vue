<demo>
基础按钮
<p></p>
</demo>
<template>
  <Button theme="primary">主要按钮</Button>
  <Button theme="default">次要按钮</Button>
  <Button theme="text">文字按钮</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  }
}
</script>