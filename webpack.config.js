const path = require("path");

module.exports = {
  entry: path.join(__dirname, "source", "index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "result"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
