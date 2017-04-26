/**
 * npm install --save-dev babel-core babel-preset-es2015  
 * npm install --save-dev babel-loader  
 */

let path = require('path')
let webpack = require('webpack')

module.exports = {
    entry: {
        main: './app/index.js',
        // vendor: 'lodash' //会聚合进入下面的vendor.js中
    },
    output: {
        // filename: '[name].js',
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "dist" //这个属性webpack-dev-server用，日!,最好和上面一致
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
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}