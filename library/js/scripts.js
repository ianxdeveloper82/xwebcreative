



/*
 * Bones Scripts File
 * Author: Eddie Machado
 *
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
 *
 * There are a lot of example functions and tools in here. If you don't
 * need any of it, just remove it. They are meant to be helpers and are
 * not required. It's your world baby, you can do whatever you want.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *	// update the viewport, in case the window size has changed
 *	viewport = updateViewportDimensions();
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/

/*
 * We're going to swap out the gravatars.
 * In the functions.php file, you can see we're not loading the gravatar
 * images on mobile to save bandwidth. Once we hit an acceptable viewport
 * then we can swap out those images since they are located in a data attribute.
*/
function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


/*
 * Put all your regular jQuery in here.
*/
//jQuery(document).ready(function($) {

/*
* Let's fire off the gravatar function
* You can remove this if you don't need it
*/
loadGravatars();

	//This is an IE fix because pointer-events does not work in IE ver<11

	$("#homedesign").click(function(e) {
		$(this).hide();
		var BottomElement = document.elementFromPoint(e.clientX, e.clientY);
		$(this).show();
		$(BottomElement).click(); //Manually fire the event for desired underlying element

		return false;
	}); 
	 
	
	
	//if(!Modernizr.csstransitions) { }

/*
 * Initiailize particle animation on home page ***
*/		
function init_particles() {

	var particles = {
		dotColor: '#f9f9f9',
		lineColor: '#f9f9f9',
		density: 7500,
		parallax: true,
		parallaxMultiplier: 3,//5 The lower the number, the more extreme the parallax effect wil be.
		particleRadius: 5,
		lineWidth: 1,
		proximity: 75, // 100
		directionY: 'center',
		directionX: 'center',
		minSpeedY: 0.5,
		//maxSpeedY: 0.7,
		minSpeedX: 0.5,
		//maxSpeedX: 0.7,		
		curvedLines: true
	};
	var particleDensity;
	var options = {
			effectWeight: 0.5,
			outerBuffer: 1.05,
			elementDepth: 200,
			perspectiveMulti: 1.5,
			enableSmoothing: true,
			onInit: function() {
			  $('#particle-target').particleground(particles);
			}
			
		};

	  $('#particles').particleground({
		dotColor: '#f9f9f9',
		lineColor: '#f9f9f9'
	  });
	//$('#demo1').logosDistort(options);
}

