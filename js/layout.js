$(document).ready(function(){

	$('.toggle--frontpage').click(function(){

		if ($('body').hasClass('visible--frontpage')){
			$('body').removeClass('visible--frontpage');

			$('.container--channels').toggleClass('state--hidden state--visible');
			$('.container--left').toggleClass('state--hidden, state--visible');
			$('.header').toggleClass('state--hidden, state--visible');
			$('.social').toggleClass('state--middle, state--bottom').attr({
				'data-theme':'white'
			});

			$('.toggle--drawer').attr({
				'data-theme':'blue'
			});
			$(this).attr({
				'data-icon':'north',
				'data-theme':'green'
			});

		} else {
			$('body').addClass('visible--frontpage');

			$('.container--channels').toggleClass('state--hidden state--visible');
			$('.container--left').toggleClass('state--hidden, state--visible');
			$('.header').toggleClass('state--hidden, state--visible');
			$('.social').toggleClass('state--middle, state--bottom').attr({
				'data-theme':'blue'
			});
			$('.toggle--drawer').attr({
				'data-theme':'blue-invert'
			});
			$(this).attr({
				'data-icon':'south',
				'data-theme':'blue-invert'
			});
		}

	});

	$('.toggle--drawer').click(function(){
		if ($('body').hasClass('visible--drawer')){
			$('.wrapper').attr({
				'data-state':''
			});
			$('.drawer').attr({
				'data-state':'hidden'
			});
			$('.header').attr({
				'data-state':'visible'
			});
			$('body').removeClass('visible--drawer');
			$(this).attr({
				'data-icon':'menu'
			});
		} else {
			$('.wrapper').attr({
				'data-state':'shift--right'
			});
			$('.drawer').attr({
				'data-state':'visible'
			});
			$('.header').attr({
				'data-state':'shift--right'
			});
			$('body').addClass('visible--drawer');
			$(this).attr({
				'data-icon':'west'
			});
		}
	});
});