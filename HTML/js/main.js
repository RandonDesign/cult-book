/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/*--------------------------------------
			MOBILE MENU						
	--------------------------------------*/
	function collapseMenu(){
		jQuery('.tg-navigation ul li.menu-item-has-children, .tg-navigation ul li.menu-item-has-mega-menu').prepend('<span class="tg-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.tg-navigation ul li.menu-item-has-children span, .tg-navigation ul li.menu-item-has-mega-menu span').on('click', function() {
			jQuery(this).parent('li').toggleClass('tg-open');
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/*--------------------------------------
			FIXED HEADER					
	--------------------------------------*/
	if(jQuery('.tg-fixedheader').length > 0){
		jQuery(window).on('scroll', function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 50) {
				jQuery('.tg-fixedheader').addClass('tg-darkheader');
			}else{
				jQuery('.tg-fixedheader').removeClass('tg-darkheader');
			}
		});
	}
	/* -------------------------------------
			SCROLL NAV
	-------------------------------------- */
	var body = jQuery('body');
	if(body.hasClass('tg-home')){
		body.addClass("home");
		jQuery(window).on('scroll', function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 10) {
				jQuery("#tg-header").addClass("single-page-nav");
			}else {
				jQuery("#tg-header").removeClass("single-page-nav");
			}
		});
	}
	var _tg_navigation = jQuery('.tg-navigation');
	_tg_navigation.singlePageNav({
		updateHash: false,
		offset: 70,
		filter: ':not(.external)',
	});
	/*------------------------------------------
			SIDE NAVIGATION
	------------------------------------------*/
	var _tg_btnopenclose = jQuery('.navbar-toggle');
	_tg_btnopenclose.on('click', function () {
		jQuery('#tg-wrapper').toggleClass('tg-sidenavshow');
		if( jQuery('#tg-wrapper').hasClass('tg-sidenavshow') ){
			jQuery('body').addClass('spread-overlay');
			return true;
		}
		jQuery('body').removeClass('spread-overlay');
	});
	var _tg_close = jQuery('.tg-close');
	_tg_close.on('click', function () {
		jQuery('#tg-wrapper').toggleClass('tg-sidenavshow');
		if( jQuery('#tg-wrapper').hasClass('tg-sidenavshow') ){
			jQuery('body').addClass('spread-overlay');
			return true;
		}
		jQuery('body').removeClass('spread-overlay');
	});
	/*--------------------------------------
			COUNTER							
	--------------------------------------*/
	if(jQuery('#tg-counters').length > 0){
		var _tg_counters = jQuery('#tg-counters');
		_tg_counters.appear(function () {
			jQuery('.tg-timer').countTo()
		});
	}
	/* --------------------------------------
			THEME SCROLLBAR
	-------------------------------------- */
	jQuery('.tg-navscrollbar').mCustomScrollbar({
		axis:"y",
	});
	/*--------------------------------------
			THEME ACCORDION 				
	--------------------------------------*/
	if(jQuery('.tg-panelheading').length > 0){
		var _tg_panelheading = jQuery('.tg-panelheading');
		_tg_panelheading.on('click',function () {
			jQuery('.panel-heading').removeClass('active');
			jQuery(this).parents('.panel-heading').addClass('active');
			jQuery('.panel').removeClass('active');
			jQuery(this).parent().addClass('active');
		});
	}
	/*--------------------------------------
			Google Map
	--------------------------------------*/
	if(jQuery('#tg-locationmap').length > 0){
		var _tg_locationmap = jQuery('#tg-locationmap');
		_tg_locationmap.gmap3({
			marker: {
				address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
				options: {
					title: 'Robert Frost Elementary School'
				}
			},
			map: {
				options: {
					zoom: 16,
					scrollwheel: false,
					disableDoubleClickZoom: true,
				}
			}
		});
	}
	/* -------------------------------------
			COLLECTION COUNTER
	-------------------------------------- */
	try {
		var _tg_collectioncounters = jQuery('#tg-collectioncounters');
		_tg_collectioncounters.appear(function () {
			
			var _tg_collectioncounter = jQuery('.tg-collectioncounter h3');
			_tg_collectioncounter.countTo({
				formatter: function (value, options) {
					return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
				}
			});
		});
	} catch (err) {}
	/* -------------------------------------
			THEME ACCORDION
	-------------------------------------- */
	function themeAccrodian() {
		jQuery('.tg-panelcontent').hide();
		jQuery('.tg-accordion h4:first').addClass('active').next().slideDown('slow');
		jQuery('.tg-accordion h4').on('click',function() {
			if(jQuery(this).next().is(':hidden')) {
				jQuery('.tg-accordion h4').removeClass('active').next().slideUp('slow');
				jQuery(this).toggleClass('active').next().slideDown('slow');
			}
		});
	}
	themeAccrodian();
	/* -------------------------------------
			PAGES FROM BOOKS
	-------------------------------------- */
	var _tg_pagesfrombookslider = jQuery('#tg-pagesfrombookslider');
	if(_tg_pagesfrombookslider.hasClass('tg-pages')){
		_tg_pagesfrombookslider.owlCarousel({
			items: 4,
			nav:true,
			loop:true,
			margin:30,
			dots: true,
			autoplay: true,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{ items:1, },
				568:{ items:2, },
				768:{ items:3, },
				992:{ items:4, },
			},
		});
	}
	/* -------------------------------------
			OTHER BOOK SLIDER
	-------------------------------------- */
	var _tg_otherbookslider = jQuery('#tg-otherbookslider');
	if(_tg_otherbookslider.hasClass('tg-otherbooks')){
		_tg_otherbookslider.owlCarousel({
			items: 4,
			nav:true,
			loop:true,
			margin:30,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
			navClass: ['tg-prev', 'tg-next'],
			navContainerClass: 'tg-slidernav',
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive:{
				0:{ items:1, },
				568:{ items:2, },
				768:{ items:3, },
				992:{ items:4, },
			},
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	function testimonialsSlider(){
		var sync1 = jQuery("#tg-testimonialslider");
		var sync2 = jQuery("#tg-testimonialsthumbslider");
		var slidesPerPage = 5;
		var syncedSecondary = true;
		sync1.owlCarousel({
		items : 1,
		slideSpeed : 2000,
		autoplay: false,
		loop: true,
		dots: false,
		responsiveRefreshRate : 200,
	}).on('changed.owl.carousel', syncPosition);
	sync2
		.on('initialized.owl.carousel', function () {
		sync2.find(".owl-item").eq(0).addClass("current");
	})
	.owlCarousel({
		items : slidesPerPage,
		dots: false,
		nav: false,
		margin:20,
		smartSpeed: 200,
		slideSpeed : 500,
		slideBy: slidesPerPage,
		responsiveRefreshRate : 100,
		responsive:{
			0:{ items:2, },
			568:{ items:2, },
			768:{ items:3, },
			992:{ items:5, },
		},
	}).on('changed.owl.carousel', syncPosition2);
	function syncPosition(el) {
		var count = el.item.count-1;
		var current = Math.round(el.item.index - (el.item.count/2) - .5);
			if(current < 0) {
				current = count;
			}
	if(current > count) {
			current = 0;
		}
	sync2
		.find(".owl-item")
		.removeClass("current")
		.eq(current)
		.addClass("current");
	var onscreen = sync2.find('.owl-item.active').length - 1;
	var start = sync2.find('.owl-item.active').first().index();
	var end = sync2.find('.owl-item.active').last().index();
		if (current > end) {
			sync2.data('owl.carousel').to(current, 100, true);
		}
		if (current < start) {
		sync2.data('owl.carousel').to(current - onscreen, 100, true);
		}
	}
	function syncPosition2(el) {
	if(syncedSecondary) {
		var number = el.item.index;
		sync1.data('owl.carousel').to(number, 100, true);
		}
	}
	sync2.on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = jQuery(this).index();
		sync1.data('owl.carousel').to(number, 300, true);
	});
	}
	testimonialsSlider();
	/* -------------------------------------
			STICKY DIV IN PARENT
	-------------------------------------- */
	jQuery(window).on('scroll', function(){
		if (jQuery(this).scrollTop() > 500) {
			jQuery('#tg-buynow').addClass('tg-show');
		} else {
			jQuery('#tg-buynow').removeClass('tg-show');
		}
	});
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
});