/*
 * GOOGLE MAPS *****************************************
*/
function getMap($winW) {
	
	if( $winW > 1030 ) { 

//google.maps.event.addDomListener( window, 'load', gmaps_results_initialize );
	
	function gmaps_results_initialize() {

		if ( null === document.getElementById( 'map-canvas' ) ) {
			return;
		}

		var map, marker, infowindow;
		
		var map = new google.maps.Map( document.getElementById( 'map-canvas' ), {
			zoom:           12,
			center:         new google.maps.LatLng( 52.625786, -1.154658 ),
		    mapTypeId:google.maps.MapTypeId.ROADMAP, // TERRAIN, ROADMAP, SATELLITE, HYBRID (photographic map + roads and city names)
			disableDefaultUI: true
		});
		
		
		// Place a marker @ my place in Bournemouth
		marker = new google.maps.Marker({
	
			position: new google.maps.LatLng( 52.625786, -1.154658 ),
			map:      map,
			icon: {
				url: "http://iancross.net/images/map-marker.svg",
				scaledSize: new google.maps.Size(48, 64)
			}
			/*
			infoWindow: {
			  content: 'Hello!   '
			}
			*/
	
		});

		// Add an InfoWindow for My place
		infowindow = new google.maps.InfoWindow({
		  content:"Hello! Ian Cross HQ. "
		});
		
		google.maps.event.addListener( marker, 'click', ( function( marker ) {
	
			return function() {
				infowindow.open( map, marker );
			}
	
		})( marker ));	
	
	
		// Zoom to 9 when clicking on marker
		google.maps.event.addListener(marker,'click',function() {
			  map.setZoom(20);
			  map.setCenter(marker.getPosition());
		 });
		  

		zoomInButton = $("#map-nav .in a");
		zoomOutButton = $("#map-nav .out a");
		zoomInButton.click(function(e) {
		//$(document).on("click", zoomInButton, function (e) {
			 e.preventDefault();
			 map.setZoom(map.getZoom() + 1);
		});
		zoomOutButton.click(function(e) {
			 e.preventDefault();
			 map.setZoom(map.getZoom() - 1);
		});

		roadmapButton = $("#map-nav .map a");
		satButton = $("#map-nav .sat a");
		roadmapButton.click(function(e) {
		
			 e.preventDefault();
			 map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			 $(this).parent().css({ "background-color": "#7e7c78", "color": "white" });
			 $(this).parent().siblings(".sat").css({ "background-color": "white", "color": "black" });

		});
		satButton.click(function(e) {		
			 e.preventDefault();
			 map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			 $(this).parent().css({ "background-color": "#7e7c78", "color": "white" });
			 $(this).parent().siblings(".map").css({ "background-color": "white", "color": "black" });
		});
		
				
		var coords = [0,0];
		var box_area = {x1:0, y1:0, x2:0, y2:0};
		var box = $('#map-nav');

		function is_mouse_in_area() {
			var C = coords, B = box_area;
			if (C[0] >= B.x1 && C[0] <= B.x2) {
				if (C[1] >= B.y1 && C[1] <= B.y2) {
					return true;
				}
			}
			return false;
		};
				
		var offset = $("#location").offset();
		$("#location").bind('mousemove', function(e){
				
				var C = coords; // one global lookup
				C[0] = e.pageX; 
				C[1] = e.pageY; 

				var B = box, O = B.offset();
				box_area = { 
					x1: O.left - 20, 
					y1: O.top - 20,
					x2: O.left + B.width() + 20,
					y2: O.top + B.height() + 20
				};
				
				//console.log( box_area );
				//console.log( coords );
				//console.log( is_mouse_in_area() );
				
				if( !is_mouse_in_area() ) {
					$('#map-nav').css({
					   left:  e.pageX - offset.left + 5,
					   top:   e.pageY - offset.top
					});	
				}
	
			});
		} // end init
		gmaps_results_initialize();
	
	} // if
} // getMap()
	 
    /*******************************************************************************************
     *************************************** CONTENT *******************************************
     *******************************************************************************************/	 
	 
	 
