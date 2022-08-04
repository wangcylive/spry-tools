function jsonFormat(json: string) {
  return json.replace(/"([\w\s]+)"(\s*:\s*)/g, function (match, p1, p2) {
    if (!p1.match(/\s/)) {
      return p1 + p2
    }
    return `'${p1}'${p2}`
  })
}

export default jsonFormat
