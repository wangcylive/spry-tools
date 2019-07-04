function setDouble (num) {
  return (num + '').padStart(2, '0')
}

/**
 * 格式化时长
 * @param num
 * @return {string}
 */
export default function (num) {
  num = typeof num === 'number' ? num : parseFloat(num)

  if (!isNaN(num)) {
    let strTime = ''
    let hours = ''
    let minutes = ''
    let seconds = ''
    num = Math.floor(num)
    if (num >= 3600) {
      hours = parseInt(num / 3600)
      minutes = parseInt(num % 3600 / 60)
      seconds = num % 60
      strTime = hours + ':' + setDouble(minutes) + ':' + setDouble(seconds)
    } else if (num >= 60) {
      minutes = parseInt(num / 60)
      seconds = num % 60
      strTime = setDouble(minutes) + ':' + setDouble(seconds)
    } else {
      strTime = '00:' + setDouble(num)
    }

    return strTime
  }

  return '00:00'
}
