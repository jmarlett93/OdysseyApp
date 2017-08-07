let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

config = {

  entry: './client/main.ts',
  output: {
    path: '/dist',
    filename: 'app.bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {test: /\.ts$/, loader: 'ts'},
      {test: /\.html$/, loader: 'raw-loader'},
       {test: /\.css$/,
           use: [
              {loader:'style-loader'},
              {loader: 'css-loader',
               options: { 
                modules: true,
                sourceMap: true}
              }
            ]
         },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html', '.css']
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

module.exports = config;