import { createRouter, createWebHashHistory } from 'vue-router'
import { useUser } from '../stores/user'
import Home from '../views/Home/index.vue'
import Search from '../views/Search/index.vue'
import Login from '../views/Login/index.vue'
import Article from '../views/Article/index.vue'
import Register from '../views/Register/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { redirectAlredyLogin: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { redirectAlredyLogin: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUser()
  const { token, isLogin } = userStore
  const { redirectAlredyLogin, requiredLogin } = to.meta
  if (!isLogin) {
    if (token) {
      userStore.getUserInfo().then(() => {
        if (redirectAlredyLogin) {
          next('/')
        } else {
          next()
        }
      }).catch(() => {
        userStore.logout()
        next('/')
      })
    } else {
      if (requiredLogin) {
        next('/')
      } else {
        next()
      }
    }
  }
})

export default router
