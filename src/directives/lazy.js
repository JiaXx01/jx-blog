export default {
  mounted (el) {
    // 先保存img标签的src
    const imgSrt = el.src
    // 清除img标签的src，这样就不会先加载图片了
    el.src = ''
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 元素出现在可视区域和离开可视区域时触发
      if (isIntersecting) {
        // 图片标签首次触发Observer时，将保存的src在赋值给img标签
        el.src = imgSrt
        // 当出法国Observer后，停止观察
        observer.unobserve(el)
      }
    })
    observer.observe(el)
  }
}
