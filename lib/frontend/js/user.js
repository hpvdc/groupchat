var User = require( '../../shared/user' );
var io = require( './io' );

io.on( 'user.register', function ( id ) {
    var user = new User( id );
    user.register();
});

io.on( 'user.unregister', function ( id ) {
    var user = User.s[ id ];
    if ( ! user ) return;
    user.unregister();
});

module.exports = User;
