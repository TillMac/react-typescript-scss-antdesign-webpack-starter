const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const devConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		port: 3000,
		hot: true,
		liveReload: true,
		watchFiles: ['src'],
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	optimization: {
		usedExports: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].css',
		}),
	],
});

module.exports = smp.wrap(devConfig);
