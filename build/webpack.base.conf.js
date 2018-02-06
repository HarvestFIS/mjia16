'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const vuxLoader = require('vux-loader') //使用vux的ui 必须使用这个来加载

function resolve (dir) {
	//console.log(dir);
	//console.log(path.resolve(__dirname, 'src/common/js/util.js'));
	//console.log(path.join(__dirname, '..', dir));
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
	  'jiaUtil$': resolve( 'src/common/js/util.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
	    exclude: [resolve('node_modules')] // 不需要编译node_modules下的js
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        include: [resolve('src')],
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:require.resolve('zepto'),
        loader: 'exports-loader?window.Zepto!script-loader'
      }
    ],   
  }
}
module.exports = vuxLoader.merge(webpackConfig,{
  options:{},
  plugins:[{
    name:'vux-ui'
  },{
    name: 'less-theme',
    path: 'src/common/theme/theme.less'
  }]
})
