/**
 * 请求图片
 * @param src {String}
 * @return {Promise<*>}
 */
export default async function (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject('Image load fail.')
    img.src = src
  })
}