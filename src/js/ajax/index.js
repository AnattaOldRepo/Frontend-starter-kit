var jQuery  = require("jquery");
(function($){

    $("button").click(function(){
        $.ajax({
            url: "demo_test.txt", 
            success: function(result) {
                $("#div1").html(result);
            },
            error: function() {
                $('#error-div').html('<p>An error has occurred</p>');
            }
        });
    });

}(jQuery));