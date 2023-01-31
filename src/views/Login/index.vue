<template>
  <div>
    登录
    用户名: <input type="text" v-model="loginForm.name">
    密码: <input type="text" v-model="loginForm.password">
    <button @click="onLogin">登录</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUser } from '../../stores/user'
import { useRouter } from 'vue-router'
const store = useUser()
const router = useRouter()

// 登录信息
const loginForm = reactive({
  name: '',
  password: ''
})
const onLogin = async () => {
  const token = await store.login(loginForm)
  if (token) {
    router.push('/')
  }
}
</script>

<style lang="scss" scoped>

</style>
