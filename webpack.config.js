const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {

    // Working Mode
    mode: 'development',

    // Webpack Start scaning from the following location
    entry: {
        app: path.resolve(__dirname, 'src/app.js')
    },

    // Webpack start writing code to the following location
    output: {
        path: path.resolve(__dirname, 'dis'),
        filename: '[name].[contenthash].js',
        clean: true
    },

    // webpack only understand js and json by default
    // image file, css file, svg file does not know how to handle any type of file
    // loaders do help the webpack to understand and scan css, html, imge or any other file tyle
    // webpack(convert to modules and import (loaders))
    // and more work is needed if then plugin or js function will help to loader to perform task

    // loaders

    //plugin
    plugins: [new HtmlWebpackPlugin({
        title: 'just a html page title',
        name: 'index.html',
        template: path.resolve(__dirname, 'src/template-for-index.html'),
    })],
}