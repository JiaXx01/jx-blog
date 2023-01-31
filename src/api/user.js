// 用户操作接口
import requests from './request'

// 注册
export const reqUserRegister = data => requests.post('/user/register', data)

// 登录
export const reqUserLogin = data => requests.post('/user/login', data)

// 获取用户信息
export const reqUserInfo = () => requests.get('/user/info')
