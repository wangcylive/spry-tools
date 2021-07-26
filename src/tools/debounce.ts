/**
 * 函数防抖
 * @param fn
 * @param wait
 * @param scope
 */
function debounce(fn: (args?: any) => any, wait: number, scope: any = null) {
  let timer = -1
  return function (...rest: any[]) {
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn.apply(scope, rest)
    }, wait)
  }
}

export default debounce
