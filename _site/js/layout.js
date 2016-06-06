$(document).ready(function(){

	$('.menu__trigger').click(function(){
		var target = $(this).attr('data-target');
		$('.oj__menu').attr('data-focus',target);
	});

	$('.toggle--frontpage').click(function(){
		console.log('clicked');

		if ($('body').hasClass('visible--frontpage')){
			$(this).attr('data-icon','expand');
			$('body').removeClass('visible--frontpage');
			$('.header').attr('data-theme','white');
		} else {
			$(this).attr('data-icon','close');
			$('body').addClass('visible--frontpage');
			$('.header').attr('data-theme','blue');
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