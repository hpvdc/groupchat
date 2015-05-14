var SocketIO = require( 'socket.io' );
var server = require( './http-server' );

var io = SocketIO({
    path: '/io',
    'browser client': false,
    log: false
});

io.listen( server );

module.exports = io;
