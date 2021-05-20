// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  /*
   ** source map: 是一个信息文件，里面储存着位置信息(转换后的代码的每一个位置，所对应的转换前的位置)。
   ** cheap: source map 会忽略文件的列信息
   ** module: 会定位到 ts源码，而不是转译后的 js源码。
   ** eval-source-map: 将source map以 DataURI 形式打包到文件中。
   */
  entry: "./src/index.ts",
  devtool: "eval-cheap-source-map",
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     devtools: "cheap-module-eval-source-map",
    //   },
    // }),
    // 通过一个模版帮助我们生成网站首页，并将输出文件嵌入
    new HtmlWebpackPlugin({
      template: "./src/tpl/index.html",
    }),
  ],
};
