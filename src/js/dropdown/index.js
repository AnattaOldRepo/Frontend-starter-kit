var jQuery = require("jquery");
(function($){

	$(".custom-select").each(function(){
    $(this).wrap("<span class='select-wrapper'></span>");
    $(this).after("<span class='holder'></span><input type='hidden' name='phone' value='' />");
  });
  $(".custom-select").change(function(){
    var selectedOption = $(this).find(":selected").text();
    $(this).next(".holder").text(selectedOption);
    $(this).next(".holder").next('input[type="hidden"]').val(selectedOption);
  }).trigger('change');

}(jQuery));