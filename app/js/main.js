$(function () {

	$(".header__list-link, .header__link, .header__link-bottom").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});

	$('.menu-toggle').on('click', function () {
		$('.menu-toggle').toggleClass('menu-toggle--active');
		$('.header__list-link').toggleClass('header__list-link--active');
	});

	$('.specialties__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000
	})

	var mixer = mixitup('.menu__items');

});




