( function () {
	'use strict';

	angular.module( 'app.core', [
		// Angular modules
		'ngAnimate', 'ngRoute', 'ngSanitize', 'templates', 'ngResource',
		// Reusable cross app code modules
		'blocks.exception', 'blocks.logger', 'blocks.router'
		// helpers
	] );
} )();
