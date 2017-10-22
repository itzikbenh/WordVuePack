
const path              = require('path');
const webpack           = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const browserSync       = require('browser-sync');


module.exports = env => {
	const config = {
		devServer: {
			hot: true,
			headers: { 'Access-Control-Allow-Origin': '*' }
		},
		entry: {
			vendor: ['vue', './assets/scss/vendor.scss'],
			app: './assets/js/app.js',
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'public/js/'),
			publicPath: 'http://localhost:8080/'
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: ['css-loader', 'postcss-loader', 'sass-loader']
					})),
				},
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel-loader',
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
			]
		},
		resolve: {
			extensions: ['.js'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		},
		plugins: [
			new ProgressBarPlugin(),
			new webpack.NamedModulesPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor']
			}),
			new webpack.HotModuleReplacementPlugin(),
		]
	};

	if (env.server) {
		config.plugins.push(new ExtractTextPlugin('[name].css'));
	} else {
		config.plugins.push(new ExtractTextPlugin('../css/[name].css'));
	}

	if (env.browserSync) {
		browserSync({
			proxy: 'wordvue.dev',
			port: 3000,
			files: [
				'**/*.php'
			],
			ghostMode: {
				clicks: false,
				location: false,
				forms: false,
				scroll: false
			},
			injectChanges: true,
			logFileChanges: true,
			logLevel: 'debug',
			logPrefix: 'php-file-change',
			notify: false,
			reloadDelay: 0
		});
	}

	return config;
};
