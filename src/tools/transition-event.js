export const supportTranstionEvent = !!(typeof TransitionEvent !== 'undefined' || typeof WebKitTransitionEvent !== 'undefined')

export function getTransitionEndEvent () {
  if (typeof TransitionEvent !== 'undefined') {
    return 'transitionend'
  } else if (typeof WebKitTransitionEvent !== 'undefined') {
    return 'webkitTransitionEnd'
  }
}

const eventType = getTransitionEndEvent()

export default eventType
