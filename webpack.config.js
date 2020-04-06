const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = path.join(__dirname, "./src");

module.exports = () => {
  const isDev = process.env.NODE_ENV === "dev";
  return {
    entry: path.join(srcPath, "index.tsx"),
    mode: isDev ? "development" : "production",
    output: {
      path: __dirname,
      // HTML need to be under root for github pages
      filename: "dist/[name].[hash:8].js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      open: true,
      hot: true,
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(srcPath, "./index.html"),
        filename: path.resolve(__dirname, "./index.html"),
      }),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: !isDev,
        cleanOnceBeforeBuildPatterns: ["./dist/**/*"],
      }),
    ],
  };
};
