const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css',
		}),
	],
});
