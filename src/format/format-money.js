/**
 * 格式化金额 eg: 23,000.00
 * @param money {number} 分
 * @returns {string}
 */
export default function (money) {
  if(!Number.isSafeInteger(money)) {
    return ''
  }
  let prefix = ''
  if (money < 0) {
    prefix = '-'
    money = money * -1
  }
  const str = (money / 100).toFixed(2)
  let [ integerStr, decimalsStr ] = str.split('.')

  const sliceLength = 3
  const integerLength = Math.ceil(integerStr.length / sliceLength)
  integerStr = integerStr.padStart(integerLength * sliceLength, '%')
  const integerArr = []
  for (let i = 0; i < integerLength; i++) {
    const start = i * sliceLength
    integerArr.push(integerStr.substring(start, start + sliceLength))
  }

  return prefix + integerArr.join(',').replace(/^%+/, '') + '.' + decimalsStr
}
