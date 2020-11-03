<demo>
不可用状态按钮
<p>添加属性 <code>disabled</code> 禁用按钮</p>
</demo>
<template>
  <Button theme="primary" disabled>主要按钮</Button>
  <Button theme="default" disabled>次要按钮</Button>
  <Button theme="text" disabled>文字按钮</Button>
</template>

<script lang="ts">
import {Button} from "../../lib/index";
export default {
  components: {
    Button,
  }
}
</script>