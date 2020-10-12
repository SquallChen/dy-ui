<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const resize = window.addEventListener("resize", () => {
      let width = document.documentElement.clientWidth;
      let hasScrollbar = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
      if ((hasScrollbar&&width <= 480)||(!hasScrollbar&&width <= 500)) {
        menuVisible.value = false;
      } else {
        menuVisible.value = true;
      }
    });
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,1) 35%, rgba(242,242,242,1) 100%);
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    margin: 26px 48px 48px;
    box-shadow: 0 4px 30px 0 rgba(223,225,230,0.5);
    padding-left: 220px;
    position: relative;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    z-index: 2;
  }
  > main {
    flex-grow: 1;
    padding: 32px 48px;
    background: #fff;
  }
}
aside {
  background: #fff;
  width: 220px;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding-top: 32px;
  &:after{
    content: "";
    position: absolute;
    right: 1px;
    top: 34px;
    height: calc(100% - 68px);
    width: 1px;
    background-color: #ECECEC;
  }
  > h2 {
    margin-bottom: 4px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: bold;
    color: #8DABC4
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        display: block;
        position: relative;
        padding: 8px 24px 8px 32px;
        color: #616367;
        font-size: 14px;
        &:hover{
          color: #79A1EB;
          background-color: rgba(236,242,252,0.25)
        }
        &:after {
          content: '';
          display: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: #6190E8;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: 1px 0 12px 0 #6190E8;
        }
      }
      .router-link-active {
        background-color: rgba(236,242,252,0.25);
        &:after {
          display: inline-block;
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
