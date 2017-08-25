$(function(){

	$('body').scrollspy({ target: '.sticky, .sticky-mobile' });

	window.getUrlParameter = function(name, url){
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	window.addParam = function(url, param, value) {
		var a = document.createElement('a'), regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
		var match, str = []; a.href = url; param = encodeURIComponent(param);
		while (match = regex.exec(a.search))
			if (param != match[1]) str.push(match[1]+(match[2]?"="+match[2]:""));
		str.push(param+(value?"="+ encodeURIComponent(value):""));
		a.search = str.join("&");
		return a.href;
	}

	$(document).ready(function() {
		var openModal = getUrlParameter('open');
		setTimeout(function(){
	    	$('[data-title-modal=' + openModal + ']').click();
	    }, 1000);
	});

	$(document).ready(function() {
		var showMenu = getUrlParameter('show');
		if(showMenu){
			$('.navbar-right > li').hide();
	    	$('[data-title-menu=' + showMenu + ']').show();
			$('[data-title-menu=se-connecter]').show();
			$('a').each(function(){
				if($(this).attr('href') != ''){
					var oldUrl = $(this).attr('href');
					var newUrl = addParam(oldUrl, 'show', showMenu);
					$(this).attr('href', newUrl);
				}
			});
	    };
	});


	$('.homepage__slider').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    infinite: true,
	    speed: 1200,
	    appendDots: $('.slider__dots'),
	    arrows: false,
	    swipe: true,
	    fade: true,
	    autoplay: true,
		autoplaySpeed: 25000,
	    customPaging : function(slider, i) {
	        return '<div class="slider__dot">'+ (i + 1) +'</div>';
	    }
	});

	$('.icones-slider').each(function() {

		var $carousel = $(this);
		var $carouselWrapper = $carousel.closest('.icones-slider-wrapper');

		$carousel.on('init', function(event, slick){
			if (slick.slideCount > 3) {
				$carouselWrapper.find('.icones-slider__arrow--left').fadeIn();
				$carouselWrapper.find('.icones-slider__arrow--right').fadeIn();
			}
		}).slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			speed: 1200,
			arrows: false,
			swipe: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});

      // Slider arrows
		$(document).on('click', '.icones-slider__arrow--left', function () {
			$carousel.slick('prev');
		});

		$(document).on('click', '.icones-slider__arrow--right', function () {
			$carousel.slick('next');
		});
	});

	$('.temoignages-slider').each(function() {

		var $carousel = $(this);
		var $carouselWrapper = $carousel.closest('.temoignages-slider-wrapper');

		$carousel.on('init', function(event, slick){
			if (slick.slideCount > 3) {
				$carouselWrapper.find('.temoignages-slider__arrow--left').fadeIn();
				$carouselWrapper.find('.temoignages-slider__arrow--right').fadeIn();
			}
		}).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			infinite: true,
			speed: 1200,
			autoplaySpeed: 5000,
			arrows: false,
			swipe: true,
			autoplay: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: 'unslick'
				}
			]
		});

      // Slider arrows
		$(document).on('click', '.temoignages-slider__arrow--left', function () {
			$carousel.slick('prev');
		});

		$(document).on('click', '.temoignages-slider__arrow--right', function () {
			$carousel.slick('next');
		});
	});

	$('ul.navbar-right > li:not(.active)').mouseenter(function(){ 
		var oldAttr = $(this).find('img').attr('src');
		var newAttr = oldAttr.replace('.png', '-hover.png');
        $(this).find('img').attr('src', newAttr);
    });

    $('ul.navbar-right > li:not(.active)').mouseleave(function(){
        var oldAttr = $(this).find('img').attr('src');
		var newAttr = oldAttr.replace('-hover.png', '.png');
        $(this).find('img').attr('src', newAttr);
    });

	$(document).ready(function() {
	    $('.box, .offer').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeInDown',
	        offset: 160
	    });
	    $('.section__title').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeInDown',
	        offset: 30
	    });
	    $('.section__description').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeInDown',
	        offset: 30
	    });
	    $('.caption').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeInDown',
	        offset: 30
	    });

	    // Equalize nested adjacent rows 
			setTimeout(function(){

				if($(window).width() > 768){
					$('.row-eq-height .row-eq-height').each(function(){
						var $row = $(this);
						var maxColumnHeight = $row.find('> .col-eq-height:first').height();
						var cols = $row.find('> .col-eq-height');
						cols.each(function(){
							var height = $(this).height();
							if(height > maxColumnHeight){
								maxColumnHeight = height;
							}
						});
						cols.height(maxColumnHeight).addClass('show');
					});

					$('.row-eq-height').each(function(){
						var $row = $(this);
						var maxColumnHeight = $row.find('> .col-eq-height:first').height();
						var cols = $row.find('> .col-eq-height');
						cols.each(function(){
							var height = $(this).height();
							if(height > maxColumnHeight){
								maxColumnHeight = height;
							}
						});
						cols.height(maxColumnHeight).addClass('show');
					});
				}

				$('.row-eq-height').each(function(){
					var $row = $(this);
					var maxColumnHeight = $row.find('.slide:first').height();
					var cols = $row.find('.slide');
					cols.each(function(){
						var height = $(this).height();
						if(height > maxColumnHeight){
							maxColumnHeight = height;
						}
					});
					cols.height(maxColumnHeight).addClass('show');
				});
			}, 300);
	});

	// Open Accordion
    $(document).on('click', '.accordion__toggle', function(event) {
    	if($(this).attr('href') || $(this).attr('href') !== ''){
    		window.location.href = $(this).attr('href');
    	}
        event.preventDefault();
        var accordionName = $(this).data('accordion');
        $('.accordion[data-accordion="' + accordionName + '"]').toggleClass('accordion--open').find('.accordion__content').slideToggle();
		var icon = $(this).find('i').toggleClass('fa-plus fa-minus');
    });

    // Smooth scroll
    $(document).on('click', '.subnav ul.menu-niveau-1 > li > a', function(event) {
        if ($(this).is('[href^="#"]')) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top - 60
			}, 500);

		}
    });

	// no link
	$(document).on('click', 'a.no-link', function(event) {
        event.preventDefault();
    });

    // link tabs to their content
    $('.tabs').on('click', '.tab', function() {
        var tabNumber = $(this).data('tab');
        var $tab = $(this);
        var $tabContent = $('.tabs__content [data-tab="' + tabNumber + '"]');

        $tab.addClass('tab__active');
        $tab.siblings('.tab__active').removeClass('tab__active');

        $tabContent.addClass('tab__content--active');
        $tabContent.siblings('.tab__content--active').removeClass('tab__content--active');

        $(window).trigger('tab:change', [$(this)]);
    });

    // Open Modal with proper content
    $(document).on('click', '.offer--modal > div', function(event) {
        event.preventDefault();
        var title = $(this).find('.offer__title span').html();
        var problemes = $(this).find('.offer__problemes').html();
        var solutions = $(this).find('.offer__solutions').html();
        var cta = $(this).find('.offer__cta').html();
        var $modal = $('#problemes-solutions');
        $modal.find('.modal-title').html('').html(title);
        $modal.find('.problemes').html('').html(problemes);
        $modal.find('.solutions').html('').html(solutions);
        $modal.find('.cta').html('').html(cta);
  	});

	  // Map iframe
	  $(document).on('click', '.section.map', function(event) {
			$(this).find('iframe').css('pointer-events', 'initial');
		});

	$(document).on('click', '.icon--scroll', function(event) {
		var $section = $(this).closest('.homepage__slider-wrapper');
        var $nextSection = $section.next();

        if($nextSection.length){
            $('html, body').animate({
                scrollTop: $nextSection.offset().top
            }, 700);
		}
	});


  //   $(window).on('scroll', function() {
	 //    	var scrollTop = $(this).scrollTop();

  //       var topDistance = $('.subnav').offset().top;

  //       if ( (topDistance) < scrollTop ) {
  //           $('.subnav').addClass('fixed');
  //       }
		// });

		// // $('.subnav').first().prev().on('scroll', function() {
  // //       if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
  // //           $('.subnav').removeClass('fixed');
  // //       }
  // //   })

  // $('.navbar-toggle').click(function(){
  // 	if($(window).width() < 1200){
  // 		$('.subnav').slideToggle().removeClass('affix');
  // 	}
  // });

  $(document).on('submit', '#projet-pilote', function(){
	event.preventDefault();

	var errors = false;

	var form = this;

	$(form).find('.status__failure').slideUp();
	$(form).find('.status__success').slideUp();

	// Clear out errors
	var errField = 'input.error, select.error, textarea.error';
	var msgField = 'p.error';
	var errClass = 'error';
	$(errField, form).removeClass(errClass);

	if ( !form.nom.value ) {
		$(form.nom).addClass(errClass)
			.siblings(msgField).slideDown();
		errors = true;
	} else {
		$(this.nom).siblings(msgField).slideUp();
	}
	
	if ( /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/.test(form.email.value) == false ) {
		$(form.email).addClass(errClass).siblings(msgField).slideDown();
		errors = true;
	} else {
		$(form.email).siblings(msgField).slideUp();
	}

	if ($(form).find('input:checkbox:checked').length > 2 || !$(form).find('input:checkbox:checked').length){
		$(form).find('.error--checkbox').slideDown();
		errors = true;
	}
	else{
		$(form).find('.error--checkbox').slideUp();
	}

	if (errors) {
		return false;
	}

	$.ajax({
		url: 'https:' + '//formspree.io/' + 'pagoune' + '@' + 'iaersolutions' + '.' + 'com', 
		method: 'POST',
		data: $(form).serialize(),
		dataType: 'json',
		success: function(data){
			console.log('success', data);
			$(form).find('.status__failure').slideUp();
			$(form).find('.status__success').slideDown();
			$(form)[0].reset();
		},
		error: function(data){
			console.log('error', data);
			$(form).find('.status__failure').slideDown();
			$(form).find('.status__success').slideUp();
		}
	});
  });

  $(document).on('submit', '#offre-de-service', function(){
	event.preventDefault();

	var errors = false;

	var form = this;

	$(form).find('.status__failure').slideUp();
	$(form).find('.status__success').slideUp();

	// Clear out errors
	var errField = 'input.error, select.error, textarea.error';
	var msgField = 'p.error';
	var errClass = 'error';
	$(errField, form).removeClass(errClass);
	// $('.status__failure').slideUp();

	if ( !form.organisation.value ) {
		$(form.organisation).addClass(errClass)
			.siblings(msgField).slideDown();
		errors = true;
	} else {
		$(this.organisation).siblings(msgField).slideUp();
	}
	
	if ( /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/.test(form.email.value) == false ) {
		$(form.email).addClass(errClass).siblings(msgField).slideDown();
		errors = true;
	} else {
		$(form.email).siblings(msgField).slideUp();
	}     

	if (errors) {
		return false;
	}

	$.ajax({
		url: 'https:' + '//formspree.io/' + 'pagoune' + '@' + 'iaersolutions' + '.' + 'com', 
		method: 'POST',
		data: $(form).serialize(),
		dataType: 'json',
		success: function(data){
			console.log('success', data);
			$(form).find('.status__failure').slideUp();
			$(form).find('.status__success').slideDown();
			$(form)[0].reset();
		},
		error: function(data){
			console.log('error', data);
			$(form).find('.status__failure').slideDown();
			$(form).find('.status__success').slideUp();
		}
	});
  });

});















