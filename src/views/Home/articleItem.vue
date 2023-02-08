<template>
  <!-- <div>{{ data }}</div> -->
  <div class="shadow px-4 py-2">
    <!-- 文章信息 -->
    <div class="flex divide-x text-sm my-2">
      <span class="pr-2">{{ data.author.nickName }}</span>
      <span class="px-2">4个月前</span>
      <div class="px-2">
        <span class="px-1">{{ data.topic.topicName }}</span>
        <span>&bull;</span>
        <span class="px-1">{{ data.tag.tagName }}</span>
      </div>
    </div>
    <!-- 文章内容及封面 -->
    <div class="flex justify-between">
      <div>
        <h1 class="font-bold text-xl">{{ data.title }}</h1>
        <!-- <div>{{ data.description }}</div> -->
        <div class="w-full text-gray-400 font-light text-sm mt-2">
          {{ data.description }}
        </div>
        <div class="text-gray-400 mt-2">
          <span class="iconfont icon-eye-solid mr-2">
            {{ data.readCount === 0 ? ' 阅读' : ' ' + data.readCount }}
          </span>
          <span class="iconfont icon-good mx-2">
            {{ data.likeCound === 0 ? ' 点赞' : ' ' + data.readCount }}
          </span>
          <span class="iconfont icon-eye-solid mx-2">
            {{ data.commentCount === 0 ? ' 评论' : ' ' + data.readCount }}
          </span>
        </div>
      </div>
      <!-- <img :src="data.coverUrl" class="w-32 h-32" v-if="data.coverUrl"> -->
      <!-- <div v-if="data.coverUrl">
        <Cover :cover-url="data.coverUrl"></Cover>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Cover from '../../components/Cover.vue'
defineProps({
  data: { type: Object }
})
</script>

<style lang="scss" scoped>

</style>
