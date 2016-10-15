'use strict';
const path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: {
        'angular-demo': ['./']
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: `[name].js`,
        library: `[name]`,
        libraryTarget: 'umd'
    },
    devtool: 'cheap-inline-source-map',
    babel: {
        presets: ['es2015']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel'],
                cacheDirectory: true,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test')
                ]
            },
            {
                test: /\.tpl\.html$/,
                exclude: /node_modules/,
                loader: 'ng-cache'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?.*$|$)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: './'
    },
    resolve: {
        root: [path.resolve('src')],
        extensions: ['', '.js']
    }
};
