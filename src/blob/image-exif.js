import EXIF from 'exif-js'

const URL = window.URL || window.webkitURL

const MAX_WIDTH = 720
const MAX_HEIGHT = 1280

function dataURL2blob (dataURL) {
  const string = dataURL.split(',')[ 1 ]

  const bin = atob(string)

  const uint8Array = new Uint8Array(bin.length)

  for (let i = 0; i < bin.length; i++) {
    uint8Array[ i ] = bin.charCodeAt(i)
  }

  return new Blob([ uint8Array ], { type: 'image/jpeg' })
}

function getBlob (file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject()

      return
    }

    if (!/image\/(jpeg|png)/.test(file.type)) {
      reject()

      return
    }

    const image = new Image()

    image.src = URL.createObjectURL(file)

    image.onload = function () {
      const imgWidth = image.width,
        imgHeight = image.height

      let width = imgWidth,
        height = imgHeight

      if (width > MAX_WIDTH) {
        width = MAX_WIDTH
        height = imgHeight * (MAX_WIDTH / imgWidth)
      }

      if (height > MAX_HEIGHT) {
        height = MAX_HEIGHT
        width = imgWidth * (MAX_HEIGHT / imgHeight)
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const context = canvas.getContext('2d')
      context.fillStyle = '#000000'
      context.fillRect(0, 0, width, height)

      EXIF.getData(file, function () {
        const orientation = EXIF.getTag(file, 'Orientation')

        switch (orientation) {
          case 3:
            context.translate(width, height)
            context.rotate(Math.PI)
            break
          case 6:
            canvas.width = height
            canvas.height = width
            context.translate(height, 0)
            context.rotate(Math.PI / 2)
            break
          case 8:
            canvas.width = height
            canvas.height = width
            context.translate(0, width)
            context.rotate(Math.PI * 1.5)
            break
        }

        try {
          context.drawImage(image, 0, 0, width, height)
        } catch (e) {
          reject(e)
        }

        const blob = dataURL2blob(canvas.toDataURL('image/jpeg', 0.8))

        URL.revokeObjectURL(image.src)

        resolve(blob)
      })
    }

    image.onerror = function () {
      reject()
    }
  })
}

export default getBlob
