
<!DOCTYPE html><html class="no-js" lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><script src="http://1.2.3.8/bmi-int-js/bmi.js" language="javascript"></script><meta name="viewport" content="width=500" /><meta name="author" content="Jan Paepke (www.janpaepke.de)" /><title>Mobile Support (Basic) - ScrollMagic</title> <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,400italic|Josefin+Slab:400,700italic' rel='stylesheet' type='text/css'><link rel="stylesheet" href="../../css/normalize.css" type="text/css"><link rel="stylesheet" href="../../css/style.css" type="text/css"><link rel="stylesheet" href="../../css/examples.css" type="text/css"><link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"><script type="text/javascript" src="../../js/lib/jquery.min.js"></script> <script type="text/javascript" src="../../js/lib/highlight.pack.js"></script> <script type="text/javascript" src="../../js/lib/modernizr.custom.min.js"></script> <script type="text/javascript" src="../../js/examples.js"></script> <script type="text/javascript" src="../../js/lib/greensock/TweenMax.min.js"></script> <script type="text/javascript" src="../../scrollmagic/uncompressed/ScrollMagic.js"></script> <script type="text/javascript" src="../../scrollmagic/uncompressed/plugins/animation.gsap.js"></script> <script type="text/javascript" src="../../scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script> </head>


<body>
<ul id="menu"></ul>
<div id="content-wrapper">
	<div id="example-wrapper" class="scrollContainer">
    	<div class="scrollContent">
        	<section id="titlechart">
            	<div id="description">
                	<h1 class="badge gsap">Mobile Support (Basic)</h1>
                    <h2>Try this page on your mobile device!</h2>
                    <p><i><b>Note:</b> This does not concern iOS 8+, as it finally supports real scroll events.</i></p>
                    <p>ScrollMagic works just as well on mobile devices.<br>One big drawback is that mobile devices dispatch the scroll event AFTER the scroll is complete and not DURING.<br>To get support for on-the-fly updates the easiest way is to wrap all your content into a big container with the size of the viewport and scroll within it instead (like shown in this example).<br>Unfortunately this also results in loosing the scroll momentum. To see how you can preserve it check "
                    <a href="../expert/mobile_advanced.html">Mobile Support (advanced)</a>".</p>
               </div>
           </section> 
           <section class="demo">
           	<div class="spacer s1"></div>
            <div class="spacer s1" id="trigger"></div>
            <div class="spacer s0"></div>
            <div class="mario box2"></div>
            <div class="goomba box3"></div><
            div class="spacer s7"></div>
          </section>
      </div> <!-- scrollContent -->
	  
	  <script>
				// build tween
				var tween = new TimelineMax ()
					.add([
						TweenMax.to(".mario", 1, {left: 50, ease: Circ.easeIn}),
						TweenMax.to(".mario", 1, {top: -60, ease: Circ.easeOut})
					])
					.add([
						TweenMax.to(".mario", 1, {top: 0, ease: Circ.easeIn}),
						TweenMax.to(".mario", 1, {left: 70, ease: Circ.easeOut})
					])
					.add(
						TweenMax.to(".goomba", 0.5, {scaleY: 0.1, "margin-top": 93, "margin-bottom": 7, ease: Circ.easeIn}), 1.5
					);

				// init controller
				var controller = new ScrollMagic.Controller({container: "#example-wrapper"});

				// build scene
				var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
								.setTween(tween)
								.addIndicators() // add indicators (requires plugin)
								.addTo(controller);
	</script>
    </div>
</div>

<script type="text/javascript" src="../../js/tracking.js"></script> 
</body>
</html>
<script language="javascript"><!--
bmi_SafeAddOnload(bmi_load,"bmi_orig_img",0);//-->
</script>


<!----------------------------------------------------------------------------------------------------------------->

<div class="spacer s2"></div>
<div class="spacer s0" id="trigger"></div>
<div id="mobileadvanced" class="box1 blue disablePointerEvents">
<p>What's the Point?</p>
<a href="#" class="viewsource">view source</a>
</div>
<div class="spacer s7"></div>
<script type="text/javascript" src="../../js/lib/iscroll-probe.js"></script> 
<script>
						$(function () { // wait for document ready					
							// init controller
							var controller = new ScrollMagic.Controller({container: "#example-wrapper"});

							// init tween
							var tween = TweenMax.to("#mobileadvanced", 1, {backgroundColor: "black", scale: 0.4, borderRadius: 75});

							// init scene
							var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 75})
											.setTween(tween)
											.setPin("#mobileadvanced")
											.addTo(controller);

							// detect if mobile browser. regex -> http://detectmobilebrowsers.com
							var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
							
							// we'd only like to use iScroll for mobile...
							if (isMobile) {
								// configure iScroll
								var myScroll = new IScroll('#example-wrapper',
											{
												// don't scroll horizontal
												scrollX: false,
												// but do scroll vertical
												scrollY: true,
												// show scrollbars
												scrollbars: true,
												// deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
												// if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
												useTransform: false,
												// deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
												useTransition: false,
												// set to highest probing level to get scroll events even during momentum and bounce
												// requires inclusion of iscroll-probe.js
												probeType: 3,
												// pass through clicks inside scroll container
												click: true 
											}
										);
								
								// overwrite scroll position calculation to use child's offset instead of container's scrollTop();
								controller.scrollPos(function () {
									return -myScroll.y;
								});

								// thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
								myScroll.on("scroll", function () {
									controller.update();
								});

								// add indicators to scrollcontent so they will be moved with it.
								scene.addIndicators({parent: ".scrollContent"});
							} else {
								// add indicators (requires plugin)
								scene.addIndicators();						
							}
						});
					</script>