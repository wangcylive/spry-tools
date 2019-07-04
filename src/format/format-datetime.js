function datePad (str) {
  return (str + '').padStart(2, '0')
}

function formatDatetime (timestamp, format = 'yyyy-MM-dd hh:mm:ss') {
  const fDate = new Date(timestamp)

  const year = fDate.getFullYear()
  const month = datePad(fDate.getMonth() + 1)
  const date = datePad(fDate.getDate())
  const hours = datePad(fDate.getHours())
  const minutes = datePad(fDate.getMinutes())
  const seconds = datePad(fDate.getSeconds())

  return format.replace('yyyy', year).replace('MM', month).replace('dd', date).replace('hh', hours).replace('mm', minutes).replace('ss', seconds)
}

export default formatDatetime