function initSite() {
	

/*******************************************************************************************
 *********************************** ELEMENT SIZE INIT *************************************
 *******************************************************************************************/
	var $window = $(window);
	var $body = $('body');
	var $container = $('#container');	
	var $desktopHeader = $('header');	
	var $mobileHeader = $('#mobile-header');	
	var $nav = $('header .nav');
	var $content = $('#content');
	var $subNavWork = $('#subnav-work');
	var $subNavWorkItem = $('#subnav-work .menu-item');		
	var $winH = $window.height();
	var $winW = $window.width(); 
	var $contH = $container.height();
	var $contW = $container.width(); 
	var $homeDiagonal = $contW * 2;
	var $homeSide = $homeDiagonal / Math.sqrt(2);
	var $homeTopOffset = $homeSide / 5;

	var $halfW = $contW / 2;
	var $halfH = $contH / 2;
	var $5percentW = $contW / 20;
	var $25percentW = $contW / 4;
	
	if ( $winW > 1300 ) {
		$menuPos = ( ( $winW - $container.width() ) / 2 ) - 50;
		$desktopHeader.css( { "right": $menuPos });
		//console.log("winw "+$winW+" contW: "+$container.width());
	}
	$('#homedesign').css({ "width": $homeSide, "height": $homeSide });	

	// ABOUT TRIANGLES	
	$('#contact .bt').css({ "border-width": "100px "+$halfW+"px 0px "+$halfW+"px" });			
	$('#about .ttl').css({ "border-width": "100px 0px 0px "+$halfW+"px" });
	$('#about .ttr').css({ "border-width": "0px 0px 100px "+$halfW+"px" });	
	$('#services .tt').css({ "border-width": "0px "+$halfW+"px 100px "+$halfW+"px" });	
	$('#services .bt').css({ "border-width": "100px "+$halfW+"px 0px "+$halfW+"px" });
	$('#tools .ttl').css({ "border-width": "100px 0px 0px "+$halfW+"px" });
	$('#tools .ttr').css({ "border-width": "0px 0px 100px "+$halfW+"px" });		
	// SET HEIGHT EQUAL TO WIDTH ADJUSTING (+10) OFFSET BORDER WIDTH, FOR SHAPE ALIGNMENT
	$('#tools .border').css({ "height": $('#tools .border').width()+10});	
	$('#server-side-skills .tt1').css({ "border-width": "100px "+$halfW+"px 0px "+$halfW+"px" });	
	$('#server-side-skills .bt1').css({ "border-width": "0px "+$halfW+"px 100px "+$halfW+"px" });
	$('#server-side-skills .tt2').css({ "border-width": "200px "+$5percentW+"px 0px "+$5percentW+"px" }); 
	$('#server-side-skills .bt2').css({ "border-width": "0px "+$5percentW+"px 200px "+$5percentW+"px" });
	$('#work .tt').css({ "border-width": "0px "+$halfW+"px 100px "+$halfW+"px" });	

	//remove loading page
	$body.imagesLoaded().done( function( instance ) {
		//google.maps.event.addListenerOnce(map, 'tilesloaded', function() {});
		$body.addClass("loaded");
		setTimeout(function() { 
		
			$body.addClass("ready");	
			init_particles();

			}, 1000);
	 });							
	
			

/*******************************************************************************************
 ************************************* ABOUT SCROLL SLIDE EFFECTS **************************
 *******************************************************************************************/
 
	var $animation_elements = $('.animation-element');
	
	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	
	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
	
		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position <= window_bottom_position)) {
		  $element.addClass('in-view');			  
		} else {
		  $element.removeClass('in-view');
		}
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');			

				

	

/*******************************************************************************************
 *************************************** DEVICE CHECK **************************************
 *******************************************************************************************/
		
