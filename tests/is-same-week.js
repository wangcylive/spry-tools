import isSameWeek from '@/tools/is-same-week'

test('isSameWeek', () => {
  const date1 = new Date(2019, 6, 1).getTime()
  const date2 = new Date(2019, 6, 2).getTime()
  const date3 = new Date(2018, 6, 1).getTime()
  const date4 = new Date(2019, 6, 6).getTime()
  expect(isSameWeek(date1, date2)).toBeTruthy()
  expect(isSameWeek(date1, date3)).toBeFalsy()
  expect(isSameWeek(date2, date4)).toBeTruthy()
})
