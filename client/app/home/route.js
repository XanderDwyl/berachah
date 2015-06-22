( function () {
	'use strict';

	function getRoutes () {
		return [
			{
				'url' : '/home',

				'config' : {
					'templateUrl'  : '/templates/home/template.html',
					'controller'   : 'Home',
					'controllerAs' : 'vm',
					'title'        : 'home',

					'settings' : {
						'nav'     : 1,
						'content' : '<span class="icon-layout"></span> Home'
					}
				}
			}
		];
	}

	/* @ngInject */
	function appRun ( routehelper ) {
		routehelper.configureRoutes( getRoutes() );
	}

	angular
		.module( 'app.home' )
		.run( appRun );

} )( );
