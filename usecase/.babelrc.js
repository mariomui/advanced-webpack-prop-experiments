const babelPreset = ['@babel/preset-typescript', {}];
module.exports = {
  presets: [
    babelPreset,
    '@babel/preset-env',
    // ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
