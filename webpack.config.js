const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: 'dist/',
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "none",
  module: {
      rules: [
          {
              test: /\.(png|jpg)$/,
              type: "asset/resource"
          },
          {
            test: /\.(png|jpg)$/,
            type: "asset/resource"
        }
      ]
  }
};
