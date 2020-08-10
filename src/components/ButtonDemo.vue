<template>
  <div class="dy-button-container">
    <h1>Button 按钮</h1>
    <hr />
    <p>按钮用于传递用户触摸时会触发的操作</p>
    <h2>基础按钮</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Button theme="primary">主要按钮</Button>
          <Button theme="default">次要按钮</Button>
          <Button theme="text">文字按钮</Button>
        </div>
      </div>
    </div>
    <h2>不可用状态按钮</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Button theme="primary" disabled>主要按钮</Button>
          <Button theme="default" disabled>次要按钮</Button>
          <Button theme="text" disabled>文字按钮</Button>
        </div>
      </div>
    </div>
    <h2>带有色彩倾向的按钮</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Button hollow>默认按钮</Button>
          <Button hollow theme="primary">主要按钮</Button>
          <Button hollow theme="success">成功按钮</Button>
          <Button hollow theme="error">危险按钮</Button>
          <Button hollow theme="warning">警告按钮</Button>
          <Button hollow theme="info">信息按钮</Button>
        </div>
        <div>
          <Button>默认按钮</Button>
          <Button theme="primary">主要按钮</Button>
          <Button theme="success">成功按钮</Button>
          <Button theme="error">危险按钮</Button>
          <Button theme="warning">警告按钮</Button>
          <Button theme="info">信息按钮</Button>
        </div>
      </div>
    </div>
    <h2>加载中按钮</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Button loading>加载中</Button>
          <Button loading></Button>
        </div>
      </div>
    </div>
    <h2>按钮尺寸</h2>
    <div class="dy-component-container">
      <div class="dy-component-sample">
        <div>
          <Button theme="primary" size="big">变大按钮</Button>
          <Button theme="primary">正常按钮</Button>
          <Button theme="primary" size="small">变小按钮</Button>
          <Button theme="primary" size="mini">超小按钮</Button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../lib/button.vue";

export default {
  components: { Button },
};
</script>
<style lang="scss">
.dy-button-container {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, Arial,
    sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: #2c405a;
    font-weight: bold;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
  }
  h2,
  h3 {
    margin-top: 24px;
    margin: 16px 0;
    line-height: 1.5;
  }
  hr {
    margin: 1.2em 0;
    border: 0;
    border-bottom: 1px solid #c5d9e8;
  }
  p {
    color: #3f536e;
    font-size: 14px;
  }
  a:active,
  a:hover {
    color: #79a1eb !important;
    outline: 0;
    text-decoration: none;
    border: none;
  }
  .dy-component-container {
    margin: 16px 0;
    .dy-component-sample {
      position: relative;
      padding: 32px;
      border: 1px solid #e2ecf4;
      border-radius: 4px 4px 0 0;
      background-color: #fff;
      @media (max-width: 760px) {
      padding: 16px;
    }
    }
    .dy-code {
      position: relative;
      border: 1px solid #e2ecf4;
      border-top: none;
    }
  }

}
</style>