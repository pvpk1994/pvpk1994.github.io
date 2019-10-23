/* Scrolls.js helps me in animating this webpage to a certain extent */

/* Developed by Pavan Kumar Paluri - December 2018 */


/*
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
*/

$(document).ready(function() {
	/* Select section 2 - ABOUT ME */
	$('.js-about').waypoint(function(direction) {
		/* If we scroll down, make the sticky header appear on reaching next section */
		if (direction == "down") {
			$('nav').addClass('stick');
		} else {
			$('nav').removeClass('stick');
		}
	},
	{
		offset: '60px;'
	});
	
	
	/************* ANIMATION PART 2 *******************/
			
		/* Navigation scroll */
		// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
	
	/***************** ANIMATION PART 3 ********************/
	
	/******************* FOR DETAILS ANIMATION  ************************/
		$('.js-wp1').waypoint(function(direction) {
			$('.js-wp1').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
		
		
		/************************** For Iphone surfacing Animation *******************/
		$('.js-wp2').waypoint(function(direction) {
			$('.js-wp2').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
		
		/******************* For cities Animation *******************/
		
		$('.js-wp3').waypoint(function(direction) {
			$('.js-wp3').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
		
		/********************** FOR PRICING BOX ANIMATION **************************/
		$('.js-wp4').waypoint(function(direction) {
			$('.js-wp4').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
		/********************* PUBLICATION 1 ANIMATION **************************/
		$('.js-wp5').waypoint(function(direction) {
			$('.js-wp5').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
		/********************** PUBLICATION 2 ANIMATION **********************/
		$('.js-wp6').waypoint(function(direction) {
			$('.js-wp6').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
		/************************ PUBLICATION 3 ANIMATION *********************/
		$('.js-wp7').waypoint(function(direction) {
			$('.js-wp7').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
	/************************ PUBLICATION 4 ANIMATION *********************/
		$('.js-wp9').waypoint(function(direction) {
			$('.js-wp9').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
	
		/************************* ABOUT ME DESCRIPTION ***********************/
		$('.js-wp8').waypoint(function(direction) {
			$('.js-wp8').addClass('animated fadeInRight');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
		/*********************** HOME SCREEN NAME ***************************/
		$('.js-name').waypoint(function(direction) {
			$('.js-name').addClass('animated bounceIn');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
		
	
		/********************* PHD STUDENT HOMESCREEN *********************/
		$('.js-phd').waypoint(function(direction) {
			$('.js-phd').addClass('animated fadeInUp');
			
		},
					
		{   /* As we need to have this animation when we are 50% into the page and we should see no more delay in the animation */
			offset: '75%;'
		});
	
	/******************** RESPONSIVE ANIMATION FOR BROWSER RE_SIZING *************/
		
		$('.js-nav').click(function() {
			var nav = $('.js-main');
			var icon = $('.js-nav navigate');
			nav.slideToggle(200);
			
			if(icon.hasClass('navigate')){
				icon.addClass('icon ion-md-close');
				icon.removeClass('navigate');
			} else{
				icon.addClass('navigate');
				icon.removeClass('icon ion-md-close');
			}
		});
	
});

