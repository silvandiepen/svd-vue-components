const path = require("path");
const merge = require("webpack-merge");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: ["vue-loader"],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".js", ".vue"]
  },
  context: __dirname,

  entry: "./app.js",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js",
    publicPath: "/build/"
  },

  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  devServer: {
    contentBase: __dirname,
    port: 2000
  }
};
