// 判断滚动条的一系列方法

import { onMounted, onUnmounted } from 'vue'

// 获取滚动条高度
export const getScrollTop = () => (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop)

// 获取滚动类型并执行callback
export const handlerScrollType = (callback) => {
  let initScrollTop = getScrollTop()
  let scrollType
  const handler = () => {
    const currentScrollTop = getScrollTop()
    if (currentScrollTop > initScrollTop) {
      scrollType = 1
    } else {
      scrollType = 0
    }
    initScrollTop = currentScrollTop
    callback(scrollType)
  }
  onMounted(() => {
    document.addEventListener('scroll', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('scroll', handler)
  })
}
