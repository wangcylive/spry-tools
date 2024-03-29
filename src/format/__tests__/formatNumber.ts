import formatNumber from '@/format/format-number';

test('formatNumber', () => {
  expect(formatNumber(100.01)).toBe('100.01')
  expect(formatNumber(100.999999)).toBe('100.99')
  expect(formatNumber(100)).toBe('100')
  expect(formatNumber('100')).toBe('100')
  expect(formatNumber(-100)).toBe('-100')
  expect(formatNumber(10000)).toBe('1W')
  expect(formatNumber(10012)).toBe('1W')
  expect(formatNumber(11212)).toBe('1.12W')
  expect(formatNumber('10000')).toBe('1W')
  expect(formatNumber(-10000)).toBe('-1W')
  expect(formatNumber(10999990)).toBe('1099.99W')
  expect(formatNumber('10999990')).toBe('1099.99W')
  expect(formatNumber(-10999990)).toBe('-1099.99W')
  expect(formatNumber(106666660)).toBe('1.06亿')
  expect(formatNumber('106666660')).toBe('1.06亿')
  expect(formatNumber(-106666660)).toBe('-1.06亿')
})
