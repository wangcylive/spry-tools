export function hex2rgb(hex: string): string {
  if (!/^#([abcdef\d]{8}|[abcdef\d]{6}|[abcdef\d]{3})$/i.test(hex.trim())) {
    return ''
  }
  const getRgba = (r: number, g: number, b: number, a?: number) => {
    if (a === undefined || a >= 255) {
      return `rgb(${r}, ${g}, ${b})`
    }
    return `rgba(${r}, ${g}, ${b}, ${Math.round(a / 255 * 100) / 100})`
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

export function rgb2hex(rgb: string): string {
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
    return `#${hex}${alpha}`
  }
  return ''
}