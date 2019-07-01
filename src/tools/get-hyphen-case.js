function format (match) {
  return '-' + match.toLowerCase()
}

export default function (propertyName) {
  if (propertyName.indexOf('-') !== -1) {
    return propertyName.toLowerCase()
  } else {
    return propertyName.replace(/^[A-Z]/, function (match) {
      return match.toLowerCase()
    }).replace(/^(webkit|moz|ms|o)/i, function (match) {
      return '-' + match
    }).replace(/[A-Z]/g, format)
  }
}
