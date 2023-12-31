const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]_[hash:base64:12]' },
            },
          }, 
          'sass-loader'
        ],
      },
    ],
  },
});