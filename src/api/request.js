import axios from 'axios'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import 'pinia'
import { useUser } from '../stores/user'

const requests = axios.create({
  // baseURL: 'http://182.61.133.93:4000',
  baseURL: '/api',
  timeout: 5000
})

requests.interceptors.request.use(config => {
  const userStore = useUser()
  if (userStore.token) {
    config.headers.Authorization = 'Bearer ' + userStore.token
  }
  // 发起请求，开始加载进度条
  NProgress.start()
  return config
})

requests.interceptors.response.use(
  res => {
    // 进度条结束
    NProgress.done()
    return res.data
  },
  error => {
    const { message } = error.response.data
    ElMessage.error(message)
    NProgress.done()
    return Promise.reject(error)
  }
)

export default requests
