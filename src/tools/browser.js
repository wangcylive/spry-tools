/**
 * 浏览器检测
 */

const u = navigator.userAgent

const browser = {
  mobile: /Mobile|Android|Symbian/i.test(u),
  android: /Android|Adr/i.test(u),
  ios: /iPhone|iPad|iPod/i.test(u),
  symbian: /Symbian/i.test(u),
  windowsPhone: /Windows Phone/i.test(u),
  blankBerry: /BB/i.test(u),
  weChat: /MicroMessenger/i.test(u),
  qq: /QQ/i.test(u),
  uc: /UCBrowser/i.test(u),
  chrome: /Chrome/i.test(u) && /Safari/i.test(u),
  safari: /Safari/i.test(u) && !/Chrome/i.test(u),
  firefox: /Firefox/i.test(u),
  ie: /MSIE/i.test(u),
  ie11: /Trident\/7\.0/i.test(u),
  edge: /Edge/i.test(u)
}

export default browser
