var messages = document.getElementById( 'messages' );

var win = exports;

win.append = function ( text ) {
    var el = document.createElement( 'div' );
    el.innerText = text;
    messages.insertBefore( el, messages.firstChild );
    return el;
};

win.message = function ( user, message ) {
    return win.append( ( user.name || user.id ) + ' : ' + message );
};

win.log = function ( message ) {
    return win.append( message );
};
