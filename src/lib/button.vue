<template>
  <!-- $attrs默认获取上层传递的所有方法 -->
  <button v-bind="$attrs" :class="`theme-${theme}`">
    <slot/>
  </button>
</template>
<script lang="ts">
export default {
  props:{
    theme:{
      type:String,
      default:'button'
    },
  },
  setup(props,context){

  }
}
</script>
<style lang="scss" scoped>
</style>