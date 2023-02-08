<template>
  <el-dialog v-model="show" :title="title" width="30%" :before-close="handleClose">
    <el-form ref="formRef" :model="formData" :rules="rules">
      <!-- 账号 -->
      <el-form-item prop="email">
        <el-input v-model="formData.email" placeholder="请输入邮箱" clearable>
          <template #prefix>
            <span class="iconfont icon-account"></span>
          </template>
        </el-input>
      </el-form-item>
      <!-- 昵称 -->
      <el-form-item prop="nickName" v-if="!openType">
        <el-input v-model="formData.nickName" placeholder="请输入昵称">
          <template #prefix>
            <span class="iconfont icon-account"></span>
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码" clearable>
          <template #prefix>
            <span class="iconfont icon-password"></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="comfirmPassword" v-if="!openType">
        <el-input v-model="formData.comfirmPassword" placeholder="确认密码" clearable>
          <template #prefix>
            <span class="iconfont icon-password"></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item v-if="openType">
        <el-checkbox v-model="formData.rememberMe">记住我(30天内)</el-checkbox>
      </el-form-item>
      <!-- 忘记密码 / 注册 / 已有账号 -->
      <el-form-item>
        <div class="flex items-center justify-between w-full text-blue-400" v-if="openType">
          <a href="#">忘记密码？</a>
          <a href="#" @click="onNoAccount">没有账号？</a>
        </div>
        <div class="flex items-center justify-end w-full text-blue-400" v-else>
          <a href="#" @click="onExistAccount">已有账号？</a>
        </div>
      </el-form-item>
      <!-- 登录 / 注册 -->
      <el-form-item>
        <el-button class="w-full" type="primary" @click="submitLoginOrRegister(formRef)">
          {{ openType? '登录': '注册' }}
        </el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUser } from '../stores/user'
import md5 from 'js-md5'
const userStore = useUser()
const checkPassword = (rule, value, callback) => {
  if (value !== formData.password) callback(new Error('密码不一致'))
  else callback()
}
const rules = reactive({
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
  ],
  nickName: [
    { required: true, message: '请输入昵称', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  comfirmPassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: checkPassword, trigger: 'change' }
  ]
})
const show = ref(false)
const openType = ref()
const title = ref()
const formRef = ref()
const formData = reactive({})

const showPanel = (type) => {
  if (type === 1) {
    // 登录
    title.value = '登录'
  } else {
    // 注册
    title.value = '注册'
  }
  openType.value = type
  show.value = true
}
defineExpose({ showPanel })

// 已有账号
const onExistAccount = () => {
  formRef.value.resetFields()
  showPanel(1)
}
// 没有账号
const onNoAccount = () => {
  formRef.value.resetFields()
  showPanel(0)
}

// 关闭弹窗事件
const handleClose = () => {
  // 清空表单以及校验提示
  show.value = false
  formRef.value.resetFields()
  userStore.showLoginAndRegister = false
}

// 登录 / 注册
const submitLoginOrRegister = async (formRef) => {
  await formRef.validate(async (valid) => {
    if (valid) {
      const { email, password } = formData
      const params = { email, password }
      params.password = md5(params.password)
      if (openType.value) {
        // 登录
        await userStore.login(params)
        handleClose()
      } else {
        // 注册
        params.nickName = formData.nickName
        await userStore.register(params)
        // 注册后转到登录
        showPanel(1)
      }
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
