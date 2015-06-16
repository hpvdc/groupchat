var User = require( '../../shared/user' );
var io = require( './io' );
var debug = require( 'debug' )( 'groupchat:frontend:user' );


Object.observe(User.s, function( changes ){
    changes.forEach(function( change ){
        /*
        if(change.type || change.name === undefined)
            win.message(update, name, change.oldValue);
        else
        */
        win.message(change.type, change.name, change.oldValue);
    });
});

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
