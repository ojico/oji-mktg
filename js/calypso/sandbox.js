$(document).ready(function(){

	var target = $('.target');

	$('.list--pivot .list__item a').click(function(){
		var state = $(this).attr('data-state');
		console.log(state);
		$(this).toggleClass('active');
		$(target).attr('data-icon',state);
	});

});