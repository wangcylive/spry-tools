import jsonFormat from '@/tools/json-format';

test('jsonFormat', () => {
  const test1 = {
    name: "test1\"",
    'w 1': 'w'
  }
  const json1 = '{name:"test1\\\"",\'w 1\':"w"}'
  expect(jsonFormat(JSON.stringify(test1))).toBe(json1)
})
