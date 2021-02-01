const path = require('path');

const outputDirectory = 'dist';

module.exports = {
  entry: ['babel-polyfill'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};
