'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

module.exports = {
    entry: ['./src/js/main.jsx'],

    output: {
        path: __dirname,
        filename: './src/js/app.js'
    },

    plugins: [
        new ExtractTextPlugin('./css/app.css')
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,  exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2' , 'react'] }
            },
            { test: /\.svg$/, loader: 'svg-loader?pngScale=2' },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }  
            },
        ],

    },

    stats: {
        // Colored output
        colors: true
    },

    // Create Sourcemaps for the bundle
    // devtool: 'source-map'
};