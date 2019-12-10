/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
// Imports: Dependencies
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const htmlWebpackPlugin = require('html-webpack-plugin');
require('babel-register');

const rootDir = path.resolve(__dirname, '..');
// var path = require('path');

const config = {
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new htmlWebpackPlugin({
    //         template: './webpack/html-template/template.html',
    //         favicon: './webpack/html-template/favicon.ico'
    //     })
    // ],
    // Entry
    entry: './tsTest/root.js',
    // Output
    output: {
        path: path.resolve(__dirname, './public'),
        // Cachebusting
        filename: '[name].[hash].js',
        // Code Splitting with dynamic imports using promises (this can affect older browsers)
        chunkFilename: '[name].[hash].js'
    },
    // Loaders
    module: {
        rules: [
            // JavaScript/JSX
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            // Sass
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'dashes'
                        }
                    },
                    'sass-loader'
                ]
            },
            // TypeScript
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            // GrahpQL
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
        modules: [
            path.resolve(rootDir, 'src'),
            path.resolve(rootDir, 'node_modules')
        ],
        alias: {}
    }
};
module.exports = config;
