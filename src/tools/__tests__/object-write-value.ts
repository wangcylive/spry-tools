import objectWriteValue from '@/tools/object-write-value';

test('objectWriteValue', () => {
  const test1 = {}
  objectWriteValue('a', '', test1)
  expect(test1).toEqual({a: ''})

  const test2 = {a: '', b: ''}
  objectWriteValue('a', 'a', test2)
  expect(test2).toEqual({a: 'a', b: ''})

  const test3 = {a: {b: ''}}
  objectWriteValue('a.b', 'a', test3)
  expect(test3).toEqual({a: {b: 'a'}})

  const test4 = {a: {b: '', c: 'c'}}
  objectWriteValue('a.b', 'a', test4)
  expect(test4).toEqual({a: {c: 'c', b: 'a'}})

  const test5 = {a: {b: {c: 'c'}}}
  objectWriteValue('a.b.c', [2], test5)
  expect(test5).toEqual({a: {b: {c: [2]}}})
})
