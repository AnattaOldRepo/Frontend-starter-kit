var $ = require("jquery");

$(function() {
    'use strict';
    var appendthis = ("<div class='o-overlay js-modalOverlay js-modalClose'></div>");

    $('a[data-modal-id]').click(function(e) {
        e.preventDefault();
        $("body").append(appendthis);
        $(".js-modalOverlay").fadeTo(500, 0.7);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());
    });

    $(".js-modalClose, .js-modalOverlay").click(function() {
        $(".js-modal, .js-modalOverlay").fadeOut(500, function() {
            $(".js-modalOverlay").remove();
        });
    });

    $(window).resize(function() {
        $(".js-modal").css({
            top: ($(window).height() - $(".js-modal").outerHeight()) / 2,
            left: ($(window).width() - $(".js-modal").outerWidth()) / 2
        });
    });

    $(window).resize();

});
