import { defineStore } from 'pinia'
import { useArticle } from './article'
import { reqUserRegister, reqUserLogin, reqUserInfo } from '../api/user'

export const useUser = defineStore('user', {
  state: () => ({
    nickName: '',
    isLogin: false,
    token: localStorage.getItem('token') || '',
    avatarUrl: '',
    userId: '',
    name: '',
    headline: '',
    showLoginAndRegister: false
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
        const res = await reqUserLogin(data)
        this.token = res.data.token
        localStorage.setItem('token', res.data.token)
        // 获取用户信息
        this.getUserInfo()
        return res
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
        // 获取话题列表信息
        const articleStore = useArticle()
        articleStore.getTopicList()
      } catch (error) {
        return Promise.reject(new Error(error))
      }
    }
  }
})
