( function () {
	'use strict';

	function Layout ( $rootScope, config, logger ) {
		var self   = this;
		self.title = config.appTitle;

		function activate () {
			logger.success( config.appTitle + ' loaded!', null );
		}

		activate();
	}

	angular
		.module( 'app.layout' )
		.controller( 'Layout', Layout );

	Layout.$inject = [ '$rootScope', 'config', 'logger' ];

} )( );
