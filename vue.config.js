const path = require('path');
const webpack = require('webpack');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/daniel'
		: '/',
	css: {
		sourceMap: true
	},
	pluginOptions: {
		'style-resources-loader': {
			'preProcessor': 'scss',
			'patterns': [
				path.resolve(__dirname, './src/assets/scss/components/_color.scss'),
				path.resolve(__dirname, './src/assets/scss/components/_grid.scss'),
				path.resolve(__dirname, './src/assets/scss/components/_mixin.scss')
			]
		}
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap(options => Object.assign(options, { limit: 102400 })); // set the limit to 100kb instead;
	},
	configureWebpack: {
		resolve: {
			symlinks: false,
			alias: {
				vue: path.resolve(`./node_modules/vue`),
				'@': path.resolve(__dirname, './src'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@components': path.resolve(__dirname, './src/components'),
				'@layout': path.resolve(__dirname, './src/layout'),
				'@router': path.resolve(__dirname, './src/router'),
				'@store': path.resolve(__dirname, './src/store'),
				'@views': path.resolve(__dirname, './src/views')
			}
		}
	}
};
