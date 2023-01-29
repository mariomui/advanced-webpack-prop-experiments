const babelPreset = [
  '@babel/preset-typescript',
  {
    targets: {
      esmodules: true,
    },
  },
];
module.exports = {
  presets: [
    babelPreset,
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-env',
  ],
};
