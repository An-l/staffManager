var webpack = require('webpack')
module.exports = {
    entry: {
        index: ['./src/index.js']
    },
    output: {
        path: './dist/',
        filename: 'index.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            text: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        },{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //加载webpack-dev-server插件
    ],
    devServer: {
        //设置webpack-dev-server的模式为热加载
        hot: true,
        inline: true
    }
}
