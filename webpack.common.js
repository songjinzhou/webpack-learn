const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const loading = {
  html: '记载中'
}

 module.exports = {
    entry: {
      index: './src/index.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack包教不包会（一）',
        template: './src/index.html',
        loading
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true, // 开启多核
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/, // 去掉node_modules 转换
        },
        {
          // 用正则去匹配要用该 loader 转换的 CSS 文件
          test: /\.less$/,
          use:['style-loader', 'css-loader', 'less-loader'],
          exclude: /node_modules/,
          include: './src'
        },
        {
          test: /\,png|svg|jpg|jpeg|gif$/,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ]
    },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };

