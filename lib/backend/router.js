var server = require( './http-server' );
var express = require( 'express' );

var router = express();

//router.listen( server );
server.on( 'request', function ( req, res ) {

    if ( req.url.match( /^\/io\//i ) ) {
        return;
    }

    router.apply( this, arguments );
});

module.exports = router;

// middlewares
router.use( express.static( 'www' ) );
