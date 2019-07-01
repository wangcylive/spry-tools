export const supportAnimationEvent = !!(typeof AnimationEvent !== 'undefined' || typeof WebKitAnimationEvent !== 'undefined')

export function getEventType (type) {
  if (/^Animation(Start|Iteration|End)$/.test(type)) {
    if (typeof AnimationEvent !== 'undefined') {
      return type.toLowerCase()
    } else if (typeof WebKitAnimationEvent !== 'undefined') {
      return 'webkit' + type
    }
  }
}

const eventType = {
  start: getEventType('AnimationStart'),
  end: getEventType('AnimationEnd'),
  iteration: getEventType('AnimationIteration')
}

export default eventType
