<template>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2" :title="title">
      <template v-slot:content>
        <div>这是内容</div>
      </template>
      <template v-slot:title>
        <strong>标题</strong>
      </template>
    </Dialog>
    <h1>示例2</h1>
    <Button @click="showDialog">showDialog</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const title = ref('dialog提示');
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return true
    };
    const f2 = () => {};
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
      x,
      toggle,
      f1,
      f2,
      title,
      showDialog,
    };
  },
};
</script>