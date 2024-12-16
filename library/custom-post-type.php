<?php
/* Bones Custom Post Type Example
This page walks you through creating 
a custom post type and taxonomies. You
can edit this one or copy the following code 
to create another one. 

I put this in a separate file so as to 
keep it organized. I find it easier to edit
and change things if they are concentrated
in their own file.

Developed by: Eddie Machado
URL: http://themble.com/bones/
*/

// Flush rewrite rules for custom post types
add_action( 'after_switch_theme', 'bones_flush_rewrite_rules' );

// Flush your rewrite rules
function bones_flush_rewrite_rules() {
	flush_rewrite_rules();
}

// let's create the function for the custom type
function custom_post_projects() { 
	// creating (registering) the custom type 
	register_post_type( 'project', /* (http://codex.wordpress.org/Function_Reference/register_post_type) */
		// let's now add all the options for this post type
		array( 'labels' => array(
			'name' => __( 'Projects', 'bonestheme' ), /* This is the Title of the Group */
			'singular_name' => __( 'Project', 'bonestheme' ), /* This is the individual type */
			'all_items' => __( 'All Projects', 'bonestheme' ), /* the all items menu item */
			'add_new' => __( 'Add New', 'bonestheme' ), /* The add new menu item */
			'add_new_item' => __( 'Add New Project', 'bonestheme' ), /* Add New Display Title */
			'edit' => __( 'Edit', 'bonestheme' ), /* Edit Dialog */
			'edit_item' => __( 'Edit Project', 'bonestheme' ), /* Edit Display Title */
			'new_item' => __( 'New Project', 'bonestheme' ), /* New Display Title */
			'view_item' => __( 'View Project', 'bonestheme' ), /* View Display Title */
			'search_items' => __( 'Search Projects', 'bonestheme' ), /* Search Custom Type Title */ 
			'not_found' =>  __( 'Nothing found in the Database.', 'bonestheme' ), /* This displays if there are no entries yet */ 
			'not_found_in_trash' => __( 'Nothing found in Trash', 'bonestheme' ), /* This displays if there is nothing in the trash */
			'parent_item_colon' => ''
			), /* end of arrays */
			'description' => __( 'This is the Projects custom post type', 'bonestheme' ), /* Custom Type Description */
			'public' => true,
			'publicly_queryable' => true,
			'exclude_from_search' => false,
			'show_ui' => true,
			'query_var' => true,
			'menu_position' => 8, /* this is what order you want it to appear in on the left hand side menu */ 
			'menu_icon' => 'dashicons-format-image',
			//'menu_icon' => get_stylesheet_directory_uri() . '/library/images/custom-post-icon.png', /* the icon for the custom post type menu */
			'rewrite'	=> array( 'slug' => 'projects', 'with_front' => false ), /* you can specify its url slug */
			'has_archive' => 'projects', /* you can rename the slug here */
			'capability_type' => 'post',
			'hierarchical' => false,
			/* the next one is important, it tells what's enabled in the post editor */
			'supports' => array( 'title', 'thumbnail', 'sticky')//, 'editor')
		) /* end of options */
	); /* end of register post type */
	
	/* this adds your post categories to your custom post type */
	//register_taxonomy_for_object_type( 'category', 'projects' );
	/* this adds your post tags to your custom post type */
	//register_taxonomy_for_object_type( 'post_tag', 'portfolio' );
	register_taxonomy_for_object_type( 'skills_tag', 'project' );
	
}

	// adding the function to the Wordpress init
	add_action( 'init', 'custom_post_projects');
	
	add_theme_support( 'post-thumbnails' );
	
	function add_image_sizes()
	{
	
	add_image_size( 'mobile', 300, 300 ); //300 pixels wide (and unlimited height)
	add_image_size( 'tablet', 700, 700 ); //(cropped)
	add_image_size( 'computer', 3000, 3000 ); //(cropped)
	
	}
	add_action('after_setup_theme', 'add_image_sizes');

	// now let's add custom tags (these act like categories)
	register_taxonomy( 'skills_tag', 
		array('custom_type'), /* if you change the name of register_post_type( 'custom_type', then you have to change this */
		array('hierarchical' => false,    /* if this is false, it acts like tags */
			'labels' => array(
				'name' => __( 'Skills Tags', 'bonestheme' ), /* name of the custom taxonomy */
				'singular_name' => __( 'Skill Tag', 'bonestheme' ), /* single taxonomy name */
				'search_items' =>  __( 'Search Skills Tags', 'bonestheme' ), /* search title for taxomony */
				'all_items' => __( 'All Skills Tags', 'bonestheme' ), /* all title for taxonomies */
				'parent_item' => __( 'Parent Skills Tag', 'bonestheme' ), /* parent title for taxonomy */
				'parent_item_colon' => __( 'Parent Skills Tag:', 'bonestheme' ), /* parent taxonomy title */
				'edit_item' => __( 'Edit Skills Tag', 'bonestheme' ), /* edit custom taxonomy title */
				'update_item' => __( 'Update Skills Tag', 'bonestheme' ), /* update title for taxonomy */
				'add_new_item' => __( 'Add New Skills Tag', 'bonestheme' ), /* add new title for taxonomy */
				'new_item_name' => __( 'New Skills Tag Name', 'bonestheme' ) /* name title for taxonomy */
			),
			'show_admin_column' => true,
			'show_ui' => true,
			'query_var' => true,
		)
	);
