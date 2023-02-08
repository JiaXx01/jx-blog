import requests from './request'

// 获取话题列表
export const reqTopicList = () => requests.get('/article/topic')

// 获取文章列表
export const reqArticleList = (params) => requests.get('/article', { params })
