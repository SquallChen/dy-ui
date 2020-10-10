<template>
  <div class=" dy-container">
    <h1>Button 按钮</h1>
    <hr />
    <p>按钮用于传递用户触摸时会触发的操作</p>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>
<script lang="ts">
import Demo from './Demo.vue'
import Button1Demo from './buttonSourceCode/Button1.demo.vue'
import Button2Demo from './buttonSourceCode/Button2.demo.vue'
import Button3Demo from './buttonSourceCode/Button3.demo.vue'
import Button4Demo from './buttonSourceCode/Button4.demo.vue'
import Button5Demo from './buttonSourceCode/Button5.demo.vue'

export default {
  components: { Demo },
  setup(props) {
    return { Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo};
  },
};
</script>
