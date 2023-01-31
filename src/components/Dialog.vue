<template>
  <div>
    <el-dialog :model-value="show" :title="title" width="30%" :before-close="handleClose" :show-close="showClose"
      :draggbale="true" :close-on-click-modal="false" :width="width">

    </el-dialog>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  show: { type: Boolean, default: true },
  title: { type: String, default: '' },
  showClose: { type: Boolean, default: true },
  width: { type: String, default: '30%' }
})
</script>

<style lang="scss" scoped>

</style>
