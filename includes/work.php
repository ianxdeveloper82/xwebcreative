
<div class="title"><h1>my work</h1></div>

<div class="project-wrap">

<?php $bg = 'right'; ?>
        <?php $projectQuery = new WP_Query( array('post_type' => 'project') ); ?>
        <?php if ( $projectQuery->have_posts() ) : ?>
        
        <?php while ( $projectQuery->have_posts() ) : $projectQuery->the_post();  ?>

		<?php $bg = ($bg == 'left' ? 'right' : 'left'); ?>
				<!--
                <div id="project_<?php echo $post->ID; ?>" class="project section" 
                style="background-image: url('<?php if (class_exists('MultiPostThumbnails')) :
                        echo MultiPostThumbnails::get_post_thumbnail_url(
                            get_post_type(),
                            'background-image',
							NULL, 'full', NULL, NULL
							
                        );
                    endif; ?> '); ">
                -->
                <div id="project_<?php echo $post->ID; ?>" class="project <?php echo $bg; ?>">
                <!--
                <div class="tt tt-<?php echo $bg; ?>"></div>
                <div class="bt bt-<?php echo $bg; ?>"></div>
                -->
                <?php $project_url = get_post_meta( $post->ID, 'project-url', true ); ?>
               
                
                   <h1 data-id="<?php echo $project_url; ?>"><?php the_title(); ?></h1>
                   <?php  
						$img_id = get_post_thumbnail_id();
						$img_url_array = wp_get_attachment_image_src($img_id, 'full', true);
						$img_url = $img_url_array[0];
					?>
                        <div class="screenshot bgi">
                        <!--<a href="<?php echo $project_url; ?>" class="link btns" target="_blank"></a>-->
                        	<div class="bg-img">
                            	<div data-id="<?php echo $project_url; ?>" style="background-image: url('<?php echo $img_url; ?>');"></div> 
                            </div>
                        </div>
                </div>
		
        <?php endwhile; ?>
    
        <?php wp_reset_postdata(); ?>
    
        <?php else : ?>
        	<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>                   

		
        <div id="pcount" data-id="<?php echo $pcount; ?>" style="visibility: hidden"></div>

     	<div id="subnav-work">
  			<div class="menu-holder">
				<?php $projectQuery = new WP_Query( array('post_type' => 'project') ); ?>
                <?php if ( $projectQuery->have_posts() ) : ?>
                <?php $count = 1; ?>
                <?php while ( $projectQuery->have_posts() ) : $projectQuery->the_post();  ?>        

            <div id="project_<?php echo $post->ID; ?>" data-id="project_<?php echo $post->ID; ?>" class="<?php the_title(); if($count == 1 ) { echo ' selected'; } ?> menu-item">
               
                    <img id="in0" class="in" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-in-black.png" border="0">
                    <img id="out0" class="out" src="<?php echo get_template_directory_uri(); ?>/library/images/nav/icon-menu-circle-out-black.png" border="0">

           </div>
            
		   <div class="space"></div>                
                <?php $count++; ?>
                <?php endwhile; ?>
            
                <?php wp_reset_postdata(); ?>
            
                <?php else : ?>
                    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
                <?php endif; ?>  
       		</div>
        </div> 	
</div>