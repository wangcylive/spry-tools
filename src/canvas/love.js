import baseMapSrc from '@/component/love/img/bg.jpg'
import qrcodeSrc from '@/img/download-qrcode.png'

const canvasWidth = 1080
const canvasHeight = 1920

const userPicPos = [434, 80, 106]

const pointNamePos = [540, 780, 830]
const pointNameFont = '700 84px sans-serif'

const pointDescPos = [130, 940]
const pointDescFontSize = 40
const pointDescLineHeight = 60
const pointDescFont = `700 ${pointDescFontSize}px/${pointDescLineHeight}px sans-serif`

const matchNamePos = [540, 1410, 830]
const matchNameFont = '40px sans-serif'

const qrcodePos = [442, 1611, 196, 196]

async function loadImg (src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = (event) => {
      reject(event)
    }
    img.src = src
  })
}

function circleImg(context, img, x, y, r) {
  context.save()
  const d = 2 * r
  const cx = x + r
  const cy = y + r
  context.arc(cx, cy, r, 0, 2 * Math.PI)
  context.clip()
  context.drawImage(img, x, y, d, d)
  context.restore()
}

function fillTextWordWrap({ context, text, fontSize, lineHeight, x, y, width }) {
  const aRowsFontCount = Math.floor(width / fontSize)
  const totalRows = Math.ceil(text.length / aRowsFontCount)

  for (let index = 0; index <= totalRows; index++) {
    const fillText = text.substring(index * aRowsFontCount, (index + 1) * aRowsFontCount)
    const yPos = y + index * lineHeight
    context.fillText(fillText, x, yPos, width)
  }
}

export async function drawUserPic (context, userPic) {
  try {
    const userPicImg = await loadImg(userPic)
    circleImg(context, userPicImg, ...userPicPos)
  } catch (e) {
    console.log(e)
  }
}

export async function canvasPoster ({ userPic, targetLovePointName, targetLovePointDesc, targetMostMatchName }) {
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  const context = canvas.getContext('2d')

  try {
    const baseMapImg = await loadImg(baseMapSrc)
    context.drawImage(baseMapImg, 0, 0)

    await drawUserPic(context, userPic)

    context.textAlign = 'center'
    context.textBaseline = 'top'

    // 爱情观
    context.font = pointNameFont
    context.fillStyle = '#ffffff'
    context.fillText(targetLovePointName, ...pointNamePos)

    // 最合适的另一半
    context.font = matchNameFont
    context.fillStyle = '#ea6496'
    context.fillText('最合适的另一半：' + targetMostMatchName, ...matchNamePos)

    // 爱情观描述
    context.textAlign = 'left'
    context.font = pointDescFont
    context.fillStyle = '#000000'
    fillTextWordWrap({
      context,
      text: targetLovePointDesc,
      x: pointDescPos[0],
      y: pointDescPos[1],
      fontSize: pointDescFontSize,
      lineHeight: pointDescLineHeight,
      width: 830
    })

    // 下载二维码
    const qrcodeImg = await loadImg(qrcodeSrc)
    context.drawImage(qrcodeImg, ...qrcodePos)

  } catch (e) {
    console.log(e)
  }

  return canvas
}
