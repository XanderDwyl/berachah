'use strict';

var Path   = require( 'path' );
var Hapi   = require( 'hapi' );
var server = new Hapi.Server();

server.connection ( { port : 4000 } );

var route = [
	{
		'method'  : 'GET',
		'path'    : '/{param*}',
		'handler' : {
			'directory' : {
				'path' : Path.join( __dirname, 'client' )
			}
		}
	},
	{
		'method'  : 'GET',
		'path'    : '/templates/{param*}',
		'handler' : {
			'directory' : {
				'path' : 'client/app'
			}
		}
	},
	{
		'method' : 'GET',
		'path'   : '/bower_components/{param*}',

		'handler' : {
			'directory' : {
				'path' : 'bower_components'
			}
		}
	}
];

if ( process.env.NODE_ENV === 'production' ) {
	// override route when NODE_ENV is set to production
	// this is for testing dist build only
	route = {
		'method' : 'GET',
		'path'   : '/{param*}',

		'handler' : {
			'directory' : {
				'path' : 'build'
			}
		}
	};
} else {
	server.ext( 'onPreResponse', function ( request, reply ) {
		if ( request.response.statusCode === undefined ) {
			return reply.redirect( '/#!' + request.path );
		}
		return reply.continue();
	} );
}

server.route( route );

server.start( function ( err ) {
	console.log( 'server running on port ' + server.info.port );
} );
