<demo>
带有色彩倾向的按钮
<p>添加属性 <code>theme</code> 加载默认色彩倾向按钮</p>
</demo>
<template>
  <div>
    <Button hollow>默认按钮</Button>
    <Button hollow theme="primary">主要按钮</Button>
    <Button hollow theme="success">成功按钮</Button>
    <Button hollow theme="error">危险按钮</Button>
    <Button hollow theme="warning">警告按钮</Button>
    <Button hollow theme="info">信息按钮</Button>
  </div>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="error">危险按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="info">信息按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button,
  }
}
</script>