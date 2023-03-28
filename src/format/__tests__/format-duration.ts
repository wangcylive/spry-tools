import formatDuration from '../format-duration'

test('formatDuration', () => {
  expect(formatDuration(0)).toBe('00:00')
  expect(formatDuration(50)).toBe('00:50')
  expect(formatDuration(60)).toBe('1:00')
  expect(formatDuration(100)).toBe('1:40')
  expect(formatDuration(3600)).toBe('1:00:00')
  expect(formatDuration(3600 * 30)).toBe('1天 06:00:00')
  expect(formatDuration(3600 * 24 * 40)).toBe('40天 00:00:00')
  expect(formatDuration(3600 * 24 * 40 + 100)).toBe('40天 00:01:40')
})
