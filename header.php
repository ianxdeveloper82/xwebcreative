<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php echo get_bloginfo( 'name' ) . " || " . get_bloginfo( 'description', 'display' ); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/library/images/iancross-logo.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
            <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
        
        <!--<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/font-awesome-4.3.0/css/font-awesome.min.css">-->
		<noscript>
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/library/css/cslidernojs.css" />
		</noscript>
		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>
<script type="text/javascript">
var pluginsUrl = '<?= get_template_directory_uri(); ?>';
</script>

	</head>

	<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
    <div class="loadMask modern">
		<div class="loadcenter">
			<div class="loadcenter_wrap">
            <p>IAN CROSS WEB DESIGN<br>LOADING...</p>
				<svg class="l1" width="320px" height="320px">
					<path d="M160,0.5C212.9,53.4,319.5,160,319.5,160 L160,319.5L0.5,160L160,0.5z"></path>
				</svg>
				<svg class="l2" width="320px" height="320px">
					<path d="M160,40.5C184,64.5,279.5,160,279.5,160 L160,279.5L40.5,160L160,40.5z"></path>
				</svg>
				<svg class="l3" width="320px" height="320px">
					<path d="M160,80.5c21.7,21.7,79.5,79.5,79.5,79.5 L160,239.5L80.5,160L160,80.5z"></path>
				</svg>           
			</div>
		</div>
	</div>
    <div id="trigger-bg"></div>       
   <div id="mobile-header">
        <div class="nav">
            <ul>
                <li><a class="close" href="#home">Home</a></li>
                <li><a class="close" href="#contact">Contact</a></li>
                <li><a class="close" href="#about">About</a></li>
                <li><a class="close" href="#services">Services</a></li>
                <li><a class="close" href="#tools">Tools</a></li>
                <li><a class="close" href="#client-side-skills">Client Side Skills</a></li>
                <li><a class="close" href="#server-side-skills">Server Side Skills</a></li>
                <li><a class="close" href="#work">Work</a></li>
                <li><div class="icon-times"></div></li>
            </ul>
        </div>
        <div id="menu-tab" class="triangle"></div>
        <div class="icon-menu"></div> 
   </div>  
   <header role="banner" itemscope itemtype="http://schema.org/WPHeader">
            
            
		<?php //bloginfo('name'); ?>

         <nav class="nav" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">

<!--<div class="main-menu" style="visibility: inherit; opacity: 1; width: 34px;">-->

            <div class="menu-holder">
                <div class="list">

                   
                   <div id="line"></div>
                   <div id="track"><div id="ball"></div></div>
                   
                   <div id="nav-home" data-id="home" class="home menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        </div>
                        <p>
                            <span>home</span>
                        </p>
                   </div>
                    
                   <div class="space"></div>

                   <div id="nav-contact" data-id="contact" class="contact menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        </div>
                        <p>
                            <span>contact</span>
                        </p>
                   </div>
                    
                   <div class="space"></div>
                   
                   <div id="nav-about" data-id="about" class="about menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>                                
                        <!--
                            <img id="in1" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out1" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                            -->
                       </div>
                       <p>
                            <span>About</span>
                       </p>
                   </div>
                    
                   <div class="space"></div>

                  <div id="nav-services" data-id="services" class="services menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        <!--                                  
                            <img id="in0" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out0" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                            -->
                        </div>
                        <p>
                            <span>Services</span>
                        </p>
                   </div>

                    <div class="space"></div>

                  <div id="nav-tools" data-id="tools" class="tools menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        <!--                                  
                            <img id="in0" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out0" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                            -->
                        </div>
                        <p>
                            <span>Tools</span>
                        </p>
                   </div>
                   
                   <div class="space"></div>

                  <div id="nav-client-side-skills" data-id="client-side-skills" class="client-side-skills menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        <!--                                  
                            <img id="in0" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out0" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                            -->
                        </div>
                        <p>
                            <span>Client Side Skills</span>
                        </p>
                   </div>   
                   
                  <div class="space"></div>
                   
                  <div id="nav-server-side-skills" data-id="server-side-skills" class="server-side-skills menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div>  
                        <!--                                  
                            <img id="in0" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out0" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                            -->
                        </div>
                        <p>
                            <span>Server Side Skills</span>
                        </p>
                   </div>                             
                                                                      
                   <div class="space"></div>
                     
                   <div id="nav-work" data-id="work" class="work menu-item">
                        <div class="icon-holder">
                            <div class="in"></div>
                            <div class="out"></div> 
                          <!--                                 
                            <img id="in2" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">

                            
                            <img id="out2" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">
                        -->
                        </div>
                        <p>
                            <span>work</span>
                        </p>
                    </div>                                      

                    
                   <!--<div class="space"></div>-->
                                                      
        
                     
                   
               </div>
            </div> 
         </nav>
   </header>
                 
   <div id="container"> 	  
        
        

