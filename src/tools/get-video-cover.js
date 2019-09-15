import canvasDramVideo from '@/tools/canvas-draw-video'

/**
 * 获取视频封面图
 * @param src {String}
 * @param currentTime {Number}
 * @return {Promise<any>}
 */
async function getVideoCover (src, currentTime = 1) {
  return new Promise((resolve, reject) => {
    const info = {}
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.muted = true
    video.onloadedmetadata = function () {
      // 图像不能解码
      if (this.videoWidth === 0 || this.videoHeight === 0) {
        video.onerror = null
        video.onseeked = null
        video.src = ''
        reject(new Error('MEDIA_ERR_DECODE'))
      } else {
        info.duration = this.duration
        info.width = this.videoWidth
        info.height = this.videoHeight
        video.currentTime = currentTime
      }
      video.onloadedmetadata = null
    }
    video.onerror = function (event) {
      video.onerror = null
      video.onloadedmetadata = null
      video.onseeked = null
      video.src = ''
      reject(new Error(event.error))
    }
    video.onseeked = function () {
      info.coverBlob = canvasDramVideo(video)
      video.onseeked = null
      video.src = ''
      resolve(info)
    }
    video.src = src
  })
}

export default getVideoCover