function promiseRaceTime(...items: Array<Promise<any> | number>) {
  let time = 0
  const argsTime = items[items.length - 1]
  if (typeof argsTime === 'number' && argsTime >= 0) {
    time = items.pop() as number
  }
  const rect = new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })

  return Promise.race([...items, rect])
}

export default promiseRaceTime
