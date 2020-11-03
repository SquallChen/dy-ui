<demo>
Dialog 示例2
<p>以数据驱动的形式加载</p>
</demo>
<template>
  <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
import {Button,openDialog} from "../../lib/index";
import { ref } from "vue";
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