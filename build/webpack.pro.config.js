const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/main.ts",
  output: {
    libraryTarget: "umd",
    library: "EmployeeQuery", // 库名，在全局环境下被挂载在window下
  },
  externals: [nodeExternals()],
};
