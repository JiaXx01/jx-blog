import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/icon/iconfont.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入懒加载需要使用的插件
// import { useIntersectionObserver } from '@vueuse/core'
import lazy from './directives/lazy'
const app = createApp(App)
// 全局指令注册
// 图片懒加载指令
// app.directive('img-lazy', {
//   mounted (el, binding) {
//     // el：指令挂载的元素
//     // binding: value 指令等于号后面表达式的值
//     console.log(el, binding.value, 'jjjjj')
//     // 图片懒加载核心逻辑
//     // 判断图片是否进入可视区域 vueUse
//     const { stop } = useIntersectionObserver(
//       el, // 监听的目标
//       ([{ isIntersecting }], observerElement) => {
//         // console.log(isIntersecting, observerElement)
//         if (isIntersecting) {
//           // 进入视图区域
//           el.src = binding.value
//           stop()
//         }
//       }
//     )
//   }
// })
app.directive('img-lazy', lazy)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
