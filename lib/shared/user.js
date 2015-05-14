var EventEmitter = require( 'events' ).EventEmitter;

function User ( id ) {
    this.id = id;
}

User.prototype = Object.create( EventEmitter.prototype );

User.s = Object.create( EventEmitter.prototype );

User.prototype.register = function(){
    User.s[ this.id ] = this;
    User.s.emit( 'registered', this );
    this.emit( 'registered', this );
};

User.prototype.unregister = function(){
    delete User.s[ this.id ];
    User.s.emit( 'unregistered', this );
    this.emit( 'unregistered', this );
};

module.exports = User;
