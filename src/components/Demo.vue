<template>
  <div class="dy-container">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <p v-html="component.__sourceDescription"></p>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <component :is="component" />
        </div>
      </div>
      <div class="dy-code-container">
        <div class="dy-code-wrapper" :class="{'dyCodeVisible':openOrHide}">
        <pre class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" />
        </div>
        <a class="dy-openOrHide" @click="codeVisible"> {{openOrHide?'隐藏代码':'显示代码'}} </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { ref } from 'vue';
const Prism = (window as any).Prism;
export default {
  props: {
    component: Object,
  },
  setup(props) {
    const openOrHide = ref(false);
    const codeVisible = (val: String) => {
      openOrHide.value=!openOrHide.value
    };
    return {
      Prism,
      openOrHide,
      codeVisible
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #c5d9e8;
.dy-container {
  margin: 16px 0 32px;
  > h2 {
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>