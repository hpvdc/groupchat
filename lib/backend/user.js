var User = require( '../shared/user' );
var Util = require( 'findhit-util' );
var io = require( './io' );
var debug = require( 'debug' )( 'groupchat:backend:user' );

io.on( 'connection', function ( socket ) {

    console.log( 'user connected ' + socket.id );


    Util.each( User.s, function ( user, id ) {
        debug( 'emiting knowledge of user ' + id + ' to user ' + socket.id );
        socket.emit( 'user.register', id );
    });

    var user = new User( socket.id );

    user.register();
    io.emit( 'user.register', socket.id );
    debug('user registered: ',user);
    user.socket = socket;
    socket.user = user;


    socket.on( 'disconnect', function () {
        io.emit( 'user.unregister', socket.id );
        console.log( 'user disconnected ' + socket.id );
        user.unregister();
    });

});

module.exports = User;
