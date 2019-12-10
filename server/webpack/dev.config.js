const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    // Devtool - Maps error to source file
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ],
    // Reload on file change
    // watch: true,
    // DevServer - Tells server to serve files from the "dist" directory
    devServer: {
        // hot: true,
        contentBase: './dist'
        // port: 3000
    }
});
