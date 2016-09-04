var $ = require("jquery");

$(function() {
    $(".js-accordion").click(function(){

        $(this).toggleClass('is-active');

        $(this).next().slideToggle(300);

    });
});
