function format (match) {
  return match.charAt(1).toUpperCase()
}

export default function (propertyName) {
  return propertyName.replace(/^-/, '').replace(/-[a-zA-Z]/g, format)
}
