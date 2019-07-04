export default function (className) {
  const style = document.createElement('style')

  document.head.appendChild(style)

  function resetVH () {
    const div = document.createElement('div')
    div.style.cssText = 'position:absolute;left:-9999px;top:-9999px;height:100vh;'
    document.body.appendChild(div)

    const vh = div.clientHeight
    const domHeight = document.documentElement.clientHeight

    const height = `calc(100vh - ${vh - domHeight}px)`
    style.innerHTML = `.${className} {height: ${height};} .min-${className} {min-height: ${height};}`

    document.body.removeChild(div)
  }

  resetVH()

  window.addEventListener('resize', resetVH)
}
