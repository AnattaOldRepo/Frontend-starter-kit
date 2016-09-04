var $ = require("jquery");

$('.js-toggle').on('click', function () {
    'use strict';
    $(this).parent().find('.js-toggleContent').slideToggle();
});
