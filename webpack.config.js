const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');

module.exports = {
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins:[
    new HWP({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MCEP({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}