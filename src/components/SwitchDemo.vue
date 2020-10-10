<template>
  <div class="dy-container">
    <h1>Switch 开关</h1>
    <hr />
    <p>开关用于表示两种状态之间的切换，跟单独使用的 checkbox 有点类似，但 switch 开关更多的是触发即可改变状态，而 checkbox 更多的是用于表格，一般都需要配合表单的提交操作</p>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Demo :component="Switch3Demo" />
  </div>
</template>
<script lang="ts">
import Switch1Demo from './switchSourceCode/Switch1.demo.vue'
import Switch2Demo from './switchSourceCode/Switch2.demo.vue'
import Switch3Demo from './switchSourceCode/Switch3.demo.vue'
import Demo from './Demo.vue'
export default {
  components: { Demo },
  setup(props) {
    return { Switch1Demo,Switch2Demo,Switch3Demo };
  },
};
</script>
