const presets = [
  [
    '@babel/preset-env',
    {
      targets: ['last 2 versions', 'ie 11'],
      useBuiltIns: 'usage',
      corejs: 3
    }]
]