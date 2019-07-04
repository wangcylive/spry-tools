export default function (elem) {
  return new Promise((resolve, reject) => {
    try {
      if (elem.nodeName === 'INPUT') {
        elem.select()

        const result = document.execCommand('copy')

        if (result) {
          resolve()
        } else {
          reject()
        }
      } else {
        elem.contentEditable = true
        const range = document.createRange()
        range.selectNodeContents(elem)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
        elem.contentEditable = false

        const result = document.execCommand('copy')

        document.activeElement.blur()

        if (result) {
          sel.removeAllRanges()
          resolve()
        } else {
          reject()
        }
      }
    } catch (e) {
      reject()
    }
  })
}
