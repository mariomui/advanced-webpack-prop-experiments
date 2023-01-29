const babelPreset = ['@babel/preset-typescript', { allExtensions: true }];
module.exports = {
  presets: [
    ['@babel/preset-env', {}],
    babelPreset,
    // ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
