const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        "stream": require.resolve("stream-browserify"),
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "assert": require.resolve("assert/"),
        "url": require.resolve("url/"),
        "zlib": require.resolve("browserify-zlib")
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  },
};
