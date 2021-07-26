module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'entry',
        'corejs': 'corejs@3'
      }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  'plugins': [
    '@babel/plugin-transform-runtime'
  ]
}
