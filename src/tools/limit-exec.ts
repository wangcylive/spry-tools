
function limitExec(fn: (...items: any[]) => any, time: number, scope: any = null) {
  let timer = -1
  let lastTime = 0
  return function (...items: any[]) {
    clearTimeout(timer)
    timer = window.setTimeout(function () {
      fn.apply(scope, items)
    }, time)

    const nowTime = Date.now()
    if (nowTime - lastTime > time) {
      fn.apply(scope, items)
      lastTime = nowTime
    }
  }
}

export default limitExec
