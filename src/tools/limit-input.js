/**
 * 限制输入
 * @param originValue
 * @param MAX_PRICE
 * @returns {string}
 */
export function limitPriceInput(originValue, MAX_PRICE = 999999999) {
  let value = originValue.replace(/[^\d.]/g, '').replace(/\.{2}/, '.')
  if (value === '') {
    return ''
  }
  const num = Number(value)
  if (Number.isNaN(num)) {
    const parseNum = parseFloat(value)
    if (Number.isNaN(parseNum)) {
      value = ''
    } else {
      value = parseNum + ''
    }
  }
  // 限制00
  if (num === 0 && /^0{2}/.test(value)) {
    value = '0'
  }
  // 限制最大值
  if (num >= MAX_PRICE) {
    value = MAX_PRICE + ''
  }
  // 限制小数位1位
  if (value.indexOf('.') > -1 && value.substring(value.indexOf('.')).length > 2) {
    value = Math.floor(parseFloat(value) * 100) / 100 + ''
  }

  return value
}

export function limitIntegerInput(originValue, MAX_PRICE = 999999) {
  let value = originValue.replace(/\D/g, '')
  if (value === '') {
    return ''
  }
  const num = Number(value)
  if (Number.isNaN(num)) {
    const parseNum = parseFloat(value)
    if (Number.isNaN(parseNum)) {
      value = ''
    } else {
      value = parseNum + ''
    }
  }
  // 限制00
  if (num === 0 && /^0{2}/.test(value)) {
    value = '0'
  }
  // 限制最大值
  if (num >= MAX_PRICE) {
    value = MAX_PRICE + ''
  }

  return Number(value) + ''
}
