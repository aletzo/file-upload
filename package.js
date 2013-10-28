Package.describe( {
    summary: "Allows the ./upload to be used as a file upload directory."
} );

Npm.depends( {
    connect: "2.7.10"
} );

Package.on_use( function( api ) {
    api.use( ['webapp', 'routepolicy'], 'server' );

    api.add_files( 'file-upload.js', 'server' ); 
} );
