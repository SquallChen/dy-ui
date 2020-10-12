<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/" class="logo">
        <svg class="icon">
          <use xlink:href="#icon-d"></use>
        </svg><span class="logoTitle">Y-UI</span>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #027aa8;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  padding: 16px 42px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    >a{
      text-decoration: none;
    }
    svg{
      width:30px;
      height: 30px;
    }
    .logoTitle{
      position: relative;
      top: -5px;
      left: -3px;
      font-weight: bold;
      font-size: 20px;
    }
  }
  > svg {
    width: 28px;
    height: 28px;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 6px;
    }
  }
  > .toggleAside {
    display: inline-block;
    width: 28px;
    height: 28px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
