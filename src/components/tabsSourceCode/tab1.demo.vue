<demo>
示例1
<p></p>
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22222">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs,Tab} from "../../lib/index";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const x = ref("导航1");
    return {
      x
    };
  },
}
</script>