/**
 * 函数防抖
 * @param fn
 * @param wait
 * @param scope
 */
function debounce(fn: (...items: any[]) => any, wait: number, scope: any = null) {
  let timer = -1
  return function (...items: any[]) {
    clearTimeout(timer)
    timer = window.setTimeout(function () {
      fn.apply(scope, items)
    }, wait)
  }
}

export default debounce
