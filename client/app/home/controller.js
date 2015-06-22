( function () {
	'use strict';

	function Home ( logger ) {
		var self   = this;
		self.title = 'Homepage';

		function activate () {
			logger.info( 'Activated Homepage View' );
		}

		activate();
	}

	angular.module( 'app.home' )
		.controller( 'Home', Home );

	Home.$inject = [ 'logger' ];
} )();
