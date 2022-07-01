/**
 * hex 转 rgb
 * @param hex
 * @param alphaFront 透明度是否在前
 */
export function hex2rgb(hex: string, alphaFront?: boolean): string {
  if (!/^#([abcdef\d]{8}|[abcdef\d]{6}|[abcdef\d]{3})$/i.test(hex.trim())) {
    return ''
  }
  const getRgba = (...rest: number[]) => {
    let r, g, b, a
    if (alphaFront) {
      [a, r, g, b] = rest
    } else {
      [r, g, b, a] = rest
    }
    if (rest.length >= 4 && a < 255) {
      return `rgba(${r}, ${g}, ${b}, ${Math.round(a / 255 * 100) / 100})`
    }
    return `rgb(${r}, ${g}, ${b})`
  }
  const value = hex.trim().substr(1)
  if (value.length === 6 || value.length === 8) {
    return getRgba.apply(null, value.split(/(?=(?:\B\w{2})+$)/).map((val) => parseInt(val, 16)))
  }
  if (value.length === 3) {
    return getRgba.apply(null, value.split(/\B/).map((val) => parseInt(val + val, 16)))
  }
  return ''
}

/**
 * rgb 转 hex
 * @param rgb
 * @param alphaFront 透明度是否在前
 */
export function rgb2hex(rgb: string, alphaFront?: boolean): string {
  const match = rgb.trim().match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d?\.?\d+))?\)$/i)
  if (match) {
    const [, r, g, b, a] = match
    const hex = [r, g, b].map((val) => Math.min(255, Number(val)).toString(16)).join('')
    let alpha = ''
    if (a !== undefined) {
      const alphaNum = Math.round(Number(a) * 255)
      if (alphaNum < 255) {
        alpha = alphaNum.toString(16)
      }
    }
    if (alphaFront) {
      return `#${alpha}${hex}`
    }
    return `#${hex}${alpha}`
  }
  return ''
}
