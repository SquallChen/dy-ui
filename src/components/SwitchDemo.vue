<template>
  <div class="dy-container">
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
      <div class="dy-code-container">
        <div class="dy-code-wrapper" :class="{'dyShowCode':openOrHide.value1}">
        <pre class="language-html" v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')" />
        </div>
        <a class="dy-openOrHide" @click="showCode('value1')"> {{openOrHide.value1?'隐藏代码':'显示代码'}} </a>
      </div>
    </div>
    <h2>不可用开关</h2>
    <p>添加属性 <code>disabled</code> 禁用开关按钮</p>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Switch disabled />
        </div>
      </div>
      <div class="dy-code-container">
        <div class="dy-code-wrapper" :class="{'dyShowCode':openOrHide.value2}">
        <pre class="language-html" v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')" />
        </div>
        <a class="dy-openOrHide" @click="showCode('value2')"> {{openOrHide.value2?'隐藏代码':'显示代码'}} </a>
      </div>
    </div>
    <h2>不同尺寸</h2>
    <p>添加属性 <code>size</code> 可设置按钮的尺寸大小，默认提供三种尺寸：big，normal，small</p>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Switch v-model:value="bool2" size="big" />
          <Switch v-model:value="bool3" />
          <Switch v-model:value="bool4" size="small" />
        </div>
      </div>
      <div class="dy-code-container">
        <div class="dy-code-wrapper" :class="{'dyShowCode':openOrHide.value3}">
        <pre class="language-html" v-html="Prism.highlight(Switch3Demo.__sourceCode, Prism.languages.html, 'html')" />
        </div>
        <a class="dy-openOrHide" @click="showCode('value3')"> {{openOrHide.value1?'隐藏代码':'显示代码'}} </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
import { reactive, ref } from "vue";
import Switch1Demo from './switchSourceCode/Switch1.demo.vue'
import Switch2Demo from './switchSourceCode/Switch2.demo.vue'
import Switch3Demo from './switchSourceCode/Switch3.demo.vue'
import 'prismjs';
import 'prismjs/themes/prism-coy.css'
const Prism = (window as any).Prism
export default {
  components: { Switch,Switch1Demo,Switch2Demo,Switch3Demo },
  setup(props) {
    const bool = ref(false);
    const bool2 = ref(false);
    const bool3 = ref(false);
    const bool4 = ref(false);
    const openOrHide = reactive({
      value1:false,
      value2:false,
      value3:false,
    })
    const showCode = (val: String) => {
      openOrHide[val] =!openOrHide[val]
    };
    return { bool, bool2, bool3, bool4, showCode,openOrHide,Switch1Demo,Switch2Demo,Switch3Demo,Prism };
  },
};
</script>
