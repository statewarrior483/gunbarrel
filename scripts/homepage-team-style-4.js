$(function () {
	var lenthOfblock = $(".module-team.style-1 .ry-flex .ry-each").length;

	$('.module-team.style-1 .ry-flex').addClass('block-count-' +lenthOfblock);
	if ( lenthOfblock >= 7 ) {
		$(window).on('load resize', function () {
			if ($(window).width() > 1080) {
				setTimeout(function () {
					$('.module-team.style-1 .ry-flex').slick({
						dots: true,
						infinite: false,
						speed: 300,
						slidesToShow: 6,
						slidesToScroll: 6,
						arrows: false,
						responsive: [
							{
								breakpoint: 1480,
								settings: {
									slidesToShow: 5,
									slidesToScroll: 5
								}
							},
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 4,
									slidesToScroll: 4
								}
							},
							{
								breakpoint: 1080,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3
								}
							},
							{
								breakpoint: 768,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							},
							{
								breakpoint: 320,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}

						]
					});
				}, 200);
			}
			else {

			}
		});
	}

	if ( lenthOfblock >= 4 ) {
		mobileOnlySliderInner(".module-team.style-1 .ry-flex", true, false, 1199);

		function mobileOnlySliderInner($slidernameInner, $dotsInner, $arrowsInner, $breakpointInner) {
			var sliderInner = $($slidernameInner);
			var settingsInner = {
				mobileFirst: true,
				dots: $dotsInner,
				arrows: $arrowsInner,
				autoplay: true,
				autoplaySpeed: 2000,
				slidesToShow: 4,
				slidesToScroll: 4,
				responsive: [
					{
						breakpoint: $breakpointInner,
						settings: "unslick",
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 620,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 320,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}

				]
			};

			sliderInner.slick(settingsInner);

			$(window).on("resize", function () {
				if ($(window).width() > $breakpointInner) {
					return;
				}
				if (!sliderInner.hasClass("slick-initialized")) {
					return sliderInner.slick(settingsInner);
				}
			});
		}
	}
});