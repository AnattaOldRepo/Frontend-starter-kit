var $ = require('jquery');
$(document).ready(function(){
  function setCurrency (currency) {
      if (!currency.id) { return currency.text; }
        var $currency = $('<span class="glyphicon glyphicon-' + currency.element.value + '">' + currency.text + '</span>');
        return $currency;
    };
    $(".js-select").select2({
        placeholder: "What currency do you use?", //placeholder
        templateResult: setCurrency,
        templateSelection: setCurrency
    });
})

