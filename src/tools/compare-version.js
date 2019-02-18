/**
 * 版本比较，a > b 返回1，a = b 返回0，a < b 返回-1
 * @param a
 * @param b
 * @returns {number}
 */
export default function (a, b) {
  const aArr = a.replace(/^\D+/, '').split('.').map((item) => item.trim())
  const bArr = b.replace(/^\D+/, '').split('.').map((item) => item.trim())
  const length = Math.max(aArr.length, bArr.length)
  for (let index = 0; index < length; index++) {
    const aVer = aArr[index] || '0'
    const bVer = bArr[index] || '0'
    let aValue = Number(aVer)
    let bValue = Number(bVer)
    if (isNaN(aVer) || isNaN(bVer)) {
      aValue = aVer
      bValue = bVer
    }
    if (aValue > bValue) {
      return 1
    }
    if (aValue < bValue) {
      return -1
    }
  }
  return 0
}
