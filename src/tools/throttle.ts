/**
 * 函数节流
 * @param fn
 * @param delay
 * @param scope
 */
function throttle(fn: (...items: any[]) => any, delay: number, scope: any = null) {
  let lastTime = 0
  return function (...items: any[]) {
    const nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.apply(scope, items)
      lastTime = nowTime
    }
  }
}

export default throttle
