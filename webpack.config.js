const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',/* ソースマップをファイル内に出力させる場合は以下を追加 */
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
      },
      {
        test: /createjs/,
        loader: 'imports-loader?this=>window!exports-loader?window_load_createjs'
      },
      {
        test: /omikuji\.js$/,
        loader: 'imports-loader?this=>window!exports-loader?window_load_omikuji'
      }
    ],

  },
  plugins: [
    new webpack.ProvidePlugin({
      'window_load_test2': 'window_load_test2',
      'window_load_createjs': 'window_load_createjs',
      'window_load_omikuji': 'window_load_omikuji',
      '$': 'jquery'
    })
  ],
  /*--resolve-aliasを入れないと、デフォルト（vueのpackageのmain）がRuntime-only buildの方を指定していて、正常に動いてくれない
http://qiita.com/rsooo/items/0a9caf9ee804874eac03
*/
  resolve: {
    alias: {
      window_load_createjs: path.join(__dirname, 'node_modules', 'createjs', 'builds', '1.0.0', 'createjs.min.js'),
      window_load_omikuji: path.join(__dirname, 'src', 'omikuji.js'),
      vue: 'vue/dist/vue.js'
    }
  }
}