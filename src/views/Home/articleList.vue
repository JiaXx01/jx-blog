<template>
  <div class="flex justify-center py-2">
    <el-button size="small" round>vue</el-button>
    <el-button size="small" round>vue</el-button>
    <el-button size="small" round>vue</el-button>
    <el-button size="small" round>vue</el-button>
    <el-button size="small" round>vue</el-button>
  </div>
  <div class="bg-white shadow-md rounded divide-y">
    <ul class="flex text-gray-500 divide-x p-3">
      <li class="px-3">热榜</li>
      <li class="px-3">最新</li>
    </ul>
    <div class="px-1">
      <articleItem v-for="(article, index) in ArticleList" :key="index" :data="article
      "></articleItem>
    </div>
  </div>
  <p>正在加载</p>
  <img v-img-lazy src="http://localhost:3000/uploads/f92a187b6f7f829195b882e00.jpg">
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { reqArticleList } from '../../api/article'
import articleItem from './articleItem.vue'

const ArticleList = ref([])
const pageSize = ref(10)
const pageNo = ref(1)
const loadArticleList = async () => {
  const { data } = await reqArticleList({ pageSize: pageSize.value, pageNo: pageNo.value })
  console.log(data)
  ArticleList.value.push(...data.articles)
  pageNo.value++
}
let isLastPage = false
const loadMoreArticle = async () => {
  if (isLastPage) return console.log('没有更多数据了')
  const params = { pageSize: pageSize.value, pageNo: pageNo.value }
  const { data } = await reqArticleList(params)
  const count = data.count
  console.log(count, 'count')
  console.log(pageNo.value, 'pageNo')
  console.log(pageSize.value, 'pageSize')
  console.log(Math.ceil(count / pageSize.value))
  console.log(data)
  pageNo.value++
  isLastPage = Math.ceil(count / pageSize.value) < pageNo.value
  console.log(isLastPage)
}
onMounted(() => {
  loadArticleList()
})

const handleScroll = (e) => {
  // 变量scrollTop是滚动条滚动时，距离顶部的距离
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // console.log(scrollTop, 'scrollTop')
  // 变量windowHeight是可视区的高度
  const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
  // console.log(windowHeight, 'windowHeight')
  // 变量scrollHeight是滚动条的总高度
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
  // console.log(scrollHeight, 'scrollHeight')
  // 滚动条到底部的条件
  if (scrollTop + windowHeight >= scrollHeight) {
    // loadArticleList()
    console.log('到底了')
    loadMoreArticle()
  }
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style lang="scss" scoped>

</style>
