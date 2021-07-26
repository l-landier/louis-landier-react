const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const alias = require('./alias');
const babelConfig = require('./babel.config');

module.exports = {
  entry: {
    index: './src/index.jsx',
    style: './src/sass/style.scss',
  },
  //entry: path.join(__dirname, "src", "index.js"),
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { contentBase: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: babelConfig,
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
        test: /\.(woff2?|ttf|woff|eot|svg|jpg|png|gif|mp3|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    alias,
    extensions: ['*', '.js', '.jsx', '.scss', '.svg', '.jpg', '.png', '.gif', '.pdf']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  //output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      //template: path.join(__dirname, "src", "index.html"),
      favicon: './src/img/rel-icon.png',
      template: './src/index.html',
    }),
  ],
};
