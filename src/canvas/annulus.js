const pixelRatio = window.devicePixelRatio || 1

const width = 150
const height = 150
const lineWidth = 10

// 动画持续时间一秒
const animationDuration = 1000

export default function () {
  const _width = width * pixelRatio
  const _height = height * pixelRatio
  const _lineWidth = lineWidth * pixelRatio

  const canvas = document.createElement('canvas')
  canvas.width = _width
  canvas.height = _height

  const context = canvas.getContext('2d')
  context.lineWidth = _lineWidth
  context.strokeStyle = '#669efd'
  context.beginPath()
  context.arc(_width / 2, _height / 2, _width / 2 - _lineWidth / 2, 0, 2 * Math.PI, false)
  context.stroke()

  let requestAnimationID

  let oldAngel = -0.5 * Math.PI

  return {
    el: canvas,

    draw (angel, done) {

      // -0.5 1.5
      const sAngle = (angel / 360 * 2 - 0.5) * Math.PI

      const changeAngle = (sAngle - oldAngel) / 60

      let animationAngle = oldAngel

      function animation () {
        requestAnimationID = requestAnimationFrame(function () {
          context.clearRect(0, 0, _width, _height)

          context.lineWidth = _lineWidth
          context.strokeStyle = '#669efd'
          context.beginPath()
          context.arc(_width / 2, _height / 2, _width / 2 - _lineWidth / 2, 0, 2 * Math.PI, false)
          context.stroke()

          animationAngle += changeAngle

          if(sAngle > oldAngel) {
            if(animationAngle > sAngle) {
              oldAngel = animationAngle = sAngle
            }
          } else if(sAngle < oldAngel) {
            if(animationAngle < sAngle) {
              oldAngel = animationAngle = sAngle
            }
          }

          context.lineWidth = _lineWidth
          context.lineCap = 'round'
          context.strokeStyle = '#d6e4fe'
          context.beginPath()
          context.arc(_width / 2, _height / 2, _width / 2 - _lineWidth / 2, animationAngle, 1.5 * Math.PI, false)
          context.stroke()

          if(oldAngel === sAngle) {
            cancelAnimationFrame(requestAnimationID)

            if('function' === typeof done) {
              done()
            }
          } else {
            animation()
          }
        })
      }

      animation()
    },
  }
}
