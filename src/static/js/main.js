$(document).ready(function() {
	svg4everybody({});

	let mainSubnavHover = () => {
		$('.main-subnav__item').hover(function() {
			let parentList = $(this).closest('.main-subnav__list');
			if ($(this).children('.main-subnav__list').length) {
				let catNavHeight = $(this).children('.main-subnav__list').outerHeight();
				if (parentList.outerHeight() < catNavHeight) {
					parentList.css('width', '720');
				}
				parentList.css('width', '720');
			}
		}, function() {
				let parentList = $(this).closest('.main-subnav__list');
				parentList.css('height', 'auto');
				parentList.css('width', 'auto');
		})
	};

	let openSearchForm = () => {
		$(document).on('click', '.search__icon', function() {
			$(this).parent().addClass('search--open');
		})
	};

	let clearSearchForm = () => {
		$(document).on('click', '.search__clear-icon', function() {
			$('.search__input').val('');
		})
	};

	let bannerSlider = () => {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".banner__navigation--prev",
			nextArrow: ".banner__navigation--next",
			dots: true,
			customPaging: function(slider, i) {
				return '<a class="banner__dot"></a>'
			},
			appendDots: ".banner__dots"
		});
	};

	let tabs = () => {
		$('.tabs-navigation__item').click(function () {
			let tabName = $(this).attr('show-tab');
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$('.tabs-body .' + tabName).addClass('tab--active').siblings().removeClass('tab--active');
		});
	};

	mainSubnavHover();
	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
});