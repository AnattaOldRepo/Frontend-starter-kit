var $ = require("jquery");
$(function(){
	$('ul.tabs li').on('click', function(){
		console.log('clicked')
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});

