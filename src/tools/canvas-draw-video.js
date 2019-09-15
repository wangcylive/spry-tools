import base64toblob from '@/blob/base64-to-blob'

/**
 * 绘制视频封面图
 * @param video {HTMLVideoElement}
 * @return {Blob}
 */
function canvasDramVideo (video) {
  const canvas = document.createElement('canvas')
  const width = canvas.width = video.videoWidth
  const height = canvas.height = video.videoHeight
  const context = canvas.getContext('2d')
  context.drawImage(video, 0, 0, width, height)
  const base64 = canvas.toDataURL('image/jpeg', 0.9)
  return base64toblob(base64)
}

export default canvasDramVideo