var config       = require('../config')
if(!config.tasks.css) return

var gulp          = require('gulp')
var gulpif        = require('gulp-if')
var browserSync   = require('browser-sync')
var sourcemaps    = require('gulp-sourcemaps')
var handleErrors  = require('../lib/handleErrors')
var postcss       = require('gulp-postcss');
var path          = require('path')
var cssnano       = require('gulp-cssnano')

var paths = {
  src: path.join(config.root.src, config.tasks.css.src, config.tasks.css.entry),
  dest: path.join(config.root.dest, config.tasks.css.dest)
}

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe(gulpif(!global.production, sourcemaps.init()))
    .on('error', handleErrors)
    .pipe( postcss([
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
        require('postcss-font-magician')({
            hosted: './fonts'
        }),
        require('postcss-browser-reporter'),
        require('postcss-reporter'),
    ]))
    .pipe(gulpif(global.production, cssnano({autoprefixer: false})))
    .pipe(gulpif(!global.production, sourcemaps.write('.')))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('css', cssTask)
module.exports = cssTask
