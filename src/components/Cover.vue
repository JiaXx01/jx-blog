<template>
  <div :style="{ width: width + 'px', height: width + 'px' }" class="bg-gray-200 rounded overflow-hidden">
    <el-image :style="{ width: width + 'px', height: width + 'px' }" fit="scale-down" loading="lazy"
      :src="coverUrl"></el-image>
  </div>
</template>

<script setup>
defineProps({
  coverUrl: { type: String },
  width: { type: Number, default: 100 }
})
</script>

<style lang="scss" scoped>

</style>
