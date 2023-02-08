<template>
  <nav class="h-10 w-full shadow flex items-center justify-center bg-white">
    <ul class="flex items-center gap-5">
      <li class="text-gray-500 text-sm"><router-link to="/">全部</router-link></li>
      <li v-for="topic in topicList" :key="topic._id" class="text-gray-500 text-sm"><router-link
          :to="`/home/frontEnd`">{{ topic.topicName }}</router-link></li>
    </ul>
  </nav>
  <main class="max-w-6xl mx-auto">
    <router-view></router-view>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useArticle } from '../../stores/article'
const articleStore = useArticle()
const topicList = computed(() => {
  return articleStore.topicList
})
</script>

<style lang="scss" scoped>

</style>
