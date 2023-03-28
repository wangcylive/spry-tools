function formatNumber(value: number | string): string {
  const num = Number(value)
  if (Number.isNaN(num) || !Number.isFinite(num)) {
    return ''
  }
  const numAbs = Math.abs(num)
  const decimalPlace = (num >= 0 ? 1 : -1) * 100
  if (numAbs >= 1e8) {
    return Math.floor(numAbs / 1e6) / decimalPlace + '亿'
  } else if (numAbs >= 1e4) {
    return Math.floor(numAbs / 100) / decimalPlace + 'W'
  }
  return Math.floor(num * 100) / 100 + ''
}

export default formatNumber
