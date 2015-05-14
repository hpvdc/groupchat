var SocketIO = require( 'socket.io-client' );

var io = SocketIO({
    path: '/io',
    reconnect: true
});

module.exports = io;
