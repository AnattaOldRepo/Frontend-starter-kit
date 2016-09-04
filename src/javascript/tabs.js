var $ = require("jquery");

$(function(){
    $('.js-tabs').on('click', function(){

        var tab_id = $(this).attr('data-tab-id');

        $('.js-tabs').removeClass('is-active');

        $('.js-tabsContent').removeClass('is-active');

        $(this).addClass('is-active');

        $("#" + tab_id).addClass('is-active');

    });
});
