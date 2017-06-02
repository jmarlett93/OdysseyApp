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
      {test: /\.ts$/,
        exclude: /node_modules/,
         loader: 'ts'},
      {test: /\.html$/,
        exclude: /node_modules/,
         loader: 'raw'},
      {test: /\.css$/,
        exclude: /node_modules/,
         loader: 'css-loader'},
       {test: /\.less$/,
         exclude: /node_modules/,
        loader: 'raw!less-loader'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css', '.less']
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
