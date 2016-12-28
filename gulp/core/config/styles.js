// utils
var deepMerge = require('../utils/deepMerge');

// config
var overrides = require('../../config/styles');
var assets = require('./common').paths.assets;

/**
 * Style Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
	paths: {
		watch: [
			assets.src + '/css/**/*.css',
			'!' + assets.src + '/css/**/*_tmp\\d+.css'
		],
		src:   [
			assets.src + '/css/*.css',
			'!' + assets.src + '/css/**/_*'
		],
		dest:  assets.dest + '/css',
		clean: assets.dest + '/css/**/*.{css,map}'
	},

	options: {
		minify: {
			autoprefixer: false,
			discardComments: { removeAll: true }
		}
	}
}, overrides);
