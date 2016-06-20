$(document).ready(function(){

	$('.toggle--frontpage').click(function(){
		console.log('clicked');

		if ($('body').hasClass('visible--frontpage')){
			$(this).attr({
				'data-icon':'north',
				'data-theme':'green'
			});
			$('.toggle--drawer').attr('data-theme','blue');
			$('.social').attr('data-theme','white');
			$('body').removeClass('visible--frontpage');
			$('.header').attr('data-theme','white');
		} else {
			$(this).attr({
				'data-icon':'south',
				'data-theme':'blue-invert'
			});
			$('.toggle--drawer').attr('data-theme','blue-invert');
			$('.social').attr('data-theme','blue');
			$('body').addClass('visible--frontpage');
			$('.header').attr('data-theme','blue');
		}
	});

	$('.toggle--drawer').click(function(){
		if ($('body').hasClass('visible--drawer')){
			$(this).attr({
				'data-icon':'menu'
			});
			$('body').removeClass('visible--drawer');

		} else {
			$(this).attr({
				'data-icon':'west'
			});
			$('body').addClass('visible--drawer');
		}
	});
});