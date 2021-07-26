import number2chinese from '@/format/number2chinese'

test('number to chinese', () => {
  expect(number2chinese(0)).toBe('零')
  expect(number2chinese(1)).toBe('一')
  expect(number2chinese(10)).toBe('十')
  expect(number2chinese(11)).toBe('十一')
  expect(number2chinese(20)).toBe('二十')
  expect(number2chinese(31)).toBe('三十一')
  expect(number2chinese(99)).toBe('九十九')
  expect(number2chinese(1.1)).toBe('1.1')
  expect(number2chinese(-5)).toBe('-5')
  expect(number2chinese(100)).toBe('100')
  expect(number2chinese(Infinity)).toBe('Infinity')
  expect(number2chinese(NaN)).toBe('NaN')
})