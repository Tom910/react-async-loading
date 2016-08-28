var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: './dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: ['babel'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true
    })
  ]
};
