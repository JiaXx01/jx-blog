<template>
  <GlobalHeader></GlobalHeader>
  <router-view></router-view>
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

<style lang="scss" scoped>

</style>
