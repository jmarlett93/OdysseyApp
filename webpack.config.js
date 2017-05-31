var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './client/main.ts',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.less$/,
       loader: 'style!css!less' }
    ]
  },
  
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', 'less']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
      }
    })
  ]

};
