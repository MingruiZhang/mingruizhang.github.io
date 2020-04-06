import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import webpack from "webpack";

const rootPath = path.join(__dirname, "..");
const srcPath = path.join(rootPath, "./src");

export const createConfig = (): webpack.Configuration => {
  const isDev = process.env.NODE_ENV === "dev";
  return {
    entry: path.join(srcPath, "index.tsx"),
    mode: isDev ? "development" : "production",
    output: {
      path: rootPath,
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
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(srcPath, "./index.html"),
        filename: path.resolve(rootPath, "./index.html"),
      }),
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: !isDev,
        cleanOnceBeforeBuildPatterns: ["./dist/**/*"],
      }),
    ],
  };
};
