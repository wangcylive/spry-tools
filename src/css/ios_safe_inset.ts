// 开发尺寸(pt)  像素尺寸(px)   屏幕尺寸  切图规格	像素密度   机型
// 428 x 926   1284 x 2778px  6.7英寸    @3x     458ppi   iPhone 12 Pro Max
// 390 x 844   1170 x 2532px	6.1英寸    @3x     460ppi   iPhone 12 Pro iPhone 12
// 360 x 780   1080 x 2340px	5.4英寸    @3x     476ppi   iPhone 12 mini
// 414 x 896   1242 × 2688px  6.5英寸    @3x     458ppi   iPhone 11 Pro Max iPhone XS Max
// 375 x 812   1125 × 2436px  5.8英寸    @3x     458ppi   iPhone 11 Pro iPhone X iPhone XS
// 414 x 896    828 × 1792px  6.1英寸    @2x     326ppi   iPhone 11 iPhone XR
// 360 x 780   1242 × 2208px  5.5英寸    @3x     401ppi   iPhone 8 Plus iPhone 7 Plus iPhone 6 Plus iPhone 6s Plus
// 375 x 667    750 × 1334px  4.7英寸    @2x     426ppi   iPhone SE 2nd iPhone 8 iPhone 7 iPhone 6 iPhone 6s
// 320 x 568    640 × 1136px	4.0英寸    @2x     326ppi   iPhone SE iPhone 5 iPhone 5s iPhone 5c
const iOSDevicesScreen = [
  [360, 780],
  [375, 812],
  [390, 844],
  [414, 896],
  [428, 926],
]

// 竖屏安全区域距离 top right bottom left
const positions = ['top', 'right', 'bottom', 'left']
const areasPortrait = [44, 0, 20, 0]
const areasLandscape = [0, 44, 21, 44]

function setRootClass(varPrefix = 'safe-') {
  const userAgent = navigator.userAgent
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
  const style = document.createElement('style')
  style.title = 'safe-area'
  const cssVar = `--${varPrefix}`
  const defaultVar = positions.map((pos, index) => `${cssVar}${pos}: 0px;`).join('')
  const portraitVar = positions.map((pos, index) => `${cssVar}${pos}: ${areasPortrait[index]}px;`).join('')
  const landscapeVar = positions.map((pos, index) => `${cssVar}${pos}: ${areasLandscape[index]}px;`).join('')
  const textCss = `:root{${defaultVar}}`
  style.appendChild(document.createTextNode(textCss))
  ;(document.querySelector('head') as HTMLHeadElement)?.append?.(style)
  if (isIOS) {
    const width = window.screen.width
    const height = window.screen.height

    const has =
      iOSDevicesScreen.findIndex(item => {
        const str = `${item[0]},${item[1]}`
        const val1 = `${width},${height}`
        const val2 = `${height},${width}`
        return str === val1 || str === val2
      }) !== -1
    if (has) {
      const textCss = `
        @media screen and (orientation: portrait) {:root{${portraitVar}}}
        @media screen and (orientation: landscape) {:root{${landscapeVar}}}
      `
      style.appendChild(document.createTextNode(textCss))
    }
  }
}

setRootClass()
