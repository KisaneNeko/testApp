'use strict';
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
                loader: 'url'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: '../index.html',
                to: path.resolve(__dirname, 'dist')
            }
        ])
    ],
    devServer: {
        port: 1234,
        contentBase: './'
    },
    resolve: {
        root: [path.resolve('src')],
        extensions: ['', '.js']
    }
};
