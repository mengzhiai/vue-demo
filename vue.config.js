/*
 * @Author: your name
 * @Date: 2019-12-10 14:41:45
 * @LastEditTime: 2019-12-10 15:11:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\vue.config.js
 */
const webpack = require('webpack');
const path = require('path');
module.exports = {
  //基本url
  publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/online/' : './',
  //输出目录
  outputDir: 'dist',
  //存放生成的静态资源文件
  assetsDir: 'assets',
  //是否保存时进行代码检查
  lintOnSave: true,
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  productionSourceMap: true,
  configureWebpack: config =>{
    if(process.env.NODE_ENV == "production"){
      //生产环境
    }else{
      //测试环境
    }
  },
  devServer: {
    //是否启动时打开浏览器
    open: false,
    //ip地址
    host: 'localhost',
    //端口号
    port: 6060,
    //是否启动https
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: "http://localhost:6000",
        changeOrigin: true,
        ws: true, // proxy websockets
        pathRewrite: { //重写路径
          "^/api": ''
        }
      }
    }
  }
}