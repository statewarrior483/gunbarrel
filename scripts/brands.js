$(function () {
	/*
	var myBrandWrapper = new Swiper('.brand-wrapper .swiper-container', {
		loop: true,
		speed: 500,
		autoplay: {
			delay: 3000,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		coverflowEffect: {
			rotate: 0,
			stretch: 60,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			el: '.brand-wrapper .swiper-pagination',
			clickable: true
		},

	});
	*/
	

	var myBrandWrapper = new Swiper('.brand-wrapper .swiper-container', {
		loop: true,
		speed: 500,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		preloadImages: false,
		lazy: true,
		watchSlidesProgress: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 60,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			el: '.brand-wrapper .swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: ".brand-wrapper .button-next",
			prevEl: ".brand-wrapper .button-prev",
		},

	});
	$('.module-20-v2 .ry-content .ry-slider').slick({
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		vertical: true,
		verticalSwiping: true

	});

	$('.module-32-swiper-vertical .ry-carousel-slick').slick({
		slidesToScroll: 1,
		
		arrows: false,
		dots: true,
		vertical: true,
		adaptiveHeight: false,
		verticalSwiping: true,
		autoplay: true,
        autoplaySpeed: 2000,

	});
	
	var maxHeight = -1;
	if ($(window).width() >= 992) {
		$(window).on('load resize', function () {
			$('.module-32-swiper-vertical .ry-carousel-slick .slick-slide').each(function() {
				if ($(this).height() > maxHeight) {
					maxHeight = $(this).height();
				}
			});
			$('.module-32-swiper-vertical .ry-carousel-slick .slick-slide').each(function() {
				if ($(this).height() < maxHeight) {
					$(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');

				}
			});
		});
	};
	
	/*
	$('.module-32-swiper-vertical .ry-carousel-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var dataId = $(slick.$slides[currentSlide]).data('slick-index');  


		if ($('.module-32-swiper-vertical .ry-carousel-slick .slick-slide[data-slick-index="'+dataId+'"]').hasClass('not-fill-brand')) {
			$('.module-32-swiper-vertical .ry-carousel-slick .slick-slide').css('margin', '-'+Math.ceil((maxHeight-$('.brand-group.not-fill-brand').height())/2) + 'px 0');
		} else {
			$('.module-32-swiper-vertical .ry-carousel-slick .slick-slide').css('margin', '0px 0');
		}
	});
	*/
	$('.module-32-swiper-mobile .ry-carousel-slick').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slide-arrow next-arrow"></button>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	
	//var $st = $('.pagination');
	var $slickEl = $('.module-brand .brand-carousel');

	$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		//$st.text(i + ' of ' + slick.slideCount);
	});

	$slickEl.slick({
		centerMode: true,
		centerPadding: false,
		slidesToShow: 3,
		focusOnSelect: true,
		slidesToScroll: 1,
		dots: false,
		infinite: true,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true,
		cssEase: 'linear',
		touchMove: false,
		prevArrow: $('.module-brand .button-prev'),
		nextArrow: $('.module-brand .button-next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: false,
					slidesToShow: 3
				}
			}
		]
	});
	
	/*
	
	var classes = {};
	$('[class*=each-block]').each(function() { // use *= selector, dis_ class can be used anywhere
		className = null;
		// get all classes and split to get match for dis_
		$.each($(this).attr('class').split(/\s+/), function(index, cls) {
			if (/dis_\d+/.test(cls)) {
				className = cls;
			}
		});
		// check if element having class started with dis_
		if (className) {
			if (classes.hasOwnProperty(className)) { // if classs exists then increment it by 1
				classes[className] = classes[className] + 1;
			} else {
				classes[className] = 1; // first instance
			}
		}
	});
	console.log(classes);
	*/
	
	$('.ry-services.style2 .mobile-services').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<button class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slide-arrow next-arrow"></button>',
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});

