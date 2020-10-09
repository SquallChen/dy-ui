<template>
  <button class="dy-switch" @click="toggle" :class="classes" :disabled="disabled">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
import { computed } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
    },
  },
  setup(props, context) {
    // const { value, size } = props;
    const toggle = () => {
      context.emit("update:value", !props.value);
      console.log(props.value);
    };
    const classes = computed(() => {
      return {
        [`dy-checked`]: props.value,
        [`dy-size-${props.size}`]: props.size,
      };
    });
    return { toggle, classes };
  },
};
</script>
<style lang="scss" scoped>
$h: 20px;
$h2: $h - 2px;
.dy-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
  & + & {
    margin-left: 10px;
  }
  &[disabled] {
    border-color: #ececec;
    background-color: #ececec;
    cursor: not-allowed;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2 - 2;
    width: $h2 - 2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.dy-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2 - 2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.dy-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -6px;
    }
  }
}
.dy-size-big {
  height: $h + 4;
  width: $h * 2 + 8;
  border-radius: $h/2 + 2;
  > span {
    height: $h2 + 2;
    width: $h2 + 2;
  }
  &.dy-checked {
    background: #1890ff;
    > span {
      border-radius: $h2 / 2;
      left: calc(100% - #{$h2} - 4px);
    }
  }
  &:active {
    > span {
      width: $h2 + 6px;
    }
  }
  &.dy-checked:active {
    > span {
      width: $h2 + 6px;
      margin-left: -4px;
    }
  }
}
.dy-size-small {
  height: $h - 4;
  width: $h * 2 - 8;
  border-radius: $h/2;
  > span {
    top: 1px;
    height: $h2 - 4;
    width: $h2 - 4;
  }
  &.dy-checked {
    background: #1890ff;
    > span {
      border-radius: $h2 / 2;
      left: calc(100% - #{$h2} + 2px);
    }
  }
  &:active {
    > span {
      width: $h2 + 2px;
    }
  }
  &.dy-checked:active {
    > span {
      width: $h2 + 2px;
      margin-left: -6px;
    }
  }
}
</style>
