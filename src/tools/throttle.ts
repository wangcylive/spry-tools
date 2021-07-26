/**
 * 函数节流
 * @param fun
 * @param delay
 * @param scope
 */
function throttle(fun: (args?: any) => any, delay: number, scope: any = null) {
  let lastTime = 0
  return function (...rest: any[]) {
    const nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fun.apply(scope, rest)
      lastTime = nowTime
    }
  }
}

export default throttle
