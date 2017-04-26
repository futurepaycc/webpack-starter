### 一、上手步骤
1. 安装webpack(懒人可以-g)
2. 安装babel相关包
npm install --save-dev babel-core babel-preset-es2015
npm install --save-dev babel-loader  
3，配置babel ——>.babelrc
{ "presets": [ "es2015" ] }  
4.编写webpack.config.js
```js
let path = require('path')
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    }
}
```
5. 执行命令webpack，就可看到效果

### 二、webpack-dev-server使用(最好是本地安装)
1. webpack.config.js中加入
>  output.publicPath: "dist"
2. node_modules/.bin/webpack-dev-server --inline --hot 启动
