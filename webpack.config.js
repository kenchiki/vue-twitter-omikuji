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
        test: /test2\.js$/,
        loader: 'imports-loader?this=>window!exports-loader?test2'
      },
      // {
      //   test: /createjs\.min\.js$/,
      //   loader: 'imports-loader?this=>window!exports-loader?createjs'
      // },
      {
        test: /createjs/,
        loader: 'imports-loader?this=>window!exports-loader?createjs'
      },
      {
        test: /omikuji\.js$/,
        loader: 'imports-loader?this=>window!exports-loader?omikuji'
      }
    ],

  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     vue: {
    //       loaders: {
    //         js: 'babel-loader'
    //       }
    //     }
    //   }
    // }),
    new webpack.ProvidePlugin({
      'test2': 'test2',
      'createjs': 'createjs',
      'omikuji': 'omikuji'
    })
  ],
  /*--resolve-aliasを入れないと、デフォルト（vueのpackageのmain）がRuntime-only buildの方を指定していて、正常に動いてくれない
http://qiita.com/rsooo/items/0a9caf9ee804874eac03
*/
  resolve: {
    alias: {
      // createjs: path.join(__dirname, 'node_modules', 'createjs', 'builds', '1.0.0', 'createjs.min.js'),
      createjs: path.join(__dirname, 'node_modules', 'createjs', 'builds', 'createjs-2015.11.26.min.js'),
      omikuji: path.join(__dirname, 'src', 'omikuji.js'),
      test2: path.join(__dirname, 'src', 'test2.js'),
      vue: 'vue/dist/vue.js'
    }
  }
}