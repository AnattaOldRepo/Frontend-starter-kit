var jQuery = require("jquery");

(function($){
    $("#loginbtn").on("click", function(){
        
        var that, label;
        that =  $(this);
        label = $(this).text();

        $(this).html("Logging in...").prop('disabled',true);

        setTimeout(function(){
            that.html(label).prop('disabled',true);            
        }, 3000);
        
    });
}(jQuery));