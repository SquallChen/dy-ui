<demo>
加载中按钮
<p>添加属性 <code>loading</code> 显示加载状态按钮</p>
</demo>
<template>
  <Button loading>加载中</Button>
  <Button loading></Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  }
}
</script>