var User = require( '../shared/user' );
var io = require( './io' );

io.on( 'connection', function ( socket ) {

    var user = new User( socket.id );

    user.socket = socket;
    socket.user = user;

    io.emit( 'user.register', socket.id );
    user.register();

    socket.on( 'disconnect', function () {
        io.emit( 'user.unregister', socket.id );
        user.unregister();
    });

});

module.exports = User;
