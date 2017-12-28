const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
      }
    ],

  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        vue: {
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    })
  ],
  /*--resolve-aliasを入れないと、デフォルトでVue.jsがRuntime-only buildになり、正常に動いてくれない
http://qiita.com/rsooo/items/0a9caf9ee804874eac03*/
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}