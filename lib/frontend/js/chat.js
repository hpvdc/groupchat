var jquery = require('jquery');
var User = require('./user');
var win = require('./chat-window');
var io = require('./io');
var Util = require('findhit-util');
var debug = require( 'debug' )( 'groupchat:frontend:chat' );
win.log('Connected');



io.on('chat.message', function(id, msg) {
    var user = User.s[id];
    win.message(user, msg);
    
});


// send message
jquery('#send-message').on('click', function(e) {
    var $msg = jquery('#message');
    var message = $msg.val();

    // limpar a input
    $msg.val('');

    // enviar
    io.emit('chat.message', message);

    // do not do anything stupid
    e.preventDefault();
});

jquery('#name').on('change', function(e) {
    var $name = jquery('#name');
    var name = $name.val();

    // limpar a input
    $name.val('');

    //envia
    io.emit('alter.name', name);

    // do not do anything stupid
    e.preventDefault();
});

//alter name

User.s.on('registered', function(user) {
    win.log((user.name || user.id) + ' is now connected');
});

User.s.on('unregistered', function(user) {
    win.log((user.name || user.id) + ' is now disconnected');
});
