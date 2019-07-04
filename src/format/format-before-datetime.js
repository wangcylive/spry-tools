import formatDateTime from './format-datetime'

/**
 * 时间格式化
 * @param timestamp {number}
 * @returns {string}
 */
export default function (timestamp) {
  const formatDate = new Date(timestamp)
  const fDay = formatDate.getDay()
  const dayArray = ['日', '一', '二', '三', '四', '五', '六'].map((item) => ('星期' + item))

  const nowDate = new Date()
  const thisYear = nowDate.getFullYear()
  const thisMonth = nowDate.getMonth()
  const thisDate = nowDate.getDate()
  const thisDay = nowDate.getDay()

  const yesterdaysStart = new Date(thisYear, thisMonth, thisDate - 1).getTime()
  const todayStart = new Date(thisYear, thisMonth, thisDate).getTime()
  const todayEnd = todayStart + 24 * 60 * 60 * 1000
  const thisWeekStartDate = thisDate - (thisDay || 7) + 1
  const thisWeekStart = new Date(thisYear, thisMonth, thisWeekStartDate).getTime()
  const thisYearStart = new Date(thisYear, 0, 1).getTime()

  // 大于今天结束时间
  if (timestamp > todayEnd) {
    return formatDateTime(timestamp)
  }

  // 今天
  if (timestamp >= todayStart) {
    return formatDateTime(timestamp, 'hh:mm')
  }

  // 昨天
  if (timestamp >= yesterdaysStart) {
    return formatDateTime(timestamp, '昨天 hh:mm')
  }

  // 这周内
  if (timestamp >= thisWeekStart) {
    return formatDateTime(timestamp, `${dayArray[fDay]} hh:mm`)
  }

  // 今年时间内
  if (timestamp >= thisYearStart) {
    return formatDateTime(timestamp, 'yyyy-MM-dd hh:mm')
  }

  // 今年前
  return formatDateTime(timestamp, 'yyyy-MM-dd')
}
