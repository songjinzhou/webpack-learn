const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

const _mergeConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "爸爸，打包成功了",
      suppressSuccess: true,
    }),
    // new BundleAnalyzerPlugin(),
    new ProgressBarPlugin(),
    new DashboardPlugin()
  ]
}

 module.exports = merge(_mergeConfig, common);
