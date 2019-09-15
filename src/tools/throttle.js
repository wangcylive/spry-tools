/**
 * 函数节流
 * @param fn {function}
 * @param delay {number}
 * @return {Function}
 */
function throttle (fn, delay) {
  let lastTime = 0
  return function () {
    const context = this
    const args = arguments
    let nowTime = Date.now()
    if (nowTime - lastTime > delay) {
      fn.apply(context, args)
      lastTime = nowTime
    }
  }
}

export default throttle