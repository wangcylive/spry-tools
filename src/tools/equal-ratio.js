/**
 * 等比缩放大小
 * @param width {number}
 * @param height {number}
 * @param maxWidth {number}
 * @param maxHeight {number}
 * @return {{width: *, height: *}}
 */
export default function (width, height, maxWidth = 420, maxHeight = 360) {
  const ratio = width / height
  if (width > maxWidth) {
    width = maxWidth
    height = Math.floor(width / ratio)
  }
  if (height > maxHeight) {
    height = maxHeight
    width = Math.floor(height * ratio)
  }
  return {
    width,
    height
  }
}