var gutil = require('gulp-util');
var path  = require('path');
var fs = require('fs');

/**
 * Validate the options passed
 * into the project's package.json
 *
 * @param project
 */
module.exports = function (project) {
	var validationFailed = false;

	/**
	 * Safely handle missing
	 * project name or
	 * project prettyName
	 */
	if (!project.buildDirName) {
		validationFailed = true;

		gutil.log('Project Config Error:', gutil.colors.red('The \"buildDirName\" option in your project.config.js configuration cannot be empty'));
	}

    if (!project.browserSyncProxy) {
        validationFailed = true;

        gutil.log('Project Config Error:', gutil.colors.red('The \"browserSyncProxy\" option in your project.config.js configuration cannot be empty'));
    }

    if (!project.buildDirPath) {
        validationFailed = true;

        gutil.log('Project Config Error:', gutil.colors.red('The \"buildDirPath\" option in your project.config.js configuration cannot be empty'));
    }

    if (!project.srcDirPath) {
        validationFailed = true;

        gutil.log('Project Config Error:', gutil.colors.red('The \"assetsDirPath\" option in your project.config.js configuration cannot be empty'));
    }

    /**
     * Src Directory check
     */
    if (!fs.existsSync(path.resolve(project.srcDirPath))) {
        gutil.log('Project Config Error:', gutil.colors.red('Could not find:' + project.srcDirPath + ' make sure it exits in the root directory' ));
        validationFailed = true;
    }

	/**
	 * Safely handle misconfigured
	 * project name
	 */
	var devThemeRoot = path.basename(path.resolve('./'));
	if (project.buildDirName === devThemeRoot) {
		validationFailed = true;

		gutil.log('Project Config Error:', gutil.colors.red(
			'The \"buildDirName\" value in your project.config.js configuration \'' + project.buildDirName + '\' ' +
			'cannot be the same as the directory name of the development theme \'' + devThemeRoot + '\'.'
		));

		gutil.log(
			'Please either rename the development theme directory (to \'' + project.buildDirName + '_dev\' for example) ' +
			'or change the buildDirName value in your project.config.js to something else.'
		);
	}

	/**
	 * Exit the gulp process
	 * if validation failed
	 */
	if (validationFailed) {
		// if validation has failed
		// do not continue further
		process.exit(1);
	}
};
