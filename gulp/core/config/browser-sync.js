// utils
var deepMerge = require('../utils/deepMerge');

// config
var overrides = require('../../config/browser-sync');

// project config
var project = require('../../../project.config');

/**
 * BrowserSync
 * configuration
 * object
 *
 */
module.exports = deepMerge({
    logSnippet: false,
    ghostMode: false,
    open: true,
    proxy: project.browserSyncProxy
}, overrides);
