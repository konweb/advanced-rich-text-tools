<?php

/**
 * Plugin Name: Advanced Rich Text Tools for Gutenberg Add On
 * Plugin URI: https://github.com/konweb/advanced-rich-text-tools?organization=konweb&organization=konweb
 * Description: Adds additional tools for rich text fields such as superscript and subscript.
 * Version: 1.0.0
 * Author: Naoto Kondo
 */

add_action( 'init', function() {
	wp_enqueue_script(
		'advanced-rich-text-tools',
		plugins_url( 'dist/index.js', __FILE__ ),
		array(
			'wp-element',
			'wp-rich-text',
			'wp-format-library',
			'wp-i18n',
			'wp-editor',
			'wp-compose',
			'wp-components',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);
	wp_enqueue_style(
		'advanced-rich-text-tools',
		plugins_url( 'index.css', __FILE__ ),
		array(),
		filemtime( dirname( __FILE__ ) . '/index.css' )
	);
} );
