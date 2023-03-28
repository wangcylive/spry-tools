const https = require('https')
const fs = require('fs')
const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

app.use(history({
  index: '/index.html'
}))
app.all('*', function (req, res, next) {
  // res.header('Content-Security-Policy', 'img-src https://hd-static.yystatic.com https://unpkg.yy.com; frame-ancestors "none"')
  // res.header('Content-Security-Policy', 'default-src "self"; img-src https://unpkg.yy.com; frame-ancestors "none"')
  // res.header('Content-Security-Policy', "upgrade-insecure-requests; img-src *.yy.com; frame-src 'self' *.yy.com *.wcy.com; report-to csp-endpoint;")
  res.header('Strict-Transport-Security', 'max-age=31536000')
  next()
})

app.use(express.static(path.resolve(__dirname, '../dist')))

app.post('/csp-violation-report-endpoint/', (req, res) => {
  console.log(req.body)

  res.json({
    code: 0
  })
})

const options = {
  key: fs.readFileSync(path.resolve(__dirname, '../pem/_wildcard.wcy.com-key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../pem/_wildcard.wcy.com.pem')),
}

https.createServer(options, app).listen(443, function () {
  console.log('https://localhost.wcy.com')
})
app.listen('80', () => {
  console.log('http://localhost.wcy.com')
})
