var $ = require("jquery");

$(function() {
    'use strict';
    var appendthis = ("<div class='c-overlay js-modalOverlay js-modalClose'></div>");

    $('a[data-modal-id]').click(function(e) {
        e.preventDefault();
        $("body").append(appendthis);
        $(".js-modal").fadeTo(500, 0.7);
        var modalBox = $(this).attr('data-modal-id');
        $('#' + modalBox).fadeIn($(this).data());
    });

    $(".js-modalClose, .js-modalOverlay").click(function() {
        $(".js-modal, .js-modalOverlay").fadeOut(500, function() {
            $(".js-modalOverlay").remove();
        });
    });
});
