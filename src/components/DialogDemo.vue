<template>
  <div>
    <div>Dialog 示例</div>
    <h1>示例1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2" :title="title">
      <div>111</div>
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from "../lib/dialog.vue";
import Button from "../lib/button.vue";
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
    return {
      x,
      toggle,
      f1,
      f2,
      title,
    };
  },
};
</script>