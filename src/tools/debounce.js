/**
 * 函数防抖
 * @param fn {function}
 * @param wait {number}
 * @return {Function}
 */
function debounce (fn, wait) {
  let timer = null
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

export default debounce