const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
// ExtractTextPlugin doesn't work with Webpack 4
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, "./");
const distPath = path.join(__dirname, "./dist");
const srcPath = path.join(__dirname, "./src");

const rules = [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          modules: true,
          localIdentName: "[local]___[hash:base64:5]"
        }
      },
      {
        loader: "postcss-loader"
      }
    ]
  },
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
];

const plugins = [
  new CleanWebpackPlugin(['dist']),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({ template: path.join(srcPath, "index.html") }),
  new MiniCssExtractPlugin()
];

module.exports = {
  entry: path.join(srcPath, "index.tsx"),
  mode: 'production',
  output: {
    path: rootPath,
    // HTML need to be under root for github pages
    publicPath: '',
    filename: "dist/js/[name].js"
  },
  module: {
    rules
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins
};
