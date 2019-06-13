const path = require('path');

module.exports = {
  entry: './src/main/src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static/build/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // create style nodes from JS strings
          { loader: 'css-loader' }, // translate CSS into CommonJS
        ]
      }
    ]
  }
};