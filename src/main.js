import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/icon/iconfont.css'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.globalInfo = {

}
app.mount('#app')
