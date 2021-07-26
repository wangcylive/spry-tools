const texts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

// 0-99整改转换为中文
function number2chinese(num: number): string {
  if (!Number.isInteger(num) || num < 0 || num > 99) {
    return num + ''
  }
  if (num < 11) {
    return texts[num]
  }
  if (num % 10 === 0) {
    return texts[num / 10] + texts[10]
  }
  if (num > 10 && num < 20) {
    return texts[10] + texts[num - 10]
  }
  return texts[Math.floor(num / 10)] + texts[10] + texts[num % 10]
}

export default number2chinese