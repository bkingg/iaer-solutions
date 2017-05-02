$(function(){
	$('.homepage__slider').slick({
		slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    infinite: false,
	    speed: 1200,
	    appendDots: $('.slider__dots'),
	    arrows: false,
	    swipe: true,
	    fade: true,
	    autoplay: true,
	    customPaging : function(slider, i) {
	        return '<div class="slider__dot"></div>';
	    }
	});

	$('#navbar ul > li:not(.active)').mouseenter(function(){ 
		var oldAttr = $(this).find('img').attr('src');
		var newAttr = oldAttr.replace('contour', 'blanc');
        $(this).find('img').attr('src', newAttr);
    });

    $('#navbar ul > li:not(.active)').mouseleave(function(){
        var oldAttr = $(this).find('img').attr('src');
		var newAttr = oldAttr.replace('blanc', 'contour');
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
	    }, 100);
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
});