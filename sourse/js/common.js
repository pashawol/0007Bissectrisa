var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Bissectrisa_sayt_109_a.png);"></div>')
	// /добавляет подложку для pixel perfect



	// var url = document.location.href;
	// $.each($(".top-nav__nav a "), function () {

	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {

	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {

	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 

	// /закрыть/открыть мобильное меню

	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();

		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
		// конец добавил
		if (window.matchMedia("(min-width: 1200px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});
	var svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	width="19px" height="15px" viewBox="0 0 19 15" style="enable-background:new 0 0 19 15;" xml:space="preserve">'
	var icon = '<path class="st0" d="M18,6.5H3.9l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-6,6c0,0,0,0,0,0L0,7.5l0.7,0.7c0,0,0,0,0,0l6,6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L3.9,8.5H18c0.6,0,1-0.4,1-1S18.5,6.5,18,6.5z"/>';
	var icon2 = '<path class="st0" d="M1,6.5h14.1l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0,0,0,0,0,0L19,7.5l-0.7,0.7c0,0,0,0,0,0l-6,6c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l4.3-4.3H1c-0.6,0-1-0.4-1-1S0.5,6.5,1,6.5z"/>';

	var arrl2 = (' <div class="r">' + svg + icon2),
		arrr2 = (' <div class="l">' + svg + icon);
	// //  карусель
	var defaultSlide = {

		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'ondemand',
	}
	$('.header-block__slider--js').slick($.extend({
		slidesToShow: 1,
		appendArrows: '.header-block__control-wrap',
		appendDots: ".header-block__dots-wrap",
		fade: true,
		dots: true,
		slidesToScroll: 1,
	}, defaultSlide));

	$('.s-gal__slider--js').slick($.extend({
		slidesToShow: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}

		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows: true,
			}

		}]
	}, defaultSlide));

	$('.s-rews__slider--js').slick($.extend({
		slidesToShow: 1,
		arrows: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				arrows: true,
			}

		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}

		}]
	}, defaultSlide));
	$('.s-news__slider--js').slick($.extend({
		slidesToShow: 1,
		arrows: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				arrows: true,
			}

		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}

		}]
	}, defaultSlide));

	$('.s-gal-show-room__slider--js').slick($.extend({
		responsive: [{
			breakpoint: 992,
			settings: {
				centerMode: true,
			}

		},],

		slidesToShow: 1,
		arrows: true,
		dots: true,
	}, defaultSlide));

	$('.one-slider--js').slick($.extend({
		slidesToShow: 1,
		arrows: true,
		dots: true,
	}, defaultSlide));

	if ($("div").is("#map1")) {
		$.getScript('//api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
			// alert('script loaded');
			var mark = [59.993243564094826, 30.14983249999997];
			ymaps.ready(function () {
				var myMap = new ymaps.Map('map1', {
					center: mark,
					zoom: 17,
					behaviors: ['drag'],

					// controls: ["zoomControl", "fullscreenControl"]
				}, {
					searchControlProvider: 'yandex#search'
				}),


					myPlacemark = new ymaps.Placemark(mark, {
						hintContent: 'Санкт-Петербург, 	Лахтинский проспект, 83, к. 2.',
						balloonContent: 'Санкт-Петербург, 	Лахтинский проспект, 83, к. 2.'
					}, {
						// Опции.
						// Необходимо указать данный тип макета.
						iconLayout: 'default#image',
						// Своё изображение иконки метки.
						iconImageHref: $("#map1").data("img"),
						// Размеры метки.
						iconImageSize: [87, 87],
						// Смещение левого верхнего угла иконки относительно
						// её "ножки" (точки привязки).
						iconImageOffset: [-42, -95]
					})

				myMap.geoObjects
					.add(myPlacemark)



			});
		});

	}


	// $('.s-gal__slider\
	// ,.slider-for2 ')
	// 	.on('lazyLoaded', function (event, slick, image, imageSource) {
	// 		image.parent().css('background-image', 'url(' + image.attr('src') + ')');
	// 	});
	// slider
	// var swiper4 = new Swiper('.color-slider', {
	// 	// slidesPerView: 5,
	// 	slidesPerView: 'auto',
	// 	watchOverflow: true,
	// 	spaceBetween: 0,
	// 	freeMode: true,
	// 	watchOverflow: true,
	// 	slidesPerGroup: 3,

	// 	// centeredSlides: true,
	// 	loop: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// 	navigation: {
	// 		nextEl: '.swiper-button-next',
	// 		prevEl: '.swiper-button-prev',
	// 	},

	// });
	// modal window




	// или
	// $(".dropzone").dropzone({
	//  url: "/file/post",
	//  addRemoveLinks: true,
	//      acceptedFiles: 'image/*',
	//      uploadMultiple: true,
	//   });




	// $(".wow-wrap").each(function () {
	// var wowAnim = $(this).find(".s-dop__col," +
	//                 ".s-pick__col," +
	//                 ".s-condition__col");
	// wowAnim.each(function(i){

	// wowAnim.eq(i).attr("data-wow-delay", i*.1*2 + "s");

	//    var wow = new WOW({ mobile: false });
	//         wow.init();

	// });
	// });

	// form
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: 'action.php', //Change
			data: th.serialize()
		}).success(function () {
			// $.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks', // can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			})
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				ym(53383120, 'reachGoal', 'zakaz');
			}, 4000);
		});
		return false;
	});
	// /form
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction

	magnificPopupCall: function () {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			// type : 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});

	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  . 


	// /nlineSVG
	CustomInputFile: function CustomInputFile() {
		var file = $(".add-file input[type=file]");
		file.change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(".add-file__filename  ");
			name.text(filename);

		});
	},

	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/

