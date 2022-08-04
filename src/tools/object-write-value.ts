function objectWriteValue(keys: string, value: any, obj: Record<string, any>) {
  const keyArr = keys.split('.')
  if (keyArr.length === 1) {
    obj[keys] = value
  } else {
    const key = keyArr[0]
    if (Object.prototype.toString.call(obj[key]) !== '[object Object]') {
      obj[key] = {}
    }
    keyArr.shift()
    objectWriteValue(keyArr.join('.'), value, obj[key])
  }
}

export default objectWriteValue
