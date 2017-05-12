$(function(){
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

	$('#navbar ul > li:not(.active)').mouseenter(function(){ 
		var oldAttr = $(this).find('img').attr('src');
		var newAttr = oldAttr.replace('.png', '-hover.png');
        $(this).find('img').attr('src', newAttr);
    });

    $('#navbar ul > li:not(.active)').mouseleave(function(){
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
	        classToAdd: 'visible animated fadeIn',
	        offset: 30
	    });
	    $('.section__description').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeIn',
	        offset: 30
	    });
	    $('.caption').addClass('hide_me').viewportChecker({
	        classToAdd: 'visible animated fadeIn',
	        offset: 30
	    });

	    // Equalize adjacent rows
	    setTimeout(function(){
	    	$('.row-eq-height').each(function(){
					var $row = $(this);
					var maxColumnHeight = $row.find('.col-eq-height:first').height();
				  var cols = $row.find('.col-eq-height');
				  cols.each(function(){
				    var height = $(this).height();
				    if(height > maxColumnHeight){
				      maxColumnHeight = height;
				    }
				  });
				  cols.height(maxColumnHeight);
				});
	    }, 4000);
	});

	// Open Accordion
    $(document).on('click', '.accordion__toggle', function(event) {
    	if($(this).attr('href') !== ''){
    		window.location.href = $(this).attr('href');
    	}
        event.preventDefault();
        var accordionName = $(this).data('accordion');
        $('.accordion[data-accordion="' + accordionName + '"]').toggleClass('accordion--open');
		var icon = $(this).find('i').toggleClass('fa-plus fa-minus');
		console.log('yo');
    });

    // Smooth scroll
    $(document).on('click', '.subnav ul.menu-niveau-1 > li > a', function(event) {
        if ($(this).is('[href^="#"]')) {
        	event.preventDefault();
		      $('html, body').animate({
			        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
			    }, 500);

		    }
		    console.log('yo test');
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
    $(document).on('click', '.offer--modal a', function(event) {
        event.preventDefault();
        var title = $(this).find('.offer__title span').html();
        var problemes = $(this).find('.offer__problemes').html();
        var solutions = $(this).find('.offer__solutions').html();
        var $modal = $('#problemes-solutions');
        $modal.find('.modal-title').html(title);
        $modal.find('.problemes').html(problemes);
        $modal.find('.solutions').html(solutions);
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

  $('.navbar-toggle').click(function(){
  	if($(window).width() < 768){
  		$('.subnav').slideToggle().removeClass('affix');
  	}
  });

});















