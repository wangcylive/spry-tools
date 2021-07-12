/**
 * 版本比较，a > b 返回1，a = b 返回0，a < b 返回-1
 * @param a
 * @param b
 * @returns {number}
 */
function compareVersion (a: string, b: string) {
  const aArr = a.replace(/^\D+/, '').split('.').map((item) => item.trim())
  const bArr = b.replace(/^\D+/, '').split('.').map((item) => item.trim())
  const length = Math.max(aArr.length, bArr.length)
  for (let index = 0; index < length; index++) {
    const aValue = Number(aArr[index] || '0')
    const bValue = Number(bArr[index] || '0')
    if (aValue > bValue) {
      return 1
    }
    if (aValue < bValue) {
      return -1
    }
  }
  return 0
}

export default compareVersion
