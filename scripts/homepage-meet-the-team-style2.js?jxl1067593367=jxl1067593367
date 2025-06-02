$(function () {
	/*
	var teamSwiper = new Swiper('.module-team.style2 .swiper-container', {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 32,
		mousewheel: true,
		navigation: {
			nextEl: '.module-team.style2 .slider__next',
			prevEl: '.module-team.style2 .slider__prev'
		},
		pagination: {
			el: ".module-team.style2 .swiper-pagination",
		},
		grabCursor: true,
		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			768: {
				direction: 'vertical',
			}
		}
	});	
	*/
	$('.module-team.style2 .team-wrapper').slick({
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		vertical: true,
		verticalSwiping: true,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000

	});
	var maxHeight = -1;
	$(window).on('load resize', function () {
		$('.module-team.style2 .team-wrapper .slick-slide').each(function() {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		});
		$('.module-team.style2 .team-wrapper .slick-slide').each(function() {
			if ($(this).height() < maxHeight) {
				$(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
			}
		});
	});
	

});