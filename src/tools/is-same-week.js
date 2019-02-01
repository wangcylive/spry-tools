function isSameWeek (timestamp1, timestamp2) {
  const oneDayTime = 1000 * 60 * 60 * 24
  const days1 = parseInt(timestamp1 / oneDayTime)
  const days2 = parseInt(timestamp2 / oneDayTime)
  return parseInt((days1 + 4) / 7) === parseInt((days2 + 4) / 7)
}

export default isSameWeek