<demo>
不同尺寸
<p>添加属性 <code>size</code> 可设置按钮的尺寸大小，默认提供三种尺寸：big，normal，small</p>
</demo>
<template>
<Switch v-model:value="bool1" size="big"/>
<Switch v-model:value="bool2" />
<Switch v-model:value="bool3" size="small"/>
</template>

<script lang="ts">
import {Switch} from '../../lib/index'
import {
  ref
} from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool1 = ref(false)
    const bool2 = ref(false)
    const bool3 = ref(false)
    return {
      bool1,
      bool2,
      bool3,
    }
  }
}
</script>