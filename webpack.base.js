const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 51200, // 中等圖片閾值：50 KB
							fallback: 'file-loader',
							outputPath: 'assets/images',
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'font/[name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
		}),
		new ESLintPlugin({
			// ESLint 檢查的文件類型
			extensions: ['js', 'jsx', 'ts', 'tsx'],
			// 在熱重載時自動運行 ESLint
			emitWarning: true,
			// 如果有 ESLint 錯誤，繼續執行程式
			emitError: false,
			// ESLint 檢查的目錄
			files: 'src',
			cache: false,
			threads: true,
		}),
	],
	resolve: {
		roots: [path.resolve(__dirname)],
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
		},
		extensions: ['.ts', '.tsx', '.js'],
	},
};
