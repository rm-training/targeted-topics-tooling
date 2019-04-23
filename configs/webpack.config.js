// npm install --save-dev webpack webpack-cli babel-loader
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
  entry: './3-bundle-me.js',
  output: {
    filename: '3-bundle-me.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
