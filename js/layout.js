$(document).ready(function(){

	$('.menu__trigger').click(function(){
		var target = $(this).attr('data-target');
		$('.oj__menu').attr('data-focus',target);
	});
});