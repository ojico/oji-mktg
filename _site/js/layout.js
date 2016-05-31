$(document).ready(function(){

	$('.menu__trigger').click(function(){
		var target = $(this).attr('data-target');
		$('.oj__menu').attr('data-focus',target);
	});

	$('.toggle--feed').click(function(){
		console.log('clicked');

		if ($('body').hasClass('visible--feed')){
			$(this).attr('data-icon','expand');
			$('body').removeClass('visible--feed');
			$('.feed').attr('data-theme','grey');
		} else {
			$(this).attr('data-icon','close');
			$('body').addClass('visible--feed');
			$('.feed').attr('data-theme','aqua');
		}
	});

	$('.toggle--hero').click(function(){
		console.log('clicked');


		if ($('body').hasClass('visible--hero')){
			$(this).attr('data-icon','add');
			$('body').removeClass('visible--hero');
		} else {
			$(this).attr('data-icon','close');
			$('body').addClass('visible--hero');
		}
	});
});