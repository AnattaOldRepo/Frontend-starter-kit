var jQuery = require("jquery");
(function ($) {
    size_li = $("#myList li").length;
    x = 3;
    $('#myList li:lt('+ x +')').show();
    $('#loadMore').click(function () {
        x= (x + 5 <= size_li) ? x + 5 : size_li;
        $('#myList li:lt('+ x +')').show();
    });
    $('#showLess').click(function () {
        x=(x - 5 < 0) ? 3 : x - 5;
        $('#myList li').not(':lt('+ x +')').hide();
    });
}(jQuery));