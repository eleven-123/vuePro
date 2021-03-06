var htmlwebpackplugin = require('html-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new VueLoaderPlugin(),
    new htmlwebpackplugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/, use: ['style-loader', 'css-loader']},
      {test:/\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|png|svg|jpeg)$/, use: 'file-loader'},
      {test:/\.vue$/, use: 'vue-loader'},
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}