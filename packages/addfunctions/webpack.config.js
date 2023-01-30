// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { node } = require('webpack');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const babelModuleRuleConfig = {
  test: /(\.m?[j,t]s)x?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

/** @type {import('webpack').Configuration} */
const browserConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist/esm'),
    filename: 'index.mjs',
    library: {
      type: 'module',
    },
  },
  target: 'web',
  experiments: {
    outputModule: true,
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 7777,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],

  module: {
    rules: [
      babelModuleRuleConfig,
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
/** @type {import('webpack').Configuration} */
const nodeConfig = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'index.js',
    library: {
      type: 'module',
    },
  },
  target: 'es2020',
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      babelModuleRuleConfig,
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs'],
  },
};
module.exports = () => {
  if (isProduction) {
    nodeConfig.mode = 'production';
    browserConfig.mode = 'production';

    // config.plugins.push(new MiniCssExtractPlugin());
    browserConfig.plugins.push(new MiniCssExtractPlugin());
  } else {
    nodeConfig.mode = 'development';
    browserConfig.mode = 'production';
  }
  return [nodeConfig, browserConfig];
};
