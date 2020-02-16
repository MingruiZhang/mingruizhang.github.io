const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "./");
const srcPath = path.join(__dirname, "./src");

const commonPlugins = [new HtmlWebpackPlugin({ template: path.join(srcPath, "index.html") })];
const devPlugin = [new webpack.HotModuleReplacementPlugin()];
const prodPlugin = [new CleanWebpackPlugin(["dist"])];

module.exports = () => {
  const isDev = process.env.NODE_ENV === "dev";
  const plugins = isDev ? [...commonPlugins, ...devPlugin] : [...commonPlugins, ...prodPlugin];
  return {
    entry: path.join(srcPath, "index.tsx"),
    mode: isDev ? "development" : "production",
    output: {
      path: rootPath,
      // HTML need to be under root for github pages
      publicPath: "./",
      filename: "dist/[name].[hash:8].js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
    devServer: {
      open: true,
      historyApiFallback: true
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins
  };
};
