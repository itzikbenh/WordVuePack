<?php 

function theme_styles() {
    // wp_enqueue_style( 'vendor_css', get_template_directory_uri() . '/public/css/vendor.css' );
    // //To avoid caching I use time, remove it in production.   
    // wp_enqueue_style( 'theme_css', get_template_directory_uri() . '/public/css/app.css?='.time() );

    //For development only! This is where webpack-dev-server would serve the assets from.
    wp_enqueue_style( 'vendor_css', 'http://localhost:8080/vendor.css' );
    wp_enqueue_style( 'theme_css', 'http://localhost:8080/app.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_styles' );

function theme_js() {
    //wp_enqueue_script( 'vendor_js', get_template_directory_uri() . '/public/js/vendor.js', '', '', true );    
    //To avoid caching I use time, remove it in production.    
    //wp_enqueue_script( 'theme_js', get_template_directory_uri() . '/public/js/app.js?='.time(), array('vendor_js'), '', true );

    //For development only! This is where webpack-dev-server would serve the assets from.
    wp_enqueue_script( 'vendor_js', 'http://localhost:8080/vendor.js', '', '', true );
    wp_enqueue_script( 'theme_js', 'http://localhost:8080/app.js', array('vendor_js'), '', true );
}
add_action( 'wp_enqueue_scripts', 'theme_js' );

add_theme_support( 'menus' );
add_theme_support( 'post-thumbnails' ); 

 
