const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const rootPath = path.join(__dirname, "./");
const srcPath = path.join(__dirname, "./src");

const rules = [
  {
    test: /\.tsx?$/,
    use: "babel-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader"]
  },
  { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
];

const commonPlugins = [
  new HtmlWebpackPlugin({ template: path.join(srcPath, "index.html") }),
  new MiniCssExtractPlugin({ filename: "dist/css/[name].css" })
];

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
      publicPath: "/",
      filename: "dist/js/[name].js"
    },
    module: {
      rules
    },
    devServer: {
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
