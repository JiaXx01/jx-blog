import { defineStore } from 'pinia'
import { reqTopicList } from '../api/article'

export const useArticle = defineStore('article', {
  state: () => ({
    topicList: []
  }),
  actions: {
    // 获取话题列表
    async getTopicList () {
      try {
        const topicList = await reqTopicList()
        console.log(topicList, 'pinia')
        this.topicList = topicList
      } catch (error) {

      }
    }
  }
})
