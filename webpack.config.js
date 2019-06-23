const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/client/src/index.jsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/server/public/javascripts"
  },

  plugins: [
    new Dotenv({
      path: "./.env"
    })
  ],

  devtool: "source-map",

  resolve: {
    extensions: [".jsx", ".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2019 を ES5 に変換
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }
        ]
      }
    ]
  }
};
