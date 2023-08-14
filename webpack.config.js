const path = require('path');

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
    }
}