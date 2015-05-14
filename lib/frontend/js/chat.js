var jquery = require( 'jquery' );
var User = require( './user' );
var win = require( './chat-window' );
var io = require( './io' );

win.log( 'Connected' );

Object.observe(User.s, function( changes ){
    changes.forEach(function( change ){
        if(change.type || change.name === undefined)
            win.message(update, name, change.oldValue);
        else
            win.message(change.type, change.name, change.oldValue);
    });
});


io.on( 'chat.message', function ( id, msg ) {
    var user = User.s[ id ];
    win.message( user, msg );
});

// send message
jquery( '#send-message' ).on( 'click', function ( e ) {
    var $msg = jquery( '#message' );
    var message = $msg.val();

    // limpar a input
    $msg.val('');

    // enviar
    io.emit( 'chat.message', message );

    // do not do anything stupid
    e.preventDefault();
});

jquery( '#name' ).on( 'change', function ( e ) {
    var $name = jquery( '#name' );
    var name = $name.val();

    // limpar a input
    $name.val('');

    //envia
    io.emit( 'alter.name', name );

    // do not do anything stupid
    e.preventDefault();
});

//alter name

User.s.on( 'registered', function ( user ) {
    win.log( (  user.id || user.name ) + ' is now connected' );
});

User.s.on( 'unregistered', function ( user ) {
    win.log( ( user.id || user.name ) + ' is now disconnected' );
});
