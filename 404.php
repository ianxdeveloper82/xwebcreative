<?php get_header('404'); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

					<main id="main" class="m-all t-all d-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">
						

                        <div id="logo" class="" itemscope itemtype="http://schema.org/Organization">
                        <a href="<?php echo get_site_url(); ?>">                        
                        <img src="<?php echo get_template_directory_uri(); ?>/library/images/iancross-logo-full.png" 
 	alt="Ian Cross Web Design Logo" title="Ian Cross Web Design Logo" />
    					</a>
                        </div>
                        
						<article id="post-not-found" class="hentry cf">

							<header class="article-header">

								<h1><?php _e( 'Epic 404 - Article Not Found', 'bonestheme' ); ?></h1>

							</header>

						</article>

					</main>

				</div>

			</div>

<?php get_footer(); ?>
