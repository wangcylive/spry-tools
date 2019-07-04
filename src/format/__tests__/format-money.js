import formatMoney from '../format-money'

describe('formatMoney test', () => {
  test('formatMoney valid parameter', () => {
    expect(formatMoney(100)).toBe('1.00')

    expect(formatMoney(320000)).toBe('3,200.00')

    expect(formatMoney(-320000)).toBe('-3,200.00')

    expect(formatMoney(320000.0)).toBe('3,200.00')

    expect(formatMoney(0)).toBe('0.00')

    expect(formatMoney(-0)).toBe('0.00')

    expect(formatMoney(12)).toBe('0.12')

    expect(formatMoney(-100)).toBe('-1.00')
  })

  test('formatMoney invalid parameter', () => {
    expect(formatMoney({})).toBe('')

    expect(formatMoney([])).toBe('')

    expect(formatMoney(Infinity)).toBe('')

    expect(formatMoney(320000.01)).toBe('')

    expect(formatMoney('1000')).toBe('')

    expect(formatMoney('a2323')).toBe('')
  })
})
