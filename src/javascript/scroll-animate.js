var $ = require("jquery");

$(function() {
    'use strict';
    $('.js-scrollAnimate').on('click', function(event) {

        var target = $(this).attr('data-scroll-to');

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $('#' + target).offset().top
            }, 1000);
        }

    });
});
