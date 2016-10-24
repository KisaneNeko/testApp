'use strict';
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve('src'),
    entry: [
        //'webpack-dev-server/client?http://localhost:8080',
        //'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: `react-demo.js`,
        library: `react-demo`,
        libraryTarget: 'umd'
    },
    devtool: 'cheap-inline-source-map',
    babel: {
        presets: ['es2015', 'react', 'babel-preset-stage-2'],
        plugins: ["react-hot-loader/babel"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                cacheDirectory: true,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'test')
                ]
            },
            {
                test: /\.css$/,
                loaders: ['style', 'raw']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)(\?.*$|$)$/,
                loader: 'url-loader'
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
        contentBase: './'
    },
    resolve: {
        root: [path.resolve('src')],
        extensions: ['', '.js']
    }
};
