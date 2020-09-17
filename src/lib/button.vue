<template>
  <button class="dy-button" :class="classes" :disabled="disabled" :hollow="hollow">
    <span v-if="loading" class="dy-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hollow: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { theme, size, level, hollow } = props;
    const classes = computed(() => {
      return {
        [`dy-theme-${theme}`]: theme,
        [`dy-size-${size}`]: size,
        [`dy-level-${level}`]: level,
        [`dy-theme-${theme}-hollow`]: hollow,
      };
    });
    return { classes };
  },
};
</script>
<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.dy-theme-primary,
.dy-theme-success,
.dy-theme-error,
.dy-theme-warning,
.dy-theme-info {
  color: #fff;
}
.dy-button {
  display: inline-block;
  padding: 9px 16px;
  // height: $h;
  font-size: 12px;
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #c5d9e8;
  border-radius: 4px;
  background-color: #fff;
  -webkit-transition: background 0.2s;
  transition: background 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 10px;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    background-color: #f3f7fa;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.dy-theme-primary {
    color: #fff;
  }
  &.dy-theme-primary {
    border-color: #6190e8;
    background-color: #6190e8;
    &:hover {
      background-color: #79a1eb;
      border-color: #79a1eb;
    }
  }
  &.dy-theme-success {
    border-color: #13ce66;
    background-color: #13ce66;
    &:hover {
      background-color: #36d57d;
      border-color: #36d57d;
    }
  }
  &.dy-theme-error {
    border-color: #ff4949;
    background-color: #ff4949;
    &:hover {
      background-color: #ff6464;
      border-color: #ff6464;
    }
  }
  &.dy-theme-warning {
    border-color: #ffc82c;
    background-color: #ffc82c;
    &:hover {
      background-color: #ffd04c;
      border-color: #ffd04c;
    }
  }
  &.dy-theme-info {
    border-color: #78a4fa;
    background-color: #78a4fa;
    &:hover {
      background-color: #8cb2fb;
      border-color: #8cb2fb;
    }
  }
  &.dy-theme-text {
    background: none;
    border: none;
    &:hover {
      background: none;
      color: #79a1eb;
      border-color: hsla(0, 0%, 100%, 0.15);
    }
  }
  &.dy-size-big {
    font-size: 14px;
    padding: 12px 16px;
  }
  &.dy-size-small {
    font-size: 11px;
    padding: 7px 12px;
  }
  &.dy-size-mini {
    font-size: 10px;
    padding: 5px 10px;
  }
  &.dy-theme-button {
    &.dy-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.dy-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.dy-theme-text {
    &.dy-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.dy-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.dy-button {
    &[disabled] {
      cursor: not-allowed;
      color: #d2d2d2;
      border-color: #ececec;
      background-color: #f7f7f7;
    }
  }
  &.dy-theme-default,
  &.dy-theme-text {
    &[disabled] {
      background: none;
    }
  }
  > .dy-loadingIndicator {
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    position: relative;
    top: 1px;
    animation: dy-spin 1s infinite linear;
  }
}
.dy-theme-button-hollow {
  background: none;
  color: #3f536e;
  &:hover {
    background: none;
    color: #5c6d84;
    border-color: #cedfeb;
  }
}
.dy-theme-primary-hollow {
  background: none !important;
  color: #6190e8 !important;
  &:hover {
    background: none;
    color: #79a1eb;
    border-color: #79a1eb;
  }
}
.dy-theme-success-hollow {
  background: none !important;
  color: #13ce66;
  &:hover {
    background: none;
    color: #36d57d;
    border-color: #36d57d;
  }
}
.dy-theme-error-hollow {
  background: none !important;
  color: #ff4949;
  &:hover {
    background: none;
    color: #ff6464;
    border-color: #ff6464;
  }
}
.dy-theme-warning-hollow {
  background: none !important;
  color: #ffc82c;
  &:hover {
    background: none;
    color: #ffd04c;
    border-color: #ffd04c;
  }
}
.dy-theme-info-hollow {
  background: none !important;
  color: #78a4fa;
  &:hover {
    background: none;
    color: #8cb2fb;
    border-color: #8cb2fb;
  }
}
@keyframes dy-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>