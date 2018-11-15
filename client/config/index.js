var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var customConfig = null;
try {
  customConfig = require('./custom.config');
} catch (e) {
}
var
  entry = {
    'index': './src/main.js'
  },
  dev = [],
  prod = []

for (var html in entry) {
  dev.push(
    new HtmlWebpackPlugin({
      filename: html + '.html',
      template: 'index.html',
      inject: true,
      chunks: ["manifest", "vendor", html]
    })
  );

  prod.push(
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/', html + '.html'),
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency',
      chunks: ["manifest", "vendor", html]
    })
  )
}

module.exports = {
  entry: entry,
  build: {
    env: require('./prod.env'),
    pages: prod,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './static',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    pages: dev,
    env: require('./dev.env'),
    port: 2333,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: process.argv.indexOf('--mock') === -1 ? Object.assign(
      {
        '/api': {
          target: 'http://127.0.0.1:8888/api',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''  // 若target中没有/api、这里又为空，则404；
          }
        }
      }, (customConfig ? customConfig.proxyTable : {})
    ) : {}
  },
  // CSS Sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the CSS-Loader README
  // (https://github.com/webpack/css-loader#sourcemaps)
  // In our experience, they generally work as expected,
  // just be aware of this issue when enabling this option.
  cssSourceMap: false
}
