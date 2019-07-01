/**
 * 判断是否为同一周
 * @param timestamp1 {number}
 * @param timestamp2 {number}
 * @returns {boolean}
 */
function isSameWeek (timestamp1, timestamp2) {
  const oneDayTime = 1000 * 60 * 60 * 24
  const days1 = Math.floor(timestamp1 / oneDayTime)
  const days2 = Math.floor(timestamp2 / oneDayTime)
  return Math.floor((days1 + 4) / 7) === Math.floor((days2 + 4) / 7)
}

export default isSameWeek
