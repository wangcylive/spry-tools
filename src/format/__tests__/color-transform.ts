import {hex2rgb, rgb2hex} from '../color-transform'

test('hex to rgb', () => {
  expect(hex2rgb('#fff')).toBe('rgb(255, 255, 255)')
  expect(hex2rgb('#ffffff')).toBe('rgb(255, 255, 255)')
  expect(hex2rgb('#99beff')).toBe('rgb(153, 190, 255)')
  expect(hex2rgb('#99beffff')).toBe('rgb(153, 190, 255)')
  expect(hex2rgb('#b229c380')).toBe('rgba(178, 41, 195, 0.5)')
  expect(hex2rgb('#99bef1ed')).toBe('rgba(153, 190, 241, 0.93)')
  expect(hex2rgb('#fgssff')).toBe('')
  expect(hex2rgb('#ffff')).toBe('')
  expect(hex2rgb('#99')).toBe('')
  expect(hex2rgb('#996688F9', true)).toBe('rgba(102, 136, 249, 0.6)')
  expect(hex2rgb('#4c6bff', true)).toBe('rgb(76, 107, 255)')
})

test('rgb to hex', () => {
  expect(rgb2hex('rgb(255, 255, 255)')).toBe('#ffffff')
  expect(rgb2hex('rgb(256, 2222, 333)')).toBe('#ffffff')
  expect(rgb2hex('rgb(153, 190, 255)')).toBe('#99beff')
  expect(rgb2hex('rgba(178, 41, 195, 0.5)')).toBe('#b229c380')
  expect(rgb2hex('rgba(178, 41, 195, .5)')).toBe('#b229c380')
  expect(rgb2hex('rgba(153, 190, 241, 0.93)')).toBe('#99bef1ed')
  expect(rgb2hex('rgba(153, 190, 241, 1)')).toBe('#99bef1')
  expect(rgb2hex('rgba(102, 136, 249, 0.6)', true)).toBe('#996688f9')
  expect(rgb2hex('rgb(1, 1, 1)')).toBe('#010101')
  // expect(rgb2hex('#9999')).toBe('')
})
