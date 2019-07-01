import loadImage from './load-image'

/**
 * 获取图片文件尺寸
 * @param url
 * @returns {Promise<{width: number, height: number}>}
 */
export default async function (url) {
  let width = 0
  let height = 0
  try {
    const img = await loadImage(url)
    width = img.naturalWidth
    height = img.naturalHeight
  } catch (e) {}

  return {
    width,
    height
  }
}