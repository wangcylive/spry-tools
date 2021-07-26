import compareVersion from '@/tools/compare-version'

test('compareVersion', () => {
  expect(compareVersion('7.49.0', '7.49.1')).toBe(-1)
  expect(compareVersion('7.1', '7.0')).toBe(1)
  expect(compareVersion('7.1', '7.1.0')).toBe(0)

  expect(compareVersion('2.0', '1.9.9.9')).toBe(1)
  expect(compareVersion('1.10.0', '1.9.39.9')).toBe(1)

  expect(compareVersion('2.030', '2.029.99')).toBe(1)
  expect(compareVersion('2.03', '2.030')).toBe(-1)

  expect(compareVersion('v1.0.0', '1.0.1')).toBe(-1)
})