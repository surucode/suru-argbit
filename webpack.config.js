const path = require("path");

module.exports = {
  entry: {
      'index.js': path.join(__dirname, "/index.ts"),
      'register.js': path.join(__dirname, "/register.ts")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [],
  mode: "production",
  target: "node"
};
