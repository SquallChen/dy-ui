<demo>
Dialog 示例1
<p>以dialog组件形式加载</p>
</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2" :title="title">
    <template v-slot:content>
      <div>这是内容</div>
    </template>
    <template v-slot:title>
      <strong>标题</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const title = ref('');
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
}
</script>