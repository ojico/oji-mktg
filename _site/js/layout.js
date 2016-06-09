$(document).ready(function(){

	$('.menu__trigger').click(function(){
		var target = $(this).attr('data-target');
		$('.oj__menu').attr('data-focus',target);
	});

	$('.toggle--frontpage').click(function(){
		console.log('clicked');

		if ($('body').hasClass('visible--frontpage')){
			$(this).attr('data-icon','expand').attr('data-theme','green');
			$('.toggle--drawer').attr('data-theme','blue');
			$('body').removeClass('visible--frontpage');
			$('.header').attr('data-theme','white');
		} else {
			$(this).attr('data-icon','close').attr('data-theme','blue-invert');
			$('.toggle--drawer').attr('data-theme','blue-invert');
			$('body').addClass('visible--frontpage');
			$('.header').attr('data-theme','blue');
		}
	});

	$('.toggle--drawer').click(function(){
		console.log('clicked');
		if ($('body').hasClass('visible--drawer')){
			$(this).attr('data-icon','menu');
			$('body').removeClass('visible--drawer');
		} else {
			$(this).attr('data-icon','close');
			$('body').addClass('visible--drawer');
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