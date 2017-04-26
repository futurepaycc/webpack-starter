/**
 * npm install --save-dev babel-core babel-preset-es2015  
 * npm install --save-dev babel-loader  
 */

let path = require('path')
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: "dist" //这个属性webpack-dev-server用，日!,最好和上面一致
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}