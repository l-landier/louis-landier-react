const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./alias').webpack;

module.exports = {
  entry: {
    index: './src/index.jsx',
    style: './src/sass/style.scss',
  },
  //entry: path.join(__dirname, "src", "index.js"),
  resolve: {
    alias,
    extensions: ['*', '.js', '.jsx', '.scss', '.svg', '.jpg', '.png', '.gif']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  //output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer', { grid: true, Browserslist: ['>1%'] }]],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|ttf|woff|eot|svg|jpg|png|gif|mp3)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      //template: path.join(__dirname, "src", "index.html"),
      template: './src/index.html',
    }),
  ],
};
