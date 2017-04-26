//webpack --config webpack2.config.js

let path = require('path')
let webpack  = require('webpack')

module.exports = {
  entry: './app/index2.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist2'),
    publicPath: "dist2" //这个属性webpack-dev-server用，日!,最好和上面一致
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // names: ['vendor', 'manifest']
      name: 'vendor',
      minChunks: function (module) { //有这个配置才会生成默认vendor.js
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ["es2017"],
          // presets: [['es2015', {modules: false}]],
          plugins: [
            'syntax-dynamic-import',
            'transform-async-to-generator',
            'transform-regenerator',
            'transform-runtime'
          ]
        }
      }]
    }]
  }
};