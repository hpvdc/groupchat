var SocketIO = require( 'socket.io-client' );

var io = SocketIO({
    endpoint: '',
    path: '/io',
    reconnect: true
});


module.exports = io;
