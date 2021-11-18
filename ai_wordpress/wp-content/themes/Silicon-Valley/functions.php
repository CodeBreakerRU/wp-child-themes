<?php

function my_theme_enqueue_styles() { 
     wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
 }
 add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );


function remove_footer_admin () {
echo 'Web Development Russia';
}
add_filter('admin_footer_text', 'remove_footer_admin');