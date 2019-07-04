import blobtobase64 from './blob-to-base64'
import base64toblob from './base64-to-blob'

/**
 * 图片压缩，Gif格式的图片不压缩
 * @param originBlob      {Blob} 二进制源文件
 * @param maxSize         {Number} 最大尺寸
 * @param encoderOptions  {Number} 压缩比 0-1
 * @return {Promise<any>}
 */
export default async function (originBlob, maxSize = 2560, encoderOptions = 0.9) {
  const url = await blobtobase64(originBlob)
  const blobMimeType = originBlob.type
  const isGif = blobMimeType === 'image/gif'
  const isPng = blobMimeType === 'image/png'

  return new Promise((resolve, reject) => {
    const img = new Image()

    if (isGif) {
      img.onload = () => {
        resolve({
          base64: url,
          mimeType: 'image/gif',
          blob: originBlob,
          width: img.width,
          height: img.height
        })
      }
    } else {
      img.onload = () => {
        const imgWidth = img.width
        const imgHeight = img.height
        const ratio = imgWidth / imgHeight

        let width = imgWidth
        let height = imgHeight

        if (width > maxSize) {
          width = maxSize
          height = Math.floor(width / ratio)
        }
        if (height > maxSize) {
          height = maxSize
          width = Math.floor(height * ratio)
        }

        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        canvas.width = width
        canvas.height = height

        let mimeType = blobMimeType
        if (mimeType === 'image/bmp') {
          mimeType = 'image/jpeg'
        }
        context.drawImage(img, 0, 0, width, height)

        const base64 = canvas.toDataURL(mimeType, !isPng ? encoderOptions : void 0)
        const blob = base64toblob(base64, mimeType)

        resolve({
          base64,
          mimeType,
          blob,
          width,
          height
        })
      }
    }

    img.onerror = (error) => {
      reject(error)
    }

    img.src = url
  })
}
