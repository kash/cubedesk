const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const deploying = process.env.DEPLOYING;
const deploymentId = process.env.DEPLOYMENT_ID || 'app';
const releaseName = process.env.RELEASE_NAME || '1.0';
const resourceBaseUri = process.env.RESOURCES_BASE_URI || '/public';

const jsMinFile = `${deploymentId}.min.js`;
const cssMinFile = `${deploymentId}.min.css`;

const plugins = [
	new webpack.ProvidePlugin({
		process: 'process',
	}),
	new webpack.DefinePlugin({
		'process.env.RELEASE_NAME': JSON.stringify(releaseName),
		'process.env.RESOURCES_BASE_URI': JSON.stringify(resourceBaseUri),
		'process.env.ENV': JSON.stringify(nodeEnv),
	}),
	new MiniCssExtractPlugin({
		filename: 'dist/' + cssMinFile,
	}),
	new OptimizeCssAssetsPlugin(),
];

module.exports = [
	{
		entry: './client/components/App.tsx',
		output: {
			path: __dirname,
			filename: 'dist/' + jsMinFile,
		},
		stats: {
			preset: 'none',
			timings: true,
		},
		devtool: deploying ? 'source-map' : 'eval',
		mode: deploying ? 'production' : 'development',
		plugins,
		watch: !deploying,
		watchOptions: {
			aggregateTimeout: 2000,
			poll: 5000,
			ignored: ['**/node_modules', '**/.git'],
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
			fallback: {crypto: false},
			alias: {
				process: 'process/browser',
			},
		},
		module: {
			rules: [
				{
					test: /\.((t|j)sx?)$/,
					exclude: /node_modules/,
					loader: 'ts-loader',
					options: {
						transpileOnly: true,
					},
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					exclude: /node_modules/,
					use: 'file-loader?name=[name].[ext]&outputPath=./dist/',
				},
			],
		},
	},
];
