import QRcode from 'qrcode'
import { isProd } from '@/common/index'
import baseMapSrc from './img/poster.jpg'

const canvasWidth = 1080
const canvasHeight = 1518

const sharePage = isProd ? 'https://m.sugarapp.cn/share/invitation/' : 'http://m.sugar5.club/share/invitation/'
const userPicPos = [451, 161, 90]
const userNamePos = [540, 360]
const userNameColor = 'rgba(95,65,44,1)'
const userNameFont = '52px sans-serif'
const qrcodePos = [419, 683, 240, 240]

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

export async function drawUserPic (context, userPic) {
  try {
    const userPicImg = await loadImg(userPic)
    circleImg(context, userPicImg, ...userPicPos)
  } catch (e) {
    console.log(e)
  }
}

export async function canvasPoster ({ userPic, userName, uid }) {
  const canvas = document.createElement('canvas')
  canvas.width = canvasWidth
  canvas.height = canvasHeight
  const context = canvas.getContext('2d')

  try {
    const baseMapImg = await loadImg(baseMapSrc)
    context.drawImage(baseMapImg, 0, 0)

    await drawUserPic(context, userPic)

    context.font = userNameFont
    context.fillStyle = userNameColor
    context.textAlign = 'center'
    context.textBaseline = 'top'
    context.fillText(userName, ...userNamePos)

    const qrcodeUrl = await QRcode.toDataURL(sharePage + uid, { width: 240, errorCorrectionLevel: 'H', margin: 1 })
    const qrcodeImg = await loadImg(qrcodeUrl)
    context.drawImage(qrcodeImg, ...qrcodePos)
  } catch (e) {
    console.log(e)
  }

  return canvas
}
