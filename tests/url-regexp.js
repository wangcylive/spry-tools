import urlRegExp from '@/tools/url-regexp'

test('urlRegExp', () => {
  const url1 = 'www.baidu.com'
  expect(url1.match(urlRegExp)[0]).toBe(url1)
})