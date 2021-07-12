const myPostcssPlugin = require("postcss-my-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              "postcss-import",
              ["postcss-short", { prefix: "x" }],
              require.resolve("my-postcss-plugin"),
              myPostcssPlugin({ myOption: true }),
              // Deprecated and will be removed in the next major release
              { "postcss-nested": { preserveEmpty: true } },
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
    ],
  },
};
