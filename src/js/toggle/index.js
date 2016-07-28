var $ = require("jquery");
// Selector - Event Handler
// listener - Event Listener

$('selector').on('click', function () {
    'use strict';
    $(this).parent('parent class').find("your-child-listener").toggleClass("your display block classname");
});
