var io = require( './io' );
var debug = require( 'debug' )( 'groupchat:backend:chat' );
io.on( 'connection', function ( socket ) {
    socket.on( 'chat.message', function ( msg ) {
        io.emit( 'chat.message', socket.id, msg );
        //debug('from: ',user,'message: ',msg);
    });


/*
    socket.on( 'alter.name ', function( name ){
        User.s[ socket.id ].setName( name );

    });
*/
});
