import EXIF from 'exif-js'
import base64toblob from '@/blob/base64-to-blob'

const URL = window.URL || window.webkitURL

const SIZE = 512

function compressHeadImage (file) {
  return new Promise((resolve, reject) => {
    if(!file) {
      return reject()
    }

    if(!/image\/(jpeg|png)/.test(file.type)) {
      return reject()
    }

    const image = new Image()

    image.src = URL.createObjectURL(file)

    image.onload = function () {
      let swidth = image.width,
        sheight = image.height

      let width = SIZE,
        height = SIZE

      let x = 0,
        y = 0

      if(swidth > sheight) {
        width = swidth / sheight * SIZE

        x = (SIZE - width) / 2
      } else {
        height = sheight / swidth * SIZE

        y = (SIZE - height) / 2
      }

      const canvas = document.createElement('canvas')
      canvas.width = SIZE
      canvas.height = SIZE

      const context = canvas.getContext('2d')
      context.fillStyle = '#000000'
      context.fillRect(0, 0, SIZE, SIZE)

      EXIF.getData(file, function () {
        const orientation = EXIF.getTag(file, 'Orientation')

        switch (orientation) {
          case 3:
            context.translate(SIZE, SIZE)
            context.rotate(Math.PI)
            break
          case 6:
            context.translate(SIZE, 0)
            context.rotate(Math.PI / 2)
            break
          case 8:
            context.translate(0, SIZE)
            context.rotate(Math.PI * 1.5)
            break
        }

        try {
          context.drawImage(image, 0, 0, swidth, sheight, x, y, width, height)
        } catch (e) {
          console.error(e)
        }

        const blob = base64toblob(canvas.toDataURL('image/jpeg', 0.8))

        URL.revokeObjectURL(image.src)


        resolve(blob)
      })
    }

    image.onerror = function () {
      reject()
    }
  })
}

export default compressHeadImage
