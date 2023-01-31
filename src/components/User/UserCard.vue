<template>
  <div class="absolute top-12 right-0 w-56 border-2 border-gray-200 rounded-lg bg-gray-100 p-4">
    <div class="flex items-center h-12">
      <img src="../../assets/avatar.jpg" alt="" class="h-10 w-10 rounded-full border-2 mx-4">
      <div>jiaX</div>
    </div>
    <div class="flex justify-around items-center mt-3 border-2 ">
      <div class="flex flex-col items-center">
        <span>4</span>
        <div>关注</div>
      </div>
      <div class="flex flex-col items-center">
        <span>4</span>
        <div>赞过</div>
      </div>
      <div class="flex flex-col items-center">
        <span>4</span>
        <div>收藏</div>
      </div>

    </div>
    <ul class="mt-3 divide-y divide-gray-500 flex flex-col items-center">
      <li><a href="#">我的主页</a></li>
      <li><a href="#">发表文章</a></li>
      <li><a href="#">我的设置</a></li>
      <li><a href="#" @click="onLogout">退出登录</a></li>
    </ul>
  </div>
</template>

<script setup>
import { useUser } from '../../stores/user'
const store = useUser()
const onLogout = () => {
  store.logout()
}

</script>

<style lang="scss" scoped>

</style>
