const prefixRegExp = /^data:(.+);base64,(.+)/

/**
 * base64 转 blob
 * @param base64 {String}
 * @param mimeType {String} 优先使用base64带的格式
 * @return {Blob}
 */
export function base64toblob (base64, mimeType = 'image/jpeg') {
  const prefixMatch = base64.match(prefixRegExp)

  if (prefixMatch) {
    mimeType = prefixMatch[1]
    base64 = prefixMatch[2]
  }
  const byteChars = atob(base64)
  const uint8Array = new Uint8Array(byteChars.length)

  for (let i = 0; i < byteChars.length; i++) {
    uint8Array[i] = byteChars.charCodeAt(i)
  }

  return new Blob([uint8Array], { type: mimeType })
}

export default base64toblob