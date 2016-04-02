$(document).ready(function(){

	$('.menu__trigger').click(function(){
		var target = $(this).attr('data-target');
		$('.oj__menu').attr('data-focus',target);
	});

	$('.toggle--feed').click(function(){
		$('body').toggleClass('visible--feed');
	});
	$('.mark').click(function(){
		$(this).toggleClass('animate');
	});
});