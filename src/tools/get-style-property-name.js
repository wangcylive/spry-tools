import getHyphenCase from './get-hyphen-case'

const prx = [ '', '-webkit-', '-moz-', '-ms-', '-o-' ]
const div = document.createElement('div')
const style = div.style

export default function (property) {
  property = getHyphenCase(property)
  let value = ''

  for (let i = 0, length = prx.length; i < length; i++) {
    value = ''

    if (!prx[ i ]) {
      value = property
    } else {
      value = prx[ i ] + property
    }

    if (value in style) {
      return value
    }
  }
}
