var $ = require("jquery");
var validator = require( 'validator' );



$('[name="example_form"]').on('submit', function (e) {
	// e.preventDefault();
	alert('submitted');
	//e.preventDefault();

	
	validator.isEmail('#email'); //=> true


});


/*function validateForm(e) {
	e.preventDefault();
	alert('submitted');
}
*/
