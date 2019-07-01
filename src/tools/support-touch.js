function support () {
  let is = false
  try {
    const type = document.createEvent('TouchEvent')
    type.initEvent('touchstart')
    is = true
  } catch (e) {
  }
  return is
}

export default support()
