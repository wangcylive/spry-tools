/**
 * 数字金额计数
 * @param num
 * @param sliceLength
 */
function numberSlice(num: number, sliceLength = 4): string {
  if (num < Math.pow(10, sliceLength)) {
    return num + ''
  }
  let decimalPlace = ''
  if (!Number.isInteger(num)) {
    decimalPlace = (num + '').split('.')[1]
  }

  const str = (Math.trunc(num) + '').replace(new RegExp(`(?=(\\B\\d\{${sliceLength}\})+$)`, 'g'), ',')
  if (decimalPlace) {
    return str + '.' + decimalPlace
  }
  return str
}

export default numberSlice
