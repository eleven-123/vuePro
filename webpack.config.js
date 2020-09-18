var htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins:[
    new htmlwebpackplugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html'
    })
  ],
  module:{
    rules:[
      {test:/\.css$/, use: 'css-loader'},
      {test:/\.vue$/, use: 'vue-loader'}
    ]
  }
}