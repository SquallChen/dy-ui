<template>
  <div>
    <header>标题</header>
    <main>
      <p>第一行字</p>
      <p>第二行字</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script type="ts">
import Button from './button.vue'
export default {
  components:{
    Button
  }
}
</script>