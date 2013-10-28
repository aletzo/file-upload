var connect = Npm.require( 'connect' );

RoutePolicy.declare( '/upload', 'network' );

WebApp.connectHandlers.use( '/upload', connect.static( process.env['APP_DYN_CONTENT_DIR'] ) );
