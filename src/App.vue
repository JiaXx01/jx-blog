<template>
  <GlobalHeader></GlobalHeader>
  <main class="bg-gray-100">
    <router-view></router-view>
  </main>
  <!-- <GlobalFooter></GlobalFooter> -->
</template>

<script setup>
// import { onMounted } from 'vue'
import GlobalHeader from './components/Global/GlobalHeader.vue'
import { handlerScrollType } from './hooks/useScroll'
const onScroll = (scrolltype) => {
  console.log(scrolltype)
}
handlerScrollType(onScroll)
</script>

<style lang="scss">
body {
  --tw-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}
</style>
