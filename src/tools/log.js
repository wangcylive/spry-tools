function consoleLog (args) {
  const date = new Date()
  const time = `${date.toTimeString().split(' ')[0]}.${date.getMilliseconds()}`
  console.log.call(null, time, ...arguments)
}
function emptyLog () {}

let log = consoleLog

export function getLog (prefix) {
  return function () {
    log.call(null, prefix, ...arguments)
  }
}

export function logSwitch (bool) {
  log = bool ? consoleLog : emptyLog
}

window.logSwitch = logSwitch

export default log