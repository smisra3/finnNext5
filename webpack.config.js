const path = require("path");
const webpack = require("./node_modules/webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    header: __dirname + `/widget/header/index.js`,
    footer: __dirname + `/widget/footer/index.js`
  },
  output: {
    path: path.resolve(__dirname, "./widget/dist"),
    filename: "[name].bundle.js"
  },
  watch: true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    contentBase: path.join(__dirname, "./widget/dist"),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: [["es2015", { modules: false }]]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./widget/header/index.html",
      filename: "./index.html"
    })
  ]
};
