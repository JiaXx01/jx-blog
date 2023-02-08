<template>
  <!-- <header class="w-full shadow bg-white"> -->
  <header class="sticky top-0 w-full shadow bg-white z-10">
    <nav class="flex items-center justify-between max-w-7xl px-10 h-14 my-0 mx-auto">
      <div class="flex items-center">
        <div>
          <span v-for="(item, index) in logo" :key="index" class="text-3xl" :style="{ color: item.color }">{{
            item.letter
          }}</span>
        </div>
        <ul class="flex ml-4 gap-5 text-gray-500">
          <li><a href="#">首页</a></li>
          <li><a href="#">文章</a></li>
          <li><a href="#">话题</a></li>
          <li><a href="#">搜索</a></li>
        </ul>
      </div>
      <div class="flex items-center items-stretch h-full relative overflow-hidden show-user-card" v-if="isLogin">
        <!-- 头像 -->
        <UserAvatar class="flex items-center h-full"></UserAvatar>
        <div>{{ nickName }}</div>
        <!-- 用户信息展示框 -->
        <UserCard></UserCard>
      </div>
      <div class="divide-x" v-else>
        <button class="px-2 text-sm text-gray-300" @click="toLoginAndRegister(1)">登录</button>
        <button class="px-2 text-sm text-gray-300" @click="toLoginAndRegister(0)">注册</button>
      </div>
    </nav>
  </header>
  <LoginAndRegister ref="toLoginAndRegisterRef"></LoginAndRegister>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import UserAvatar from '../User/UserAvatar.vue'
import UserCard from '../User/UserCard.vue'
import LoginAndRegister from '../LoginAndRegister.vue'
import { useUser } from '../../stores/user'

const logo = [
  {
    letter: 'J',
    color: 'rgb(50, 133, 255)'
  },
  {
    letter: 'X',
    color: 'rgb(251, 54, 36)'
  },
  {
    letter: 'B',
    color: 'rgb(255, 186, 2)'
  },
  {
    letter: 'l',
    color: 'rgb(50, 133, 255)'
  },
  {
    letter: 'o',
    color: 'rgb(37, 178, 78)'
  },
  {
    letter: 'g',
    color: 'rgb(253, 50, 36)'
  }
]

const store = useUser()
const nickName = computed(() => store.nickName)
const isLogin = computed(() => store.isLogin)

const toLoginAndRegisterRef = ref()
/**
 * 展示登录和注册弹窗
 * @param {Number} type 1: 登录 0: 注册
 */
const toLoginAndRegister = (type) => {
  toLoginAndRegisterRef.value.showPanel(type)
}

watch(() => store.showLoginAndRegister, (newVal, oldVal) => {
  if (newVal) toLoginAndRegister(1)
})
</script>

<style scoped>
.show-user-card:hover {
  overflow: visible;
}
</style>
