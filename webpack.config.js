const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  target: "node",
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "suru.js",
    path: path.resolve(__dirname, "dist")
  }
};