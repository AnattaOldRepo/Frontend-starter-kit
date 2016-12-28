var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var postcss      = require('gulp-postcss');
var notify       = require('gulp-notify');
var cssnano      = require('gulp-cssnano')

// utils
var pumped       = require('../../utils/pumped');

// config
var config       = require('../../config/styles');


/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
module.exports = function () {
    return gulp.src(config.paths.src)
        .pipe(plumber())
        .pipe(postcss([
            require('precss'),
            require('postcss-import'),
            require('postcss-url'),
            require('postcss-cssnext'),
            require('lost'),
            require('postcss-short'),
            require('postcss-utilities'),
            require('postcss-zindex'),
            require("postcss-color-function"),
            require("postcss-responsive-font"),
            require('postcss-browser-reporter'),
            require('postcss-reporter')
        ]))
        .pipe(cssnano(config.options.minify))
        .pipe(gulp.dest(config.paths.dest))
        .pipe(notify({
            message: pumped('css Compiled & Minified.'),
            onLast: true
        }));
};
