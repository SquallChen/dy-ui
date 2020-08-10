<template>
  <div class="dy-button-container">
    <h1>Switch 开关</h1>
    <hr />
    <p>开关用于表示两种状态之间的切换，跟单独使用的 checkbox 有点类似，但 switch 开关更多的是触发即可改变状态，而 checkbox 更多的是用于表格，一般都需要配合表单的提交操作</p>
    <h2>基础用法</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Switch v-model:value="bool" /><span style="margin-left:10px;position:relative;top:-4px;">{{bool}}</span>
        </div>
      </div>
    </div>
    <h2>不可用开关</h2>
    <p>添加属性 disabled 禁用开关按钮</p>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Switch disabled/>
        </div>
      </div>
    </div>
    <h2>不同尺寸</h2>
    <p>添加属性 size 可设置按钮的尺寸大小，默认提供三种尺寸：big，normal，small</p>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Switch v-model:value="bool2" size="big"/>
          <Switch v-model:value="bool3"/>
          <Switch v-model:value="bool4" size="small"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup(props) {
    const bool = ref(false);
    const bool2 = ref(false);
    const bool3 = ref(false);
    const bool4 = ref(false);
    return { bool,bool2,bool3,bool4 };
  },
};
</script>