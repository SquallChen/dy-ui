<demo>
按钮尺寸
<p>添加属性 <code>size</code> 显示不同尺寸按钮</p>
</demo>
<template>
  <Button theme="primary" size="big">变大按钮</Button>
  <Button theme="primary">正常按钮</Button>
  <Button theme="primary" size="small">变小按钮</Button>
  <Button theme="primary" size="mini">超小按钮</Button>
</template>

<script lang="ts">
import {Button} from "../../lib/index";
export default {
  components: {
    Button,
  }
}
</script>