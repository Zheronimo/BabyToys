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
			let tabName = $(this).attr('show-tab'),
				tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
				tab = $(tabsBody).find('.' + tabName);
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$(tab).addClass('tab--active').siblings().removeClass('tab--active');
			if ($(tabsBody).find('.js-products-line-slider').length) {
				$('.js-products-line-slider').each(function () {
					$(this).slick('refresh');
				});
				$('.js-product-prev__slider').each(function () {
					$(this).slick('refresh');
				});
			}
		});
	};

	let productPrevSlider = () => {
		$('.js-product-prev__slider').each(function (idx) {
			let carouselId = "carousel" + idx;
			this.closest('.product-prev').id = carouselId;
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true,
				appendDots: '#' + carouselId + ' .product-prev__colors',
				customPaging: function(slider, i) {
					let color = $(slider.$slides[i]).data('color');
					return '<a class="product-prev__color" style="background-color: '+ color +'"></a>'
				}
			});
		});
	};

	let productLineSlider = () => {
		$('.js-products-line-slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [
		    {
		      breakpoint: 1139,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});
	};

	mainSubnavHover();
	openSearchForm();
	clearSearchForm();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
});