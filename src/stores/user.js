import { defineStore } from 'pinia'
import { reqUserRegister, reqUserLogin, reqUserInfo } from '../api/user'

export const useUser = defineStore('user', {
  state: () => ({
    nickName: '',
    isLogin: false,
    token: localStorage.getItem('token') || '',
    avatarUrl: '',
    userId: '',
    name: '',
    headline: ''
  }),

  actions: {
    // 注册
    async register (data) {
      try {
        const res = await reqUserRegister(data)
        return res
      } catch (error) {}
    },
    // 登录
    async login (data) {
      try {
        const { token } = await reqUserLogin(data)
        this.token = token
        localStorage.setItem('token', token)
        this.getUserInfo()
        return token
      } catch (error) {
        console.log(error)
      }
    },
    // 退出登录
    logout () {
      localStorage.removeItem('token')
      this.$reset()
    },
    // 获取用户信息
    async getUserInfo () {
      try {
        const { avatar_url: avatarUrl, headline, name, _id: userId } = await reqUserInfo()
        this.$patch({
          avatarUrl,
          headline,
          name,
          userId,
          isLogin: true
        })
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    }
  }
})
