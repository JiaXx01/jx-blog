<template>
  <div>
    注册
    用户名：<input type="text" v-model="registerForm.name">
    密码：<input type="text" v-model="registerForm.password">
  </div>
  <div>{{ registerForm.name }}</div>
  <div>{{ registerForm.password }}</div>
  <button @click="onRegist">注册</button>
</template>

<script setup>
import { reactive } from 'vue'
import { useUser } from '../../stores/user'
const store = useUser()

// 注册信息
const registerForm = reactive({
  name: '',
  password: ''
})
const onRegist = async () => {
  const data = await store.register(registerForm)
  console.log(data, 'register')
}
</script>

<style lang="scss" scoped>

</style>
