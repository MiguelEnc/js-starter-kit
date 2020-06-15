import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash from "webpack-md5-hash";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

process.env.NODE_ENV = "production";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    vendor: path.resolve(__dirname, "src/vendor.js"),
    main: path.resolve(__dirname, "src/index.html"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
  },
  plugins: [
    // Generate an external css file with hashed name
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    // Hash files using MD5 to change their names
    // when content changes
    new WebpackMd5Hash(),
    // Create a separate bundle for vendor libraries
    // so they are catched separately
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
    }),
    // Dinamic HTML generation
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favIcon: "src/favicon.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.{js|jsx}$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
