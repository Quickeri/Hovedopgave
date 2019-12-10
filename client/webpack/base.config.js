/* eslint-disable new-cap */
/* eslint-disable import/no-extraneous-dependencies */
// Imports: Dependencies
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const htmlWebpackPlugin = require('html-webpack-plugin');
require('babel-register');

const rootDir = path.resolve(__dirname, '..');

console.log(rootDir, 'ROOTDIR WATCH ME');

// var path = require('path');

const config = {
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: './webpack/html-template/template.html',
			favicon: './webpack/html-template/favicon.ico'
		})
	],
	// Entry
	entry: './src/index.js',
	// Output
	output: {
		path: path.resolve(rootDir, 'dist'),
		// Cachebusting
		filename: '[name].[hash].js',
		// Code Splitting with dynamic imports using promises (this can affect older browsers)
		chunkFilename: '[name].[hash].js',
		publicPath: '/'
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
		alias: {
			components: path.resolve(
				__dirname,
				'..',
				'src',
				'library',
				'components'
			),
			library: path.resolve(__dirname, '..', 'src', 'library'),
			'@mixin': path.resolve(
				__dirname,
				'..',
				'src',
				'library',
				'assets',
				'scss',
				'mixin'
			),
			sassVariables: path.resolve(
				__dirname,
				'..',
				'src',
				'library',
				'assets',
				'scss',
				'variables'
			),
			reset: path.resolve(
				__dirname,
				'..',
				'src',
				'library',
				'assets',
				'scss',
				'reset'
			)
		}
	}
};
module.exports = config;
