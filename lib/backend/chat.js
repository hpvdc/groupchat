var io = require( './io' );

io.on( 'connection', function ( socket ) {
    socket.on( 'chat.message', function ( msg ) {
        io.emit( 'chat.message', socket.id, msg );
    });

    socket.on( 'alter.name', function ( msg ) {
        
    });
});