if (Modernizr.touch) { 	


		/*******************************************************************************************
		 *********************************** TOUCH DEVICE EFFECTS **********************************
		 *******************************************************************************************/
		 
		$container.addClass('mobileScroll');
		$container.on('scroll resize', check_if_in_view);			 	
		$desktopHeader.css({ "display": "none" });
		var $location = $('#location');	
		$location.css({ "display": "none" });
		
		//if ($winW < 768 ) {
			var $menuTab = $('#menu-tab');					
			var $menuTabH = $winH / 5;
			$menuTabPos = $menuTabH * 2;
			var $mobileHeader = $('#mobile-header');
			var $menuIcon = $('#mobile-header .icon-menu');
			var $closeIcon = $('#mobile-header .nav ul li');
			$menuTab.css({ "border-width": $menuTabH+"px "+$halfW+"px 0px "+$halfW+"px ", "bottom": "-"+$menuTabPos+"px " });
			
			/* DISPlAY MOBILE NAV TAB */			
			var senseSpeed = 5;
			var previousScroll = 0;
			$container.scroll(function(event){
			   var scroller = $(this).scrollTop();
			   if (scroller-senseSpeed > previousScroll){
				  $mobileHeader.removeClass("show");
			   } else if (scroller+senseSpeed < previousScroll) {
				  $mobileHeader.addClass("show");
			   }
			   previousScroll = scroller;
			});	
			
			/* DISPlAY MOBILE NAV*/	
			$menuIcon.click(function () { $mobileHeader.addClass("open"); });
			$closeIcon.click(function () { 
					$mobileHeader.addClass("close-fade-menu");
					setTimeout(function() { 
						$mobileHeader.removeClass("open").removeClass("close-fade-menu").removeClass("show");  
						}, 1500);
					});	
		
	
} else {
	
/*******************************************************************************************
 ************************************ DESK TOP EFFECTS *************************************
 *******************************************************************************************/

		$container.removeClass("mobileScroll"); 
		$window.on('scroll resize', check_if_in_view);	// scroll effects
		$mobileHeader.css({ "display": "none" });
		
		var $home = $('#home');	
		$home.addClass('homeDesktop');			
		var $contact = $('#contact');	
		$contact.css({"z-index": "1"});
				
/*******************************************************************************************
 *************************************** SCROLL NAV EFFECTS ********************************
 *******************************************************************************************/			
		
		//SET NAV DIMENSIONS
		var $iconHolder = $("header .nav .menu-holder .list .menu-item .icon-holder");
		$iconHolder.width($iconHolder.height()); 
		var $menuItem = $("header .nav .menu-holder .list .menu-item");	
		$menuItem.width($iconHolder.height()); 	
		var $space = $("header .nav .menu-holder .list .space");	
		$space.width($iconHolder.height()); 		
		
		var $nav = $("header .nav");
		$nav.width($iconHolder.height()); 	
		var $menuItemP = $(".menu-item p");
		$menuItemP.css({ "line-height": $iconHolder.height()+"px" }); 
		var $in = $("header .nav .menu-holder .list .menu-item .icon-holder .in");
		var $ball = $("#ball");
		$ball.width($in.width()); 
		$ball.height($in.height());
		//$ball.css({ "top": "-"+ $ball.height() / 2 +"px" });
		
		var $navHome = $("#nav-home");
		var $navContact = $("#nav-contact");
		var $navAbout = $("#nav-about");
		var $navServices = $("#nav-services");
		var $navTools = $("#nav-tools");
		var $navClientSideSkills = $("#nav-client-side-skills");
		var $navServerSideSkills = $("#nav-server-side-skills");		    
		var $navWork = $("#nav-work");
	
		var $home = $("#home").position().top;
		var $contact = $("#contact").position().top;
		var $about = $("#about").position().top;
		var $services = $("#services").position().top;
		var $tools = $("#tools").position().top;
		var $ClientSideSkills = $("#client-side-skills").position().top;
		var $ServerSideSkills = $("#server-side-skills").position().top;			
		var $work = $("#work").position().top;
		var $footer = $('#container .footer').position().top;

		var $bgaTop = $("#bg-frame .bg-animation .top-triangle");
		var $bgaBottom = $("#bg-frame .bg-animation .bottom-triangle");
		
		var $scrollOffset = 5;
			
		$(document).scroll(function(){
				//console.log(detectDirection());
				//console.log('scroll');
				// BACKGROUND ANIMATIONS
				/*
				var dir = detectDirection();
				if( dir == "down" ) {
					$bgaTop.removeClass("flipDir").removeClass("topFlip");
					$bgaBottom.removeClass("flipDir").removeClass("bottomFlip");
				} else if( dir == "up" ) {
					$bgaTop.addClass("flipDir").addClass("topFlip");
					$bgaBottom.addClass("flipDir").addClass("bottomFlip");						
	
				} else {}
				
				*/
				// NAV ELEMENTS ANIMATIONS
				
				
	
				if( $(this).scrollTop() >= $home && $(this).scrollTop() < $contact - $scrollOffset )
				{   
					$navHome.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#home");
					}
				} else {
					$navHome.removeClass( "selected" );
				}

				if( $(this).scrollTop() >= $contact && $(this).scrollTop() < $about - $scrollOffset )
				{   
					$navContact.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#contact");
					}
				} else {
					$navContact.removeClass( "selected" );
				}
									
				if( $(this).scrollTop() >= $about - $scrollOffset && $(this).scrollTop() < $services - $scrollOffset )
				{   
					$navAbout.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#about");
					}
				} else {
					$navAbout.removeClass( "selected" );
				}

				if( $(this).scrollTop() >= $services - $scrollOffset && $(this).scrollTop() < $tools - $scrollOffset )
				{   
					$navServices.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#services");
					}
				} else {
					$navServices.removeClass( "selected" );
				}

				if( $(this).scrollTop() >= $tools - $scrollOffset && $(this).scrollTop() < $ClientSideSkills - $scrollOffset )
				{   
					$navTools.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#tools");
					}
				} else {
					$navTools.removeClass( "selected" );
				}

				if( $(this).scrollTop() >= $ClientSideSkills - $scrollOffset && $(this).scrollTop() < $ServerSideSkills - $scrollOffset )
				{   
					$navClientSideSkills.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#client-side-skills");
					}
				} else {
					$navClientSideSkills.removeClass( "selected" );
				}
																								
				if( $(this).scrollTop() >= $ServerSideSkills - $scrollOffset && $(this).scrollTop() < $work - $scrollOffset )
				{   
				
					$navServerSideSkills.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#server-side-skills");
					}
				} else {
					$navServerSideSkills.removeClass( "selected" );
				}	
					
				if( $(this).scrollTop() >= $work - $scrollOffset && $(this).scrollTop() < $footer - $winH )
				{   
					$navWork.addClass( "selected" );
					if (window.history && window.history.pushState) {
						history.pushState("", document.title, "#work");
					}
					
					$subNavWork.show();

					var projects_arr = [];
					var $project = $('#work .project-wrap .project');
					var projH = $project.height();
					
					$($project).each(function() {
					
						projects_arr.push( "#"+$(this).attr('id') );
					});
					
					if ( typeof projects_arr !== 'undefined' && projects_arr.length > 0 ){
						
						for(var $a=0;$a<projects_arr.length;$a++){
							
							if ( projects_arr[$a+1] !== 'undefined' ) {

								if ( $(document).scrollTop() + $winH/2 >= $(projects_arr[$a]).offset().top 
								&& $(document).scrollTop() + $winH/2 < $(projects_arr[$a + 1]).offset().top ) {
									$("#subnav-work .menu-item").removeClass( "selected" );
									$("#subnav-work "+projects_arr[$a]).addClass( "selected" );	
							
								} else if ( 
								$(document).scrollTop() + $winH/2  >= 
								$(projects_arr[projects_arr.length - 1]).offset().top 
								&& $(document).scrollTop() + $winH/2 < $('footer').offset().top) {
									$("#subnav-work .menu-item").removeClass( "selected" );
									$("#subnav-work "+projects_arr[projects_arr.length - 1]).addClass( "selected" );											
								}
								
							}
							
						}
					}


				} else {
					$navWork.removeClass( "selected" );
					$subNavWork.hide();
				}
											
		});	
						
		// SROLLMAGIC TO ANIMATE THE DESKTOP NAV
		var main_nav_ctrl = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter" }});
	
		// change behaviour of controller to animate scroll instead of jump
		var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
		var scene = new ScrollMagic.Scene({triggerElement: "body", duration: 200, triggerHook: "onLeave"})
						.setTween(tween)
						//.addIndicators() // add indicators (requires plugin)
						.addTo(main_nav_ctrl);
	
		
		main_nav_ctrl.scrollTo(function (newpos) {
			//var target =  newpos+1000;
			TweenMax.to(window, 5, { scrollTo: {y: newpos}, ease : Cubic.easeInOut });
		});
		
		// SET INIT POS ANCHOR
		var url_anchor = window.location.pathname.split( '/' ).pop();
		
		if ( !window.location.hash ) {
			//alert('no hash');
			location.href = "#home";
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, "#home");
			}
			$("header .nav .home").addClass( "selected" );					
	
		} else {
			//alert('hash');
			var url_anchor = window.location.href.split("/").pop();
					
			location.href = "#"+url_anchor.substring(1);
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, "#"+url_anchor.substring(1));
			}		
			$("header .nav ."+url_anchor.substring(1)).addClass( "selected" );	
			
		}
		
		
		// BIND SCROLL TO ANCHOR LINKS
		$(document).on("click", "header .nav .menu-item", function (e) {
			
			var id = $(this).data( "id" );
			var ballPos = $(this).position().top;// + ($ball.height() / 4);
			
			//var id = $(this).parents('div.menu-item').data('id')
			
			if ($("#"+id).length > 0) {
				e.preventDefault();
			
				$("header .nav .menu-item").removeClass( "selected" ).delay(5000);
					
				if (window.history && window.history.pushState) {
					history.pushState("", document.title, "#"+id);
				}

				//alert($iconHolder.height());
				$ball.animate({ "top": ballPos+"px" }, 5000 );
				
				$("header .nav ."+id).addClass( "selected" ).delay(5000);
				main_nav_ctrl.scrollTo( "#"+id );
	
				
			}
		});
		/*******************************************************************************************
		 **************************** NAV LINKED TO SCROLL EVENT ***********************************
		 *******************************************************************************************/
		
		var $navSectionH = ($('#track').height() - $in.height()) / 7;  
		
		var $homeH = $('#home').outerHeight(true);
		var $contactH = $('#contact').outerHeight(true);
		var $locationH = $('#location').outerHeight(true);
		var $contLocH = $contactH + $locationH;
		var $aboutH = $('#about').outerHeight(true);
		var $servicesH = $('#services').outerHeight(true);
		var $toolsH = $('#tools').outerHeight(true); 
		var $clientSideSkillsH = $('#client-side-skills').outerHeight(true);
		var $serverSideSkillsH = $('#server-side-skills').outerHeight(true);
		
		var $homeStart = 0;
		var $homeEnd = $navSectionH;
		
		var $contactStart = $homeEnd;
		var $contactEnd = $navSectionH * 2;
		
		var $aboutStart = $contactEnd;
		var $aboutEnd = $navSectionH * 3;
		
		var $servicesStart = $aboutEnd;
		var $servicesEnd = $navSectionH * 4;
		
		var $toolsStart = $servicesEnd;
		var $toolsEnd = $navSectionH * 5;
		
		var $clientSideSkillsStart = $toolsEnd;
		var $clientSideSkillsEnd = $navSectionH * 6;
		
		var $serverSideSkillsStart = $clientSideSkillsEnd;
		var $serverSideSkillsEnd = $navSectionH * 7;

		var contrNav = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});

					
					var tween = TweenMax.fromTo($ball, 1,
									{top: $homeStart},
									{top: $homeEnd, ease: Linear.easeNone}
								);

					// build scene
					var scene = new ScrollMagic.Scene({triggerElement: "#home", duration:$homeH})
									.setTween(tween)
									//.addIndicators({name: "loop"}) // add indicators (requires plugin)
									.addTo(contrNav);
					//contact
					var tween = TweenMax.fromTo($ball, 1,
									{top: $contactStart},
									{top: $contactEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#contact", duration:$contLocH })
									.setTween(tween)
									//.addIndicators({name: "contactloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
					//about
					var tween = TweenMax.fromTo($ball, 1,
									{top: $aboutStart},
									{top: $aboutEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#about", duration:$aboutH })
									.setTween(tween)
									//.addIndicators({name: "aboutloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
					//services
					var tween = TweenMax.fromTo($ball, 1,
									{top: $servicesStart},
									{top: $servicesEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#services", duration:$servicesH })
									.setTween(tween)
									//.addIndicators({name: "servicesloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
					//tools
					var tween = TweenMax.fromTo($ball, 1,
									{top: $toolsStart},
									{top: $toolsEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#tools", duration:$toolsH })
									.setTween(tween)
									//.addIndicators({name: "toolsloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
									
					//client side skills
					var tween = TweenMax.fromTo($ball, 1,
									{top: $clientSideSkillsStart},
									{top: $clientSideSkillsEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#client-side-skills", duration:$clientSideSkillsH})
									.setTween(tween)
									//.addIndicators({name: "clientSideSkillsloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
									
					//server side skills
					var tween = TweenMax.fromTo($ball, 1,
									{top: $serverSideSkillsStart},
									{top: $serverSideSkillsEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#server-side-skills", duration:$serverSideSkillsH })
									.setTween(tween)
									//.addIndicators({name: "serverSideSkillsloop"}) // add indicators (requires plugin)
									.addTo(contrNav);

					//work
					/*
					var tween = TweenMax.fromTo($ball, 1,
									{top: $workStart},
									{top: $workEnd, ease: Linear.easeNone}
								);

					var scene = new ScrollMagic.Scene({triggerElement: "#work", duration:$workH })
									.setTween(tween)
									.addIndicators({name: "workloop"}) // add indicators (requires plugin)
									.addTo(contrNav);
					*/

	}
	// END DEVICE CHECK IF
	
	/*******************************************************************************************
	 **************************** HOME PAGE BG IMG PARRALLAX ***********************************
	 *******************************************************************************************/	
	if ($winW < 1240) {		 		
		var contrHomeBGIMG = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: "200%"}});
	} else {	
		var contrHomeBGIMG = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: "300%"}});
	}
	new ScrollMagic.Scene({triggerElement: "#homedesign"})
					.setTween("#homeBG", {y: "30%", ease: Linear.easeNone})
					.addTo(contrHomeBGIMG);	
	/*******************************************************************************************
	 ************************************* WORK SCROLL EFFECTS *********************************
	 *******************************************************************************************/
	 
	 
	var work_ctrl = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: 'onLeave' }	});
			
	$('.project','#content').each(function(){
		
		var pid = $(this).attr('id');
		
		
		var target_title = $(this).children('h1');
		var target_screenshot_bg = $(this).find( ".screenshot .bg-img" );
		var $offset = $winH / 2;
		
		
		new ScrollMagic.Scene({ triggerElement: this, duration: $winH, offset: -$offset })       
				.setTween( target_title, {y: "-"+$offset, ease: Linear.easeNone} )
				.addTo(work_ctrl);	
	
	
		new ScrollMagic.Scene({ triggerElement: this, duration: $winH })       
				.setTween( target_screenshot_bg, { y: "40%", ease: Linear.easeNone } )
				.addTo(work_ctrl);											
				
	});	
	
	$("#work h1").click( function() {

		 window.open($(this).attr("data-id"));   
	});
	$("#work .bg-img div").click( function() {

		 window.open($(this).attr("data-id"));   
	});
	
					
	/*******************************************************************************************
	 ******************************* WORK SCROLL EFFECTS NAV ***********************************
	 *******************************************************************************************/
	/**/
	
	$subNavWorkItem.click(function(e) {	
		if ( !$(this).hasClass( "selected" ) ) {
			  $(this).siblings( ".selected" ).removeClass( "selected" );
			  $(this).addClass( "selected" );				 		  
		}		
	});	
	
	var pOffset = $winH*0.2;
	/**/
	work_ctrl.scrollTo(function(target) {
	
		TweenMax.to(window, 2, {
			scrollTo : {
			y : target-pOffset, // scroll position of the target along y axis
			autoKill : true, // allows user to kill scroll action smoothly
			},
			ease : Cubic.easeInOut
		});
	});
	
	$(document).on("click", "#subnav-work .menu-item", function (e) {
		//var id = $(this).attr("href");
		var id = "#"+$(this).data( "id" );
		//GET ID VAL
		if ($(id).length > 0) {
			e.preventDefault();
			$("#subnav-work .menu-item").removeClass( "selected" ).delay(5000);
			// trigger scroll
			$("#subnav-work "+id).addClass( "selected" );
			work_ctrl.scrollTo(id);
	
			/*
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
			*/
		
		}
	});		
	getMap($winW);
} //adjustWindow();
	

$(window).load(initSite);
$(window).resize(function() {
	location.href=window.location.protocol + "//" + window.location.host + "/";
});

//}); /* end of as page load scripts */
