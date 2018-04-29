const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
      rules: [
          {
              test: /\.js/,
              loaders: ['babel-loader'],
              exclude: /node_modules/,
          },
          {
              test: /\.vue$/,
              loaders: ['vue-loader'],
              exclude: /node_modules/,
          },
      ],
  },

  resolve: {
      extensions: ['.js', '.vue'],
  },
    context: __dirname,

    entry: {
        'index': './src/index.js',
        'index.min': './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'svd-vue-components',
        libraryTarget: 'umd',
    },

    externals: [
        'vue',
    ],

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
        }),
    ],
};
