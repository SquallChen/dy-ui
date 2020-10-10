<demo>
Dialog 示例2
<p>以数据驱动的形式加载</p>
</demo>
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog=()=>{
      openDialog({
        title:'标题1',
        content:'你好',
        ok(){
          console.log('ok');
        },
        cancel(){
          console.log('cancel');
        }
      })
    }
    return {
      showDialog
    };
  },
}
</script>