// META BOX 
/*
function bonestheme_add_project_background_metabox() {
    add_meta_box(
        'bonestheme-project-background-metabox',
        __( 'Background Image', 'bonestheme' ),
        'bonestheme_render_project_background_metabox',
        'project',
        'advanced',
        'core'
    );
}
add_action( 'add_meta_boxes', 'bonestheme_add_project_background_metabox' );
*/
function bonestheme_render_project_background_metabox() { global $post; ?>

<style> .media-upload h2 { font-weight: bold; } </style>

<script>

( function( $ ) {

   $(document).ready(

       function()

       {

             $('#upload_image_button').click(

                 function()

                 {
                     tb_show('', 'media-upload.php?post_id=<?php  echo $post->ID; ?>&type=image&amp;TB_iframe=true');

                     return false;

                 }

             );
       }

   );

} ) ( jQuery );

</script>

<div class="media-upload">
    <h2>Upload Media</h2>

    <table>

       <tr valign="top">

          <td><input id="upload_image_button" type="button" value="Upload Media"></td>

       </tr>

    </table>

</div>

<?php }
/*
function admin_scripts()

{

   wp_enqueue_script('media-upload');

   wp_enqueue_script('thickbox');

}

function admin_styles()

{

   wp_enqueue_style('thickbox');

}

add_action('admin_print_scripts', 'admin_scripts');

add_action('admin_print_styles', 'admin_styles');
*/   
if (class_exists('MultiPostThumbnails')) {
    new MultiPostThumbnails(
        array(
            'label' => 'Background Image',
            'id' => 'background-image',
            'post_type' => 'project'
        )
    );
}
// META BOX TO PROJECT URL
function bonestheme_add_project_url_info_metabox() {
	add_meta_box(
		'bonestheme-project-url-metabox',
		__( 'Project Url', 'bonestheme' ),
		'bonestheme_render_project_url_info_metabox',
		'project',
		'normal',
		'core'
	);
}
add_action( 'add_meta_boxes', 'bonestheme_add_project_url_info_metabox' );	

function bonestheme_render_project_url_info_metabox( $post ) {
 
    // generate a nonce field
    wp_nonce_field( basename( __FILE__ ), 'bonestheme-project-url-nonce' );
 
    // get previously saved meta values (if any)
	$project_url = get_post_meta( $post->ID, 'project-url', true );
 
    ?>
        
<label for="bonestheme-project-url"><?php _e( 'Project Url:', 'bonestheme' ); ?></label>
        <input class="widefat" id="bonestheme-project-url" type="text" name="bonestheme-project-url" value="<?php echo $project_url; ?>" />

<?php
}

//SAVE PROJECT META DATA
function bonestheme_save_project_url_info( $post_id ) {
 
    // checking if the post being saved is an 'event',
    // if not, then return
    if ( 'project' != $_POST['post_type'] ) {
        return;
    }
 
    // checking for the 'save' status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST['bonestheme-project-url-nonce'] ) && ( wp_verify_nonce( $_POST['bonestheme-project-url-nonce'], basename( __FILE__ ) ) ) ) ? true : false;
 
    // exit depending on the save status or if the nonce is not valid
    if ( $is_autosave || $is_revision || ! $is_valid_nonce ) {
        return;
    }
 
    // checking for the values and performing necessary actions
    if ( isset( $_POST['bonestheme-project-url'] ) ) {
		$url = "http://".sanitize_text_field( $_POST['bonestheme-project-url'] );
        update_post_meta( $post_id, 'project-url', $url );
    }

}
add_action( 'save_post', 'bonestheme_save_project_url_info' );

